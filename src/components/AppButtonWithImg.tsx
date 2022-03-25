import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../theme/colors';

type AppButtonWithImgPropsType = {
  backgroundColor: string;
  icon: string;
  onPress: () => void;
  title: string;
};

const { width } = Dimensions.get('window');

export const AppButtonWithImg = (props: AppButtonWithImgPropsType) => {
  const { backgroundColor, icon, title, onPress } = props;
  return (
    <View style={styles.appButtonContainer}>
      <Icon.Button
        activeOpacity={0.8}
        name={icon}
        backgroundColor={backgroundColor}
        onPress={onPress}
        style={styles.appButton}>
        <Text style={styles.appButtonText}>{title}</Text>
      </Icon.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    marginHorizontal: 10,
    width: width / 2,
    marginVertical: 10,
  },
  appButton: {
    color: COLORS.TEXT_COLORS.zuccini,
  },
  appButtonText: {
    color: COLORS.TEXT_COLORS.zuccini,
  },
});
