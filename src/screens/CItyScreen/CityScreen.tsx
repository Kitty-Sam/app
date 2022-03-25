import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, Text } from 'react-native';
import { styles } from './styles';

export const CityScreen = () => {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <StatusBar hidden />
      <Text style={styles.titleText}>Minsk</Text>
    </SafeAreaView>
  );
};
