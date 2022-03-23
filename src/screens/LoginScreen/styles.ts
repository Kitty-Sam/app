import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { theme } from '../../theme/Theme';

type LoginScreenStyleType = {
  buttonContainer: ViewStyle;
  infoText: TextStyle;
  inputText: TextStyle;
  root: ViewStyle;
  titleText: TextStyle;
};

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create<LoginScreenStyleType>({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.focusedItem,
  },
  infoText: {
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    width: width / 4,
    margin: 10,
  },
  inputText: {
    borderWidth: 1,
    borderColor: 'black',
    width: 300,
    textAlign: 'center',
  },
});
