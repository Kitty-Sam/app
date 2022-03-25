import { Dimensions, StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

type RegisterScreenStyleType = {
  registerContainer: ViewStyle;
  root: ViewStyle;
};

const { width, height } = Dimensions.get('window');

export const stylesRegister = StyleSheet.create<RegisterScreenStyleType>({
  root: {
    backgroundColor: COLORS.BACKGROUND_COLORS.iron,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  registerContainer: {
    marginTop: 24,
    width: width / 1.2,
    height: height / 1.9,
    padding: 24,
    justifyContent: 'space-between',
  },
});
