import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { colors } from '../../theme/colors';

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
    backgroundColor: colors.background_colors.pampas,
  },
  text: {
    textAlign: 'center',
    color: colors.text_colors.zuccini,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
