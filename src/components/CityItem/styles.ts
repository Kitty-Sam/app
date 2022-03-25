import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

const { width } = Dimensions.get('window');

type CityItemStyleType = {
  itemText: TextStyle;
  textContainer: ViewStyle;
};

export const styles = StyleSheet.create<CityItemStyleType>({
  textContainer: {
    marginHorizontal: 32,
    borderBottomColor: COLORS.TEXT_COLORS.zuccini,
    borderBottomWidth: 1,
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  itemText: {
    marginTop: 14,
    textAlign: 'left',
    color: COLORS.TEXT_COLORS.zuccini,
    fontSize: 18,
  },
});
