import React from 'react';
import { StyleSheet, View } from 'react-native';

type GapProps = {
  scale?: number;
};

export const Gap = ({ scale = 1 }: GapProps) => {
  return <View style={[styles.gap, { height: scale * 10 }]} />;
};

const styles = StyleSheet.create({
  gap: {
    backgroundColor: 'transparent',
  },
});
