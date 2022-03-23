import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { styles } from './styles';
import { Gap } from '../../components/Gap';

export const CityScreen = () => {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <Gap scale={3} />
      <Text> What is about weather today in this city? </Text>
    </SafeAreaView>
  );
};
