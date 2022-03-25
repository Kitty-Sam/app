import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

type CityScreenStyleType = {
  buttonContainer: ViewStyle;
  fab: ViewStyle;
  overlay: ViewStyle;
  root: ViewStyle;
  titleText: TextStyle;
};
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create<CityScreenStyleType>({
  root: {
    justifyContent: 'space-between',
    backgroundColor: COLORS.BACKGROUND_COLORS.pampas,
    flex: 1,
    marginHorizontal: 16,
  },
  buttonContainer: {
    width: width / 6,
  },
  titleText: {
    marginVertical: 24,
    color: COLORS.TEXT_COLORS.zuccini,
    fontSize: 18,
  },
  fab: {
    position: 'absolute',
    right: 10,
    bottom: 15,
  },
  overlay: {
    width: 300,
    height: 300,
    alignItems: 'center',
    borderRadius: 10,
  },
});
