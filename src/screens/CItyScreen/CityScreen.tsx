import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, StatusBar, Text, View } from 'react-native';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { WeatherCardDayTemplate } from '../../components/WeatherCardTemplate/WeatherCardTemplate';
import { requestStatus } from '../../store/reducers/appReducer';
import { getPinnedCities } from '../../store/selectors/citySelector';
import { selectStatusApp } from '../../store/selectors/appSelector';
import { weatherGetInfo } from '../../store/sagas/sagasActions';
import { getDayWeatherInfo } from '../../store/selectors/weatherSelector';

export const CityScreen = () => {
  const dispatch = useDispatch();

  const defaultCity = useSelector(getPinnedCities);
  const statusApp = useSelector(selectStatusApp);
  const dayWeatherInfo = useSelector(getDayWeatherInfo);

  useEffect(() => {
    if (defaultCity) {
      dispatch(weatherGetInfo(defaultCity.city));
    }
  }, [defaultCity]);

  const current_Day = new Date().toLocaleString('ru').slice(4, 16);

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <StatusBar hidden />
      {!defaultCity || !dayWeatherInfo ? (
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
            <View style={styles.cardContainer}>
              <Text style={styles.titleText}>{defaultCity.city}</Text>
              <WeatherCardDayTemplate
                day={current_Day}
                feelsLike={dayWeatherInfo.main.feels_like}
                tempMax={dayWeatherInfo.main.temp_max}
                tempMin={dayWeatherInfo.main.temp_min}
              />
            </View>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};
