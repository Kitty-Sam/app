import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';
import { AppButtonWithImgPropsType } from './types';

export const AppButtonWithImg = (
  props: AppButtonWithImgPropsType,
): ReactElement => {
  const { backgroundColor, icon, title, onPress, disabled } = props;
  return (
    <View style={styles.appButtonContainer}>
      <Icon.Button
        activeOpacity={0.8}
        name={icon}
        backgroundColor={backgroundColor}
        disabled={disabled}
        onPress={onPress}
        style={styles.appButton}>
        <Text style={styles.appButtonText}>{title}</Text>
      </Icon.Button>
    </View>
  );
};
