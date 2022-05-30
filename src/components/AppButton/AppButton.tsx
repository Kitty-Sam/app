import React, { ReactElement } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colors } from '../../theme/colors';
import { styles } from './styles';
import { AppButtonPropsType } from './types';

export const AppButton = (props: AppButtonPropsType): ReactElement => {
  const {
    onPress,
    title,
    disabled,
    backgroundColor = colors.button_colors.default_button_Buddha_Gold,
  } = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.4}
      style={[
        styles.appButtonContainer,
        {
          backgroundColor: disabled
            ? colors.background_colors.iron
            : backgroundColor,
        },
      ]}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};
