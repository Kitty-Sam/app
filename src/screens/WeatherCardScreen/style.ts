import {
  Dimensions,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { COLORS } from '../../theme/colors';

const { width, height } = Dimensions.get('window');

type WeatherCardScreenStyleType = {
  errorContainer: ViewStyle;
  favoriteIconContainer: ViewStyle;
  imageContainer: ImageStyle;
  infoContainer: ViewStyle;
  itemText: TextStyle;
  loaderContainer: ViewStyle;
  rootContainer: ViewStyle;
  textContainer: ViewStyle;
  titleContainer: ViewStyle;
  titleText: TextStyle;
  weatherContainer: ViewStyle;
};

export const styles = StyleSheet.create<WeatherCardScreenStyleType>({
  textContainer: {
    margin: 16,
    width: 200,
    borderRadius: 10,
    backgroundColor: COLORS.BUTTONS_COLORS.default_button_Buddha_Gold,
    alignItems: 'center',
  },
  loaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  rootContainer: {
    backgroundColor: COLORS.BACKGROUND_COLORS.pampas,
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 26,
    fontWeight: '600',
    color: COLORS.TEXT_COLORS.zuccini,
    textTransform: 'capitalize',
  },

  itemText: {
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.TEXT_COLORS.zuccini,
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
});
