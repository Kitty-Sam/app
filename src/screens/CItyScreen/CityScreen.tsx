import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ActivityIndicator,
  Alert,
  StatusBar,
  Text,
  View,
  ToastAndroid,
} from 'react-native';
import { styles } from './styles';
import { FAB, Image, Overlay } from 'react-native-elements';
import { COLORS } from '../../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { WeatherCardDayTemplate } from '../../components/WeatherCardTemplate/WeatherCardTemplate';
import { dayWeatherInfo } from '../WeatherCardScreen/types';
import { toggleAppStatus } from '../../store/actions/app';
import { requestStatus } from '../../store/reducers/appReducer';
import { toggleDefaultPosition } from '../../store/actions/cities';
import { selectStatusApp } from '../../store/selectors/appSelector';
import { getPinnedCities } from '../../store/selectors/citySelector';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../../assets/weather.png');

export const CityScreen = () => {
  const [data, setData] = useState<dayWeatherInfo | null>(null);
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const statusApp = useSelector(selectStatusApp);
  const pinnedCities = useSelector(getPinnedCities);

  useEffect(() => {
    if (pinnedCities[0].city) {
      getWeatherInfo(pinnedCities[0].city);
    }
  }, [pinnedCities[0].city]);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const togglePinnedCity = () => {
    if (pinnedCities.length === 1) {
      ToastAndroid.show(
        'OOps! You have only ONE item in pinned position!',
        ToastAndroid.SHORT,
      );
    } else {
      Alert.alert('Attention!', 'Do you want to change pinned city?', [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => dispatch(toggleDefaultPosition(pinnedCities[0].id)),
        },
      ]);
    }
  };

  const getWeatherInfo = async (title: string) => {
    try {
      dispatch(toggleAppStatus(requestStatus.LOADING));
      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${title}&lang=ru&units=metric&appid=ef8dbe91097853f46a4f5c2d9130a67d`;
      const response = await fetch(weatherURL);
      const responseForRender = await response.json();
      setData(responseForRender);
      dispatch(toggleAppStatus(requestStatus.IDLE));
    } catch (e) {
      console.warn(e);
    }
  };

  const valuesForWeather = {
    temp_max: data?.['main']['temp_max'],
    temp_min: data?.['main']['temp_min'],
    feels_like: data?.['main']['feels_like'],
  };

  const current_Day = new Date().toLocaleString('ru').slice(4, 16);

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <StatusBar hidden />
      {statusApp === requestStatus.LOADING ? (
        <View style={styles.loader}>
          <ActivityIndicator />
        </View>
      ) : (
        <View>
          <Text
            style={styles.titleText}
            selectable={true}
            selectionColor={'red'}>
            {pinnedCities.length != 0 ? pinnedCities[0].city : 'hello'}
          </Text>
          {pinnedCities[0].selected ? (
            <Icon
              name={pinnedCities ? 'bookmark' : 'bookmark-outline'}
              style={styles.bookmarkIcon}
              size={24}
              onPress={togglePinnedCity}
            />
          ) : null}
          <FAB
            color={COLORS.BUTTONS_COLORS.tacao}
            onPress={toggleOverlay}
            title="?"
            style={styles.fab}
          />
          <Overlay
            isVisible={visible}
            onBackdropPress={toggleOverlay}
            overlayStyle={styles.overlay}>
            <View style={styles.textOverlayContainer}>
              <Text style={styles.overlayText}>Hello!</Text>
              <Text style={styles.overlayText}>
                Just use me, if you want to know the weather
              </Text>
              <Image source={img} style={styles.imageContainer} />
            </View>
          </Overlay>
          <WeatherCardDayTemplate
            day={current_Day}
            feelsLike={valuesForWeather.feels_like}
            tempMax={valuesForWeather.temp_max}
            tempMin={valuesForWeather.temp_min}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
