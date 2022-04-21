import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { WeatherCardTemplateProps } from './types';
import { getRoundItem } from '../../utils/getRoundItem';

export const WeatherCardDayTemplate = (
  props: WeatherCardTemplateProps,
): ReactElement => {
  const { feelsLike, tempMin, tempMax, day } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.textItemTitle}>today is {day}</Text>
      <Text style={styles.textItem}>
        max temperature: {getRoundItem(tempMax)}
      </Text>
      <Text style={styles.textItem}>
        min temperature: {getRoundItem(tempMin)}
      </Text>
      <Text style={styles.textItem}>
        but feels like: {getRoundItem(feelsLike)}
      </Text>
    </View>
  );
};
