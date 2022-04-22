import {
  Dimensions,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { COLORS } from '../../theme/colors';

type WeatherCardTemplateStyle = {
  container: ViewStyle;
  descriptionContainer: ViewStyle;
  image: ImageStyle;
  paramContainer: ViewStyle;
  paramsContainer: ViewStyle;
  pressureText: TextStyle;
  temperatureContainer: ViewStyle;
  textItem: TextStyle;
  textItemTitle: TextStyle;
  weatherImage: ImageStyle;
};

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create<WeatherCardTemplateStyle>({
  container: {
    borderRadius: 10,
    padding: 8,
    width: width / 1.2,
    height: height / 1.5,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 8,
    backgroundColor: COLORS.BACKGROUND_COLORS.iron,
  },
  textItem: {
    fontSize: 36,
    color: COLORS.TEXT_COLORS.zuccini,
  },
  textItemTitle: {
    fontSize: 24,
    color: COLORS.TEXT_COLORS.zuccini,
  },
  weatherImage: {
    width: 100,
    height: 100,
  },
  image: {
    width: 50,
    height: 50,
  },
  paramContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressureText: {
    marginHorizontal: 20,
  },
  paramsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width / 1.2,
  },
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
