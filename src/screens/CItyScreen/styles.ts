import { StyleSheet, ViewStyle } from 'react-native';

type CityScreenStyleType = {
  buttonContainer: ViewStyle;
  root: ViewStyle;
};

export const styles = StyleSheet.create<CityScreenStyleType>({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 200,
  },
});
