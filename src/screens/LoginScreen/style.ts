import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

type LoginScreenStyleType = {
  loaderContainer: ViewStyle;
  root: ViewStyle;
  text: TextStyle;
};

export const styles = StyleSheet.create<LoginScreenStyleType>({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_COLORS.pampas,
  },
  text: {
    textAlign: 'center',
    color: COLORS.TEXT_COLORS.zuccini,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
