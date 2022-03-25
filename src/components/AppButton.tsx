import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme/colors';

type AppButtonPropsType = {
  backgroundColor?: string;
  onPress: () => void;
  title: string;
};

export const AppButton = (props: AppButtonPropsType) => {
  const {
    onPress,
    title,
    backgroundColor = COLORS.BUTTONS_COLORS.default_button_Buddha_Gold,
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.4}
      style={[styles.appButtonContainer, { backgroundColor: backgroundColor }]}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 6,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginVertical: 6,
  },
  appButtonText: {
    fontSize: 16,
    fontWeight: 'normal',
    alignSelf: 'center',
    textTransform: 'uppercase',
    color: '#20152c',
  },
});
