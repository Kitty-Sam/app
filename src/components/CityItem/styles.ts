import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

type CityItemStyleType = {
  buttonsContainer: ViewStyle;
  iconsContainer: ViewStyle;
  itemText: TextStyle;
  overlay: ViewStyle;
  overlayContainer: ViewStyle;
  text: TextStyle;
  textContainer: ViewStyle;
};

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create<CityItemStyleType>({
  textContainer: {
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: COLORS.BACKGROUND_COLORS.akaroa,
    width: width / 1.2,
  },
  itemText: {
    textAlign: 'left',
    color: COLORS.TEXT_COLORS.zuccini,
    fontSize: 18,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  overlayContainer: {
    width: 300,
    height: 200,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 16,
  },
  overlay: {
    marginHorizontal: 20,
  },
});
