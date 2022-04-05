import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';
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

export const WeatherCardScreen = (
  props: StackScreenNavigationProps<
    COMMON_STACK_NAME.WEATHER,
    CommonStackParamList
  >,
) => {
  const { route } = props;
  const { title } = route.params!;

  const dispatch = useDispatch();
  const statusApp = useSelector(selectStatusApp);
  const [data, setData] = useState<dayWeatherInfo | null>(null);

  useEffect(() => {
    if (title) {
      getWeatherInfo(title);
    }
  }, [title]);

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

  const temp_max = data?.['main']['temp_max'];
  const temp_min = data?.['main']['temp_min'];
  const feels_like = data?.['main']['feels_like'];

  // @ts-ignore
  const day_in_ms = data?.['dt'] * 1000;
  const current_Day = new Date(day_in_ms).toLocaleString('ru').slice(4, 16);

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
          <View style={styles.infoContainer}>
            <WeatherCardDayTemplate
              day={current_Day}
              tempMax={temp_max}
              tempMin={temp_min}
              feelsLike={feels_like}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
