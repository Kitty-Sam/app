import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

type CityItemStyleType = {
  itemText: TextStyle;
  textContainer: ViewStyle;
};

export const styles = StyleSheet.create<CityItemStyleType>({
  textContainer: {
    marginHorizontal: 8,
    borderBottomColor: COLORS.TEXT_COLORS.zuccini,
    borderBottomWidth: 1,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  itemText: {
    textAlign: 'left',
    color: COLORS.TEXT_COLORS.zuccini,
    fontSize: 18,
  },
});
