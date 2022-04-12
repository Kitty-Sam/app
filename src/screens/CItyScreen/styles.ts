import {
  Dimensions,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { COLORS } from '../../theme/colors';

type CityScreenStyleType = {
  bookmarkIcon: ViewStyle;
  buttonContainer: ViewStyle;
  fab: ViewStyle;
  imageContainer: ImageStyle;
  loader: ViewStyle;
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
    paddingHorizontal: 16,
  },
  buttonContainer: {
    width: width / 6,
  },
  titleText: {
    marginVertical: 24,
    color: COLORS.TEXT_COLORS.zuccini,
    fontSize: 18,
    textAlign: 'center',
  },
  fab: {
    position: 'absolute',
    right: 8,
    bottom: 16,
    zIndex: 10,
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
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookmarkIcon: {
    position: 'absolute',
    right: 16,
    top: 28,
  },
});
