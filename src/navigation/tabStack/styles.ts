import { StyleSheet, ViewStyle } from 'react-native';

type TabNavigationStyleType = {
  logOutContainer: ViewStyle;
};

export const styles = StyleSheet.create<TabNavigationStyleType>({
  logOutContainer: {
    textAlign: 'center',
    position: 'absolute',
    right: 8,
    width: 80,
    height: 40,
  },
});
