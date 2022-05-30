import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { colors } from '../../theme/colors';

type CustomInputStyleType = {
  errorInput: ViewStyle;
  errorText: TextStyle;
  textInput: TextStyle;
};

export const styles = StyleSheet.create<CustomInputStyleType>({
  textInput: {
    borderBottomColor: colors.text_colors.zuccini,
    borderBottomWidth: 2,
    color: colors.text_colors.zuccini,
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 10,
    color: colors.error.pomegranate,
  },
  errorInput: {
    borderColor: colors.error.pomegranate,
  },
});
