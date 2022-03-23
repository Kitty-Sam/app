import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';

type LoginScreenStyleType = {
  buttonContainer: ViewStyle;
  infoText: TextStyle;
  inputText: TextStyle;
  root: ViewStyle;
  titleText: TextStyle;
};

export const styles = StyleSheet.create<LoginScreenStyleType>({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    width: Dimensions.get('window').width / 4,
    margin: 10,
  },
  inputText: {
    borderWidth: 1,
    borderColor: 'black',
    width: 300,
    textAlign: 'center',
  },
});
