import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text } from 'react-native';

type CityScreenProps = any;

const CityScreen: React.FC<CityScreenProps> = () => {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <Text>city screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 200,
  },
});

export default CityScreen;
