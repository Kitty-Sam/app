import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

type WeatherCardTemplateStyle = {
  container: ViewStyle;
  textItem: TextStyle;
  textItemTitle: TextStyle;
};

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create<WeatherCardTemplateStyle>({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.BACKGROUND_COLORS.akaroa,
    padding: 8,
    width: width / 1.2,
    height: height / 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    backgroundColor: COLORS.BACKGROUND_COLORS.pampas,
  },
  textItem: {
    fontSize: 18,
    color: COLORS.TEXT_COLORS.zuccini,
  },
  textItemTitle: {
    fontSize: 24,
    color: COLORS.TEXT_COLORS.zuccini,
  },
});
