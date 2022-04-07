import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { StackScreenNavigationProps } from '../../navigation/authStack/types';
import { COMMON_STACK_NAME } from '../../enum/enum';
import { CommonStackParamList } from '../../navigation/commonStack/types';
import { dayWeatherInfo } from './types';
import { styles } from './style';
import { WeatherCardDayTemplate } from '../../components/WeatherCardTemplate/WeatherCardTemplate';
import { useDispatch, useSelector } from 'react-redux';
import { requestStatus } from '../../store/reducers/appReducer';
import { toggleAppStatus } from '../../store/actions/app';
import { selectStatusApp } from '../../store/selectors/appSelector';
import { Icon } from 'react-native-elements';
import { AppStoreType } from '../../store/store';
import { DataItemType } from '../ListCitiesScreen/types';
import { toggleSelectedCity } from '../../store/actions/cities';

export const WeatherCardScreen = (
  props: StackScreenNavigationProps<
    COMMON_STACK_NAME.WEATHER,
    CommonStackParamList
  >,
) => {
  const { route, navigation } = props;
  const { title } = route.params!;

  const dispatch = useDispatch();
  const statusApp = useSelector(selectStatusApp);

  const currentCity = useSelector<AppStoreType, DataItemType[]>((state) =>
    state.cities.cities.filter((city) => city.city === title),
  );

  const [data, setData] = useState<dayWeatherInfo | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;
    if (title) {
      getWeatherInfo(title);
    }
    return () => {
      mounted = false;
    };
  }, [title]);

  const getWeatherInfo = async (title: string) => {
    try {
      dispatch(toggleAppStatus(requestStatus.LOADING));
      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${title}&lang=ru&units=metric&appid=ef8dbe91097853f46a4f5c2d9130a67d`;
      const response = await fetch(weatherURL);
      const responseForRender = await response.json();
      if (responseForRender.cod === '404') {
        setError(true);
        dispatch(toggleAppStatus(requestStatus.FAILED));
      } else {
        setData(responseForRender);
        dispatch(toggleAppStatus(requestStatus.IDLE));
      }
    } catch (e) {
      console.warn(e);
    }
  };

  const valuesForWeather = {
    temp_max: data?.['main']?.['temp_max'],
    temp_min: data?.['main']?.['temp_min'],
    feels_like: data?.['main']?.['feels_like'],
  };
  const current_Day = new Date().toLocaleString('ru').slice(4, 16);

  const toggleSelectedCityIconPress = () => {
    setHasChanged(true);
    dispatch(toggleSelectedCity(title));
  };

  const [hasChanged, setHasChanged] = useState<boolean>(false);
  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (!hasChanged) {
        return;
      }
      e.preventDefault();
      Alert.alert(
        '',
        'You have changed favorite icon. Are you sure, that you wanted it?',
        [
          {
            text: "Don't leave",
            style: 'cancel',
            onPress: () => {},
          },
          {
            text: 'Yes',
            style: 'destructive',
            onPress: () => navigation.dispatch(e.data.action),
          },
        ],
      );
    });
    return unsubscribe;
  }, [navigation, hasChanged]);

  if (error) {
    navigation.navigate(COMMON_STACK_NAME.ERROR);
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      {statusApp === requestStatus.LOADING ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={{ alignItems: 'center' }}>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Hello, {title}!</Text>
          </View>
          <Icon
            tvParallaxProperties
            name={currentCity[0].selected ? 'star' : 'star-outline'}
            type="ionics"
            onPress={() => toggleSelectedCityIconPress()}
          />
          <View style={styles.infoContainer}>
            <WeatherCardDayTemplate
              day={current_Day}
              tempMax={valuesForWeather.temp_max}
              tempMin={valuesForWeather.temp_min}
              feelsLike={valuesForWeather.feels_like}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
