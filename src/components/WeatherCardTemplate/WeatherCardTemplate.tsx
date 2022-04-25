import React, { ReactElement } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import { WeatherCardTemplateProps } from './types';
import { getPressure, getRoundItem } from '../../utils/getRoundItem';
import { Icon } from 'react-native-elements';
import { iconsName, iconsType } from '../../utils/constants/icons';
import { useTranslation } from 'react-i18next';

export const WeatherCardDayTemplate = (
  props: WeatherCardTemplateProps,
): ReactElement => {
  const { feelsLike, icon, speed, pressure, humidity, description } = props;
  const img = `https://openweathermap.org/img/w/${icon}.png`;

  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
        <Image source={{ uri: img }} style={styles.weatherImage} />
        <View style={styles.temperatureContainer}>
          <Text style={styles.textItem}>{getRoundItem(feelsLike)}</Text>
          <Icon
            tvParallaxProperties
            name={iconsName.TEMPERATURE_C}
            type={iconsType.MATERIAL}
          />
        </View>
        <Text>{description}</Text>
      </View>
      <View style={styles.paramsContainer}>
        <View style={styles.paramContainer}>
          <Icon
            tvParallaxProperties
            name={iconsName.WIND}
            type={iconsType.FONTISTO}
          />
          <Text>{t('weatherScreen.wind')}</Text>
          <Text>
            {speed} {t('weatherScreen.wind_unit')}
          </Text>
        </View>
        <View style={styles.paramContainer}>
          <Icon
            tvParallaxProperties
            name={iconsName.PRESSURE}
            type={iconsType.MATERIAL}
          />
          <Text>{t('weatherScreen.pressure')}</Text>
          <Text style={styles.pressureText}>
            {getPressure(pressure)} {t('weatherScreen.pressure_unit')}
          </Text>
        </View>
        <View style={styles.paramContainer}>
          <Icon
            tvParallaxProperties
            name={iconsName.HUMIDITY}
            type={iconsType.MATERIAL}
          />
          <Text>{t('weatherScreen.humidity')}</Text>
          <Text>
            {humidity} {t('weatherScreen.humidity_unit')}
          </Text>
        </View>
      </View>
    </View>
  );
};
