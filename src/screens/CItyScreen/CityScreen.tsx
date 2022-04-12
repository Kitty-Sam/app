import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, StatusBar, Text, View } from 'react-native';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { WeatherCardDayTemplate } from '../../components/WeatherCardTemplate/WeatherCardTemplate';
import { dayWeatherInfo } from '../WeatherCardScreen/types';
import { toggleAppStatus } from '../../store/actions/app';
import { requestStatus } from '../../store/reducers/appReducer';
import { getPinnedCities } from '../../store/selectors/citySelector';
import { selectStatusApp } from '../../store/selectors/appSelector';

export const CityScreen = () => {
  const [data, setData] = useState<dayWeatherInfo | null>(null);

  const dispatch = useDispatch();

  const defaultCity = useSelector(getPinnedCities);
  const statusApp = useSelector(selectStatusApp);

  useEffect(() => {
    if (defaultCity) {
      getWeatherInfo(defaultCity.city);
    }
  }, [defaultCity]);

  const getWeatherInfo = async (title: string) => {
    try {
      dispatch(toggleAppStatus(requestStatus.LOADING));
      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${title}&lang=ru&units=metric&appid=ef8dbe91097853f46a4f5c2d9130a67d`;
      const response = await fetch(weatherURL);
      const responseForRender = await response.json();
      setData(responseForRender);
      dispatch(toggleAppStatus(requestStatus.IDLE));
    } catch (e) {
      dispatch(toggleAppStatus(requestStatus.FAILED));
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
      {!defaultCity ? (
        <View style={styles.loader}>
          <Text>You should select one city to make it default</Text>
        </View>
      ) : (
        <View style={styles.root}>
          {statusApp === requestStatus.LOADING ? (
            <View style={styles.loader}>
              <ActivityIndicator />
            </View>
          ) : (
            <View>
              <Text style={styles.titleText}>{defaultCity.city}</Text>
              <WeatherCardDayTemplate
                day={current_Day}
                feelsLike={valuesForWeather.feels_like}
                tempMax={valuesForWeather.temp_max}
                tempMin={valuesForWeather.temp_min}
              />
            </View>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};
