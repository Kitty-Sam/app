import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type CityItemProps = {
  title: string;
};
export const CityItem = ({ title }: CityItemProps) => {
  return (
    <SafeAreaView>
      <Text style={styles.center}>{title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
});
