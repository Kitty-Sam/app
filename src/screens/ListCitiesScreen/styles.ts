import { StyleSheet, ViewStyle } from 'react-native';

type ListCitiesScreenStyleType = {
  center: ViewStyle;
};

export const styles = StyleSheet.create<ListCitiesScreenStyleType>({
  center: {
    textAlign: 'center',
  },
});
