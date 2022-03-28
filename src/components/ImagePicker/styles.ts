import { Dimensions, ImageStyle, StyleSheet, ViewStyle } from 'react-native';

type ImagePickerStyle = {
  buttonsContainer: ViewStyle;
  image: ImageStyle;
  imageContainer: ViewStyle;
  listContainer: ViewStyle;
};

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create<ImagePickerStyle>({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  image: {
    width: width / 2,
    height: height / 3,
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
