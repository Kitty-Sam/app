import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

type ListCitiesScreenStyleType = {
  conditionContainer: ViewStyle;
  conditionText: TextStyle;
  listContainer: ViewStyle;
  root: ViewStyle;
  search: ViewStyle;
  searchContainer: ViewStyle;
};

export const styles = StyleSheet.create<ListCitiesScreenStyleType>({
  root: {
    backgroundColor: COLORS.BACKGROUND_COLORS.pampas,
    flex: 1,
  },
  conditionText: {
    fontSize: 16,
    color: COLORS.TEXT_COLORS.zuccini,
  },
  conditionContainer: {
    marginVertical: 16,
    marginHorizontal: 16,
  },
  searchContainer: {
    backgroundColor: COLORS.BACKGROUND_COLORS.indian_Khaki,
    borderRadius: 10,
  },
  search: {
    backgroundColor: COLORS.BACKGROUND_COLORS.akaroa,
    color: COLORS.TEXT_COLORS.zuccini,
    borderRadius: 10,
  },
  listContainer: {
    margin: 14,
  },
});
