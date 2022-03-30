import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

type NotificationStyle = {
  itemContainer: ViewStyle;
  itemText: TextStyle;
};

export const styles = StyleSheet.create<NotificationStyle>({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.TEXT_COLORS.zuccini,
  },
  itemText: {
    fontSize: 16,
    color: COLORS.TEXT_COLORS.zuccini,
  },
});
