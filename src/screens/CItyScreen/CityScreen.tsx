import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, StatusBar, Text, View } from 'react-native';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { WeatherCardDayTemplate } from '../../components/WeatherCardTemplate/WeatherCardTemplate';
import { requestStatus } from '../../store/reducers/appReducer';
import { getPinnedCities } from '../../store/selectors/citySelector';
import { selectStatusApp } from '../../store/selectors/appSelector';
import { fetchUsers, weatherGetInfo } from '../../store/sagas/sagasActions';
import { getDayWeatherInfo } from '../../store/selectors/weatherSelector';
import { getUsers } from '../../store/selectors/loginSelector';

export const CityScreen = () => {
  const dispatch = useDispatch();

  const defaultCity = useSelector(getPinnedCities);
  const statusApp = useSelector(selectStatusApp);
  const data = useSelector(getDayWeatherInfo);
  // const users = useSelector(getUsers);

  // console.log('users', users);

  useEffect(() => {
    if (defaultCity) {
      dispatch(weatherGetInfo(defaultCity.city));
    }
  }, [defaultCity]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const current_Day = new Date().toLocaleString('ru').slice(4, 16);

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <StatusBar hidden />
      {!defaultCity || !data ? (
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
                feelsLike={data.main.feels_like}
                tempMax={data.main.temp_max}
                tempMin={data.main.temp_min}
              />
            </View>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};
