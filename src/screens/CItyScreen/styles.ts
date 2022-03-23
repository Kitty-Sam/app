import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { theme } from '../../theme/Theme';

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
    color: theme.unFocusedItem,
    fontSize: 24,
    fontWeight: '300',
    fontStyle: 'italic',
  },
});
