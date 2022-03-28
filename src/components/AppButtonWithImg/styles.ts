import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

type AppButtonWithImgStyleType = {
  appButton: ViewStyle;
  appButtonContainer: ViewStyle;
  appButtonText: TextStyle;
};

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create<AppButtonWithImgStyleType>({
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
