import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

type AppButtonStyleType = {
  appButtonContainer: ViewStyle;
  appButtonText: TextStyle;
};

export const styles = StyleSheet.create<AppButtonStyleType>({
  appButtonContainer: {
    elevation: 6,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginVertical: 6,
  },
  appButtonText: {
    fontSize: 16,
    fontWeight: 'normal',
    alignSelf: 'center',
    textTransform: 'uppercase',
    color: COLORS.TEXT_COLORS.zuccini,
  },
});
