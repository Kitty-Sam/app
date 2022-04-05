import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

type CustomInputStyleType = {
  errorInput: ViewStyle;
  errorText: TextStyle;
  textInput: TextStyle;
};

export const styles = StyleSheet.create<CustomInputStyleType>({
  textInput: {
    borderBottomColor: COLORS.TEXT_COLORS.zuccini,
    borderBottomWidth: 2,
    color: COLORS.TEXT_COLORS.zuccini,
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 10,
    color: COLORS.ERROR.pomegranate,
  },
  errorInput: {
    borderColor: COLORS.ERROR.pomegranate,
  },
});
