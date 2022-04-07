import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

type ListCitiesScreenStyleType = {
  cityItemContainer: ViewStyle;
  conditionContainer: ViewStyle;
  conditionText: TextStyle;
  listContainer: ViewStyle;
  root: ViewStyle;
  search: ViewStyle;
  searchContainer: ViewStyle;
  showButtonContainer: ViewStyle;
};

export const styles = StyleSheet.create<ListCitiesScreenStyleType>({
  root: {
    backgroundColor: COLORS.BACKGROUND_COLORS.pampas,
    flex: 1,
  },
  conditionText: {
    marginVertical: 12,
    fontSize: 16,
    color: COLORS.TEXT_COLORS.zuccini,
  },
  conditionContainer: {
    marginVertical: 32,
    marginHorizontal: 16,
    width: 300,
  },
  searchContainer: {
    backgroundColor: COLORS.BACKGROUND_COLORS.indian_Khaki,
    borderRadius: 10,
  },
  search: {
    backgroundColor: COLORS.BACKGROUND_COLORS.akaroa,
    color: COLORS.TEXT_COLORS.zuccini,
    borderRadius: 10,
    textTransform: 'capitalize',
  },
  listContainer: {
    margin: 14,
  },
  cityItemContainer: {
    margin: 8,
  },
  showButtonContainer: {
    position: 'absolute',
    right: -68,
    top: 54,
  },
});
