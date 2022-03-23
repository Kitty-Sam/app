import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { styles } from './styles';

export const CityScreen = () => {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <Text>city screen</Text>
    </SafeAreaView>
  );
};
