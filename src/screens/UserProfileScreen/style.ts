import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { colors } from '../../theme/colors';

type ProfileScreenStyleType = {
  avatar: ImageStyle;
  avatarContainer: ViewStyle;
  buttonContainer: ViewStyle;
  overlay: ViewStyle;
  root: ViewStyle;
  text: TextStyle;
  textInput: TextStyle;
  textName: TextStyle;
};

export const styles = StyleSheet.create<ProfileScreenStyleType>({
  root: {
    flex: 1,
    backgroundColor: colors.background_colors.pampas,
    justifyContent: 'center',
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 150,
    borderRadius: 25,
    position: 'absolute',
    top: 90,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 50,
  },
  text: {
    margin: 20,
    fontSize: 16,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    margin: 16,
  },
  textInput: {
    padding: 4,
    backgroundColor: colors.button_colors.default_button_Buddha_Gold,
    borderRadius: 10,
    margin: 20,
    marginRight: 50,
    fontSize: 16,
  },
  buttonContainer: {
    position: 'absolute',
    top: 8,
    right: 10,
  },
  textName: {
    margin: 20,
    marginRight: 50,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 16,
  },
});
