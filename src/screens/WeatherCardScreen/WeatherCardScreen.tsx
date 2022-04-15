import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { StackScreenNavigationProps } from '../../navigation/authStack/types';
import { COMMON_STACK_NAME } from '../../enum/enum';
import { CommonStackParamList } from '../../navigation/commonStack/types';
import { WeatherCardDayTemplate } from '../../components/WeatherCardTemplate/WeatherCardTemplate';
import { useDispatch, useSelector } from 'react-redux';
import { requestStatus } from '../../store/reducers/appReducer';
import { getError, selectStatusApp } from '../../store/selectors/appSelector';
import { Icon } from 'react-native-elements';
import { toggleSelectedCity } from '../../store/actions/cities';
import { getCities } from '../../store/selectors/citySelector';
import { getDayWeatherInfo } from '../../store/selectors/weatherSelector';
import { weatherGetInfo } from '../../store/sagas/sagasActions';
import { AppButton } from '../../components/AppButton/AppButton';
import { styles } from './style';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../../assets/not_found.png');

export const WeatherCardScreen = (
  props: StackScreenNavigationProps<
    COMMON_STACK_NAME.WEATHER,
    CommonStackParamList
  >,
) => {
  const { route, navigation } = props;
  const { title } = route.params;

  const dispatch = useDispatch();

  const statusApp = useSelector(selectStatusApp);
  const cities = useSelector(getCities);
  const dataFromRedux = useSelector(getDayWeatherInfo);
  const error = useSelector(getError);

  const currentCity = cities.find((city) => {
    if (title && city.city === title) {
      return city;
    }
  });

  useEffect(() => {
    let mounted = true;
    if (title) {
      dispatch(weatherGetInfo(title));
    }
    return () => {
      mounted = false;
    };
  }, [title]);

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
            onPress: () => {
              console.log('Cancel');
            },
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

  return (
    <SafeAreaView style={styles.rootContainer}>
      {statusApp === requestStatus.LOADING ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={{ alignItems: 'center' }}>
          {error ? (
            <View>
              <Image source={img} style={styles.imageContainer} />
              <AppButton
                onPress={() => navigation.goBack()}
                title="Try again"
              />
            </View>
          ) : (
            <View style={{ alignItems: 'center' }}>
              <View style={styles.textContainer}>
                <Text style={styles.titleText}>Hello, {title}!</Text>
              </View>
              <Icon
                tvParallaxProperties
                name={currentCity?.selected ? 'star' : 'star-outline'}
                type="ionics"
                onPress={() => toggleSelectedCityIconPress()}
              />
              <View style={styles.infoContainer}>
                <WeatherCardDayTemplate
                  day={current_Day}
                  tempMax={dataFromRedux.main.temp_max}
                  tempMin={dataFromRedux.main.temp_min}
                  feelsLike={dataFromRedux.main.feels_like}
                />
              </View>
            </View>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};
