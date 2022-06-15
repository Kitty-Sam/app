import {
  ImageStyle,
  ScaledSize,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { colors } from '../../theme/colors';

type CityScreenStyleType = {
  cardContainer: ViewStyle;
  image: ImageStyle;
  imageContainer: ImageStyle;
  loader: ViewStyle;
  root: ViewStyle;
  text: TextStyle;
  titleText: TextStyle;
};

export const cityStyles = (width: ScaledSize['width']) => {
  return StyleSheet.create<CityScreenStyleType>({
    root: {
      backgroundColor: colors.background_colors.pampas,
      flex: 1,
      paddingHorizontal: 16,
    },
    image: {
      width: 50,
      height: 50,
    },
    titleText: {
      marginTop: 24,
      color: colors.text_colors.zuccini,
      textAlign: 'center',
      fontSize: 26,
      fontWeight: '600',
      textTransform: 'capitalize',
    },
    text: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '400',
    },
    imageContainer: {
      width: width / 2,
      height: width / 3,
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
