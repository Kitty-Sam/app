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
import { database } from '../../utils/getDataBaseURL';
import { getCurrentUser } from '../../store/selectors/loginSelector';
import { iconsName, iconsType } from '../../utils/constants/icons';
import { buttonsName } from '../../utils/constants/buttons';
import { getWeekDay } from '../../utils/getRoundItem';

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

  const current_Day = getWeekDay(new Date());

  const [isActive, setIsActive] = useState<boolean>(false);
  const [hasChanged, setHasChanged] = useState<boolean>(false);

  const dispatch = useDispatch();

  const statusApp = useSelector(selectStatusApp);
  const cities = useSelector(getCities);
  const data = useSelector(getDayWeatherInfo);
  const error = useSelector(getError);
  const current_user = useSelector(getCurrentUser);

  const currentCity = cities.find((city) => {
    if (title && city.city === title) {
      return city;
    }
  });

  useEffect(() => {
    if (title) {
      dispatch(weatherGetInfo(title));
    }
  }, [title]);

  const toggleSelectedCityIconPress = async () => {
    setHasChanged(true);
    dispatch(toggleSelectedCity(title));
    setIsActive(!isActive);
    if (isActive) {
      await database
        .ref(`/users/${current_user.userId}/selected`)
        .child(`${title}`)
        .remove();
    } else {
      await database
        .ref(`/users/${current_user.userId}/selected`)
        .child(`${title}`)
        .set({ city: title, id: title, selected: true, isDefault: false });
    }
  };

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      if (!hasChanged) {
        return;
      }
      e.preventDefault();
      Alert.alert('', 'Note! You have changed favorite icon. Sure?', [
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
      ]);
    });
  }, [navigation, hasChanged]);

  return (
    <SafeAreaView style={styles.rootContainer}>
      {statusApp === requestStatus.LOADING ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={styles.errorContainer}>
          {error ? (
            <View>
              <Image source={img} style={styles.imageContainer} />
              <AppButton
                onPress={() => navigation.goBack()}
                title={buttonsName.TRY}
              />
            </View>
          ) : (
            <View style={styles.weatherContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{title}</Text>
                <View style={styles.favoriteIconContainer}>
                  <Icon
                    tvParallaxProperties
                    name={
                      currentCity?.selected
                        ? iconsName.STAR
                        : iconsName.STAR_OUTLINE
                    }
                    type={iconsType.IONICS}
                    onPress={() => toggleSelectedCityIconPress()}
                  />
                </View>
              </View>
              <Text>{current_Day}</Text>
              <View style={styles.infoContainer}>
                {data?.main ? (
                  <WeatherCardDayTemplate
                    description={data.weather[0].description}
                    humidity={data.main.humidity}
                    pressure={data.main.pressure}
                    speed={data.wind.speed}
                    icon={data.weather[0].icon}
                    day={current_Day}
                    feelsLike={data.main.feels_like}
                  />
                ) : (
                  <ActivityIndicator />
                )}
              </View>
            </View>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};
