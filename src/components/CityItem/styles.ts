import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

const { width } = Dimensions.get('window');

type CityItemStyleType = {
  buttonContainer: ViewStyle;
  buttonText: TextStyle;
  itemText: TextStyle;
  textContainer: ViewStyle;
};

export const styles = StyleSheet.create<CityItemStyleType>({
  textContainer: {
    justifyContent: 'center',
  },
  itemText: {
    textAlign: 'left',
    marginLeft: 18,
    color: COLORS.jumbo,
  },
  buttonText: {
    color: COLORS.jumbo,
  },
  buttonContainer: {
    width: width / 5,
    position: 'absolute',
    right: 8,
    borderRadius: 10,
  },
});
