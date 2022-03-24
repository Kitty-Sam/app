import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, Text } from 'react-native';
import { styles } from './styles';
import { Gap } from '../../components/Gap';

export const CityScreen = () => {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <StatusBar hidden />
      <Gap scale={4} />
      <Text style={styles.titleText}>Minsk</Text>
    </SafeAreaView>
  );
};
