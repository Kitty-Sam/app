import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

type NotificationsScreenStyleType = {
  buttonContainer: ViewStyle;
  headerText: TextStyle;
  itemText: TextStyle;
  listContainer: ViewStyle;
  textContainer: ViewStyle;
};

export const styles = StyleSheet.create<NotificationsScreenStyleType>({
  headerText: {
    fontSize: 18,
    color: COLORS.TEXT_COLORS.zuccini,
  },
  itemText: {
    color: COLORS.TEXT_COLORS.zuccini,
    fontSize: 16,
  },
  textContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
  listContainer: {
    marginHorizontal: 24,
  },
  buttonContainer: {
    padding: 32,
  },
});
