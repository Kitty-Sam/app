import {
  Dimensions,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { colors } from '../../theme/colors';

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
    backgroundColor: colors.background_colors.iron,
  },
  textItem: {
    fontSize: 36,
    color: colors.text_colors.zuccini,
  },
  textItemTitle: {
    fontSize: 24,
    color: colors.text_colors.zuccini,
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
    marginHorizontal: 8,
  },
  pressureText: {
    marginHorizontal: 20,
  },
  paramsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
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
