import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

type CityScreenStyleType = {
  buttonContainer: ViewStyle;
  root: ViewStyle;
  titleText: TextStyle;
};
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create<CityScreenStyleType>({
  root: {
    backgroundColor: COLORS.BACKGROUND_COLORS.pampas,
    flex: 1,
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    width: width / 6,
  },
  titleText: {
    marginVertical: 24,
    marginHorizontal: 24,
    color: COLORS.TEXT_COLORS.zuccini,
    fontSize: 18,
  },
});
