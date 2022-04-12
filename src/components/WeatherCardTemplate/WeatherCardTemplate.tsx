import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { WeatherCardTemplateProps } from './types';

export const WeatherCardDayTemplate = (
  props: WeatherCardTemplateProps,
): ReactElement => {
  const { feelsLike, tempMin, tempMax, day } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.textItemTitle}>today is {day}</Text>
      <Text style={styles.textItem}>
        max temperature: {Number(tempMax).toFixed()}
      </Text>
      <Text style={styles.textItem}>
        min temperature: {Number(tempMin).toFixed()}
      </Text>
      <Text style={styles.textItem}>
        but feels like: {Number(feelsLike).toFixed()}
      </Text>
    </View>
  );
};
