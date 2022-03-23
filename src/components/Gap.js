import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const Gap = () => {
  return <View style={styles.gap} />;
};

const styles = StyleSheet.create({
  gap: {
    height: 50,
    width: Dimensions.get('window').width,
  },
});

export default Gap;
