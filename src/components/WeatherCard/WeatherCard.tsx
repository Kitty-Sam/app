import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';
import { StackScreenNavigationProps } from '../../navigation/authStack/types';
import { COMMON_STACK_NAME } from '../../enum/enum';
import { CommonStackParamList } from '../../navigation/commonStack/CommonStack';

export const WeatherCard = (
  props: StackScreenNavigationProps<
    COMMON_STACK_NAME.WEATHER,
    CommonStackParamList
  >,
) => {
  const { route } = props;
  const cityTitle = route.params!.title;

  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (cityTitle) {
      getWeatherInfo(cityTitle);
    }
  }, [cityTitle]);

  const getWeatherInfo = async (title: string) => {
    try {
      setLoading(true);
      const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${title}&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27`;
      const response = await fetch(weatherURL);
      const responseForRender = await response.json();
      const filtredDays = responseForRender.list.filter((el: any) =>
        el.dt_txt.includes('09:00:00'),
      );
      setData((prev) => [...prev, ...filtredDays]);
      setLoading(false);
    } catch (error) {
      console.warn(error);
    }
  };

  const tempMax = data.map((el) => el['main']['temp_max']);
  const tempMin = data.map((el) => el['main']['temp_min']);
  const feelsLike = data.map((el) => el['main']['feels_like']);
  const days_in_ms = data.map((el) => el['dt'] * 1000);
  const weekdaysNew = new Date(Date.now()).toLocaleString('ru', {
    weekday: 'long',
  });

  return (
    <SafeAreaView>
      {loading ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}>
          <ActivityIndicator />
        </View>
      ) : (
        <SafeAreaView style={{ margin: 16 }}>
          <Text>Hello {cityTitle} !</Text>
          <Text> tempMax: {tempMax[0]}</Text>
          <Text> tempMin: {tempMin[0]}</Text>
          <Text> feelsLike: {feelsLike[0]}</Text>
          <Text> {weekdaysNew}</Text>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};
/*
);*/
