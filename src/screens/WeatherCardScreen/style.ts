import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

type WeatherCardScreenStyleType = {
  infoContainer: ViewStyle;
  itemText: TextStyle;
  loaderContainer: ViewStyle;
  rootContainer: ViewStyle;
  textContainer: ViewStyle;
  titleText: TextStyle;
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
  },
  titleText: {
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.TEXT_COLORS.zuccini,
    margin: 16,
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
});
