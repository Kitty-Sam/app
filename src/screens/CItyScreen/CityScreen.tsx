import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, StatusBar, Text, View } from 'react-native';
import { styles } from './styles';
import { FAB, Image, Overlay } from 'react-native-elements';
import { COLORS } from '../../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { AppStoreType } from '../../store/store';
import { DataItemType } from '../ListCitiesScreen/types';
import { WeatherCardDayTemplate } from '../../components/WeatherCardTemplate/WeatherCardTemplate';
import { dayWeatherInfo } from '../WeatherCardScreen/types';
import { toggleAppStatus } from '../../store/actions/app';
import { requestStatus } from '../../store/reducers/appReducer';
import { toggleDefaultPosition } from '../../store/actions/cities';
import { selectStatusApp } from '../../store/selectors/appSelector';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../../assets/weather.png');

export const CityScreen = () => {
  const statusApp = useSelector(selectStatusApp);
  const cities = useSelector<AppStoreType, DataItemType[]>((state) =>
    state.cities.cities.filter((city) => city.isDefault),
  );

  // const defaultCities = useSelector(getDefaultCities);

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const dispatch = useDispatch();

  const [data, setData] = useState<dayWeatherInfo | null>(null);

  useEffect(() => {
    if (cities[0].city) {
      getWeatherInfo(cities[0].city);
    }
  }, [cities[0].city]);

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
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <StatusBar hidden />
      {statusApp === requestStatus.LOADING ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator />
        </View>
      ) : (
        <View>
          <Text style={styles.titleText}>
            {cities.length != 0 ? cities[0].city : 'hello'}
          </Text>
          {cities[0].selected ? (
            <Icon
              name={cities ? 'bookmark' : 'bookmark-outline'}
              style={{ position: 'absolute', right: 16, top: 28 }}
              size={24}
              onPress={() => {
                dispatch(toggleDefaultPosition(cities[0].id));
              }}
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
          {cities ? (
            <WeatherCardDayTemplate
              day={current_Day}
              feelsLike={feels_like}
              tempMax={temp_max}
              tempMin={temp_min}
            />
          ) : (
            <Text>You should select city </Text>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};
