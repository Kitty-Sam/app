import {
  Dimensions,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { colors } from '../../theme/colors';

const { width, height } = Dimensions.get('window');

type WeatherCardScreenStyleType = {
  errorContainer: ViewStyle;
  favoriteIconContainer: ViewStyle;
  imageContainer: ImageStyle;
  infoContainer: ViewStyle;
  itemText: TextStyle;
  loaderContainer: ViewStyle;
  overlay: ViewStyle;
  overlayButtonsContainer: ViewStyle;
  rootContainer: ViewStyle;
  textContainer: ViewStyle;
  textOverlayContainer: TextStyle;
  titleContainer: ViewStyle;
  titleText: TextStyle;
  weatherContainer: ViewStyle;
};

export const styles = StyleSheet.create<WeatherCardScreenStyleType>({
  textContainer: {
    margin: 16,
    width: 200,
    borderRadius: 10,
    backgroundColor: colors.button_colors.default_button_Buddha_Gold,
    alignItems: 'center',
  },
  loaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  rootContainer: {
    backgroundColor: colors.background_colors.pampas,
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 26,
    fontWeight: '600',
    color: colors.text_colors.zuccini,
    textTransform: 'capitalize',
  },

  itemText: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.text_colors.zuccini,
  },
  infoContainer: {
    margin: 16,
    flexDirection: 'row',
  },
  imageContainer: {
    width: width / 2,
    height: height / 3,
  },
  favoriteIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  errorContainer: {
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  weatherContainer: {
    alignItems: 'center',
  },
  overlay: {
    width: 300,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  textOverlayContainer: {
    textAlign: 'center',
    fontSize: 18,
  },
  overlayButtonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});
