import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { StackScreenNavigationProps } from '../../navigation/authStack/types';
import { COMMON_STACK_NAME } from '../../enum/enum';
import { CommonStackParamList } from '../../navigation/commonStack/types';
import { WeatherCardDayTemplate } from '../../components/WeatherCardTemplate/WeatherCardTemplate';
import { useDispatch, useSelector } from 'react-redux';
import { requestStatus } from '../../store/reducers/appReducer';
import { getError, selectStatusApp } from '../../store/selectors/appSelector';
import { Icon, Overlay } from 'react-native-elements';
import { toggleSelectedCity } from '../../store/actions/cities';
import { getCities } from '../../store/selectors/citySelector';
import { getDayWeatherInfo } from '../../store/selectors/weatherSelector';

import { AppButton } from '../../components/AppButton/AppButton';
import { weatherStyles } from './style';
import { database } from '../../utils/getDataBaseURL';
import { getCurrentUser } from '../../store/selectors/loginSelector';
import { iconsName, iconsType } from '../../utils/constants/icons';
import { buttonsName } from '../../utils/constants/buttons';
import { getWeekDay } from '../../utils/getRoundItem';
import { useTranslation } from 'react-i18next';
import { language } from '../CItyScreen/CityScreen';
import { colors } from '../../theme/colors';
import { weatherGetInfoAction } from '../../store/sagas/sagasActions/weatherGetInfo';

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

  const { width } = useWindowDimensions();
  const styles = weatherStyles(width);

  const currentDay = getWeekDay(language);

  const [isActive, setIsActive] = useState<boolean>(false);
  const [hasChanged, setHasChanged] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

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

  const onPressIcon = () => {
    if (hasChanged) {
      setIsVisible(!isVisible);
    } else {
      navigation.goBack();
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={{ marginLeft: 16 }} onPress={onPressIcon}>
          <Icon
            tvParallaxProperties
            type={iconsType.MATERIAL}
            name={iconsName.ARROW_LEFT}
          />
        </TouchableOpacity>
      ),
    });
  }, [hasChanged, isVisible]);

  useEffect(() => {
    if (title) {
      dispatch(weatherGetInfoAction({ search: title }));
    }
  }, [title]);

  useEffect(() => {
    if (isActive) {
      database
        .ref(`/users/${current_user.userId}/selected`)
        .child(`${title}`)
        .remove();
    }

    if (statusApp === requestStatus.SUCCEEDED) {
      database
        .ref(`/users/${current_user.userId}/selected`)
        .child(`${title}`)
        .set({ city: title, id: title, selected: true, isDefault: false });
    }
  }, [isActive, statusApp]);

  const toggleSelectedCityIconPress = () => {
    setHasChanged(true);
    dispatch(toggleSelectedCity(title));
    setIsActive(!isActive);
  };
  const { t } = useTranslation();

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
              <Text>{currentDay}</Text>
              <View style={styles.infoContainer}>
                {data?.main ? (
                  <>
                    <WeatherCardDayTemplate
                      description={data.weather[0].description}
                      humidity={data.main.humidity}
                      pressure={data.main.pressure}
                      speed={data.wind.speed}
                      icon={data.weather[0].icon}
                      feelsLike={data.main.feels_like}
                    />
                    <Overlay
                      isVisible={isVisible}
                      overlayStyle={styles.overlay}>
                      <Text style={styles.textOverlayContainer}>
                        {t('overlay.question')}
                      </Text>
                      <View style={styles.overlayButtonsContainer}>
                        <AppButton
                          onPress={() => {
                            setIsVisible(!isVisible);
                            navigation.goBack();
                          }}
                          title={buttonsName.YES}
                        />
                        <AppButton
                          onPress={() => setIsVisible(!isVisible)}
                          title={buttonsName.STAY}
                          backgroundColor={colors.button_colors.tacao}
                        />
                      </View>
                    </Overlay>
                  </>
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
