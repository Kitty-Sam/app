import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';

type CityItemStyleType = {
  buttonContainer: ViewStyle;
  buttonText: TextStyle;
  itemText: TextStyle;
};

export const styles = StyleSheet.create<CityItemStyleType>({
  itemText: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  buttonText: {
    fontSize: 18,
  },
  buttonContainer: {
    width: Dimensions.get('window').width / 3,
    position: 'absolute',
    right: 16,
    borderRadius: 10,
  },
});
