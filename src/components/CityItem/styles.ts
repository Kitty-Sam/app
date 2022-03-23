import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { theme } from '../../theme/Theme';

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
    fontSize: 24,
    fontWeight: '300',
    fontStyle: 'italic',
    marginLeft: 18,
    color: theme.unFocusedItem,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: theme.focusedItem,
  },
  buttonContainer: {
    width: width / 5,
    position: 'absolute',
    right: 8,
    borderRadius: 10,
  },
});
