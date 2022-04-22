import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

type CityItemStyleType = {
  iconsContainer: ViewStyle;
  itemText: TextStyle;
  textContainer: ViewStyle;
};

const { width } = Dimensions.get('window');
export const styles = StyleSheet.create<CityItemStyleType>({
  textContainer: {
    marginHorizontal: 4,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: COLORS.BACKGROUND_COLORS.akaroa,
    width: width / 1.4,
  },
  itemText: {
    textAlign: 'left',
    color: COLORS.TEXT_COLORS.zuccini,
    fontSize: 18,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
});
