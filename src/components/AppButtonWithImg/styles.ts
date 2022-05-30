import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { colors } from '../../theme/colors';

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
    color: colors.text_colors.zuccini,
  },
  appButtonText: {
    color: colors.text_colors.zuccini,
  },
});
