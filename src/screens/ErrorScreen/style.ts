import { Dimensions, ImageStyle, StyleSheet, ViewStyle } from 'react-native';

type ErrorScreenStyleType = {
  imageContainer: ImageStyle;
  root: ViewStyle;
};
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create<ErrorScreenStyleType>({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: width / 2,
    height: height / 3,
  },
});
