import React, { ReactElement } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import { WeatherCardTemplateProps } from './types';
import { getPressure, getRoundItem } from '../../utils/getRoundItem';
import { Icon } from 'react-native-elements';
import { iconsName, iconsType } from '../../utils/constants/icons';

export const WeatherCardDayTemplate = (
  props: WeatherCardTemplateProps,
): ReactElement => {
  const { feelsLike, icon, speed, pressure, humidity, description } = props;
  const img = `https://openweathermap.org/img/w/${icon}.png`;

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
          <Text>wind</Text>
          <Text>{speed} m/s</Text>
        </View>
        <View style={styles.paramContainer}>
          <Icon
            tvParallaxProperties
            name={iconsName.PRESSURE}
            type={iconsType.MATERIAL}
          />
          <Text>pressure</Text>
          <Text style={styles.pressureText}>{getPressure(pressure)} mmHg</Text>
        </View>
        <View style={styles.paramContainer}>
          <Icon
            tvParallaxProperties
            name={iconsName.HUMIDITY}
            type={iconsType.MATERIAL}
          />
          <Text>humidity</Text>
          <Text>{humidity} %</Text>
        </View>
      </View>
    </View>
  );
};
