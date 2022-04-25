import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, StatusBar, Text, View } from 'react-native';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { WeatherCardDayTemplate } from '../../components/WeatherCardTemplate/WeatherCardTemplate';
import { requestStatus } from '../../store/reducers/appReducer';
import { getPinnedCities } from '../../store/selectors/citySelector';
import { selectStatusApp } from '../../store/selectors/appSelector';
import { defaultWeatherGetInfo } from '../../store/sagas/sagasActions';
import { getDefaultDayWeatherInfo } from '../../store/selectors/weatherSelector';
import { getWeekDay } from '../../utils/getRoundItem';
import { useTranslation } from 'react-i18next';

export const CityScreen = () => {
  const dispatch = useDispatch();

  const defaultCity = useSelector(getPinnedCities);
  const statusApp = useSelector(selectStatusApp);
  const dayWeatherInfo = useSelector(getDefaultDayWeatherInfo);

  const currentDay = getWeekDay();

  useEffect(() => {
    if (defaultCity) {
      dispatch(defaultWeatherGetInfo(defaultCity.city));
    }
  }, [defaultCity]);

  const { t } = useTranslation();

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <StatusBar hidden />
      {!defaultCity || !dayWeatherInfo ? (
        <View style={styles.loader}>
          <Text>{t('cityScreen.firstLaunch')}</Text>
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
              <Text>{currentDay}</Text>
              <WeatherCardDayTemplate
                description={dayWeatherInfo.weather[0].description}
                humidity={dayWeatherInfo.main.humidity}
                pressure={dayWeatherInfo.main.pressure}
                speed={dayWeatherInfo.wind.speed}
                icon={dayWeatherInfo.weather[0].icon}
                feelsLike={dayWeatherInfo.main.feels_like}
              />
            </View>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};
