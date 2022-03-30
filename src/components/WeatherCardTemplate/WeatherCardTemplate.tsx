import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type WeatherCardTemplateProps = {
  days: string[];
  feelsLike: number[];
  index: number;
  tempMax: number[];
  tempMin: number[];
};

export const WeatherCardDayTemplate = (props: WeatherCardTemplateProps) => {
  const { feelsLike, days, tempMin, tempMax, index } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.textItemTitle}>today is {days[index]}</Text>
      <Text style={styles.textItem}>tempMax: {tempMax[index]}</Text>
      <Text style={styles.textItem}>tempMin: {tempMin[index]}</Text>
      <Text style={styles.textItem}>feelsLike: {feelsLike[index]}</Text>
    </View>
  );
};
