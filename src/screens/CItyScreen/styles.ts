import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

type CityScreenStyleType = {
  buttonContainer: ViewStyle;
  fab: ViewStyle;
  imageContainer: any;
  overlay: ViewStyle;
  overlayText: TextStyle;
  root: ViewStyle;
  textOverlayContainer: ViewStyle;
  titleText: TextStyle;
};
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create<CityScreenStyleType>({
  root: {
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
  overlayText: {
    color: COLORS.TEXT_COLORS.zuccini,
    textAlign: 'center',
  },
  imageContainer: {
    width: width / 2,
    height: height / 3,
  },
  textOverlayContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
