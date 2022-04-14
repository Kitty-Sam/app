import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

type LoginScreenStyleType = {
  loaderContainer: ViewStyle;
  root: ViewStyle;
  textContainer: ViewStyle;
};

export const styles = StyleSheet.create<LoginScreenStyleType>({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_COLORS.pampas,
  },
  textContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
