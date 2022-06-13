import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { colors } from '../../theme/colors';

type CityItemStyleType = {
  buttonsContainer: ViewStyle;
  iconsContainer: ViewStyle;
  itemText: TextStyle;
  overlay: ViewStyle;
  overlayContainer: ViewStyle;
  text: TextStyle;
  textContainer: ViewStyle;
  trashIconContainer: ViewStyle;
};

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create<CityItemStyleType>({
  textContainer: {
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: colors.background_colors.akaroa,
    width: width / 1.2,
  },
  itemText: {
    textAlign: 'left',
    color: colors.text_colors.zuccini,
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
  trashIconContainer: {
    position: 'absolute',
    right: 18,
    top: 6,
    backgroundColor: colors.button_colors.tacao,
    padding: 4,
    borderRadius: 4,
  },
});
