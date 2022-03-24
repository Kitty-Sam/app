import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

type CityScreenStyleType = {
  buttonContainer: ViewStyle;
  root: ViewStyle;
  titleText: TextStyle;
};

export const styles = StyleSheet.create<CityScreenStyleType>({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 200,
  },
  titleText: {
    textAlign: 'center',
    color: COLORS.jumbo,
    fontSize: 16,
  },
});
