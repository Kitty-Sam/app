import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

type ListCitiesScreenStyleType = {
  conditionContainer: ViewStyle;
  conditionText: TextStyle;
  root: ViewStyle;
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
});
