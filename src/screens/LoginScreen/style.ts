import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

type LoginScreenStyleType = {
  buttonContainer: ViewStyle;
  buttonsLinkContainer: ViewStyle;
  divider: ViewStyle;
  headerText: TextStyle;
  inputText: TextStyle;
  loginContainer: ViewStyle;
  regularText: TextStyle;
  root: ViewStyle;
  textContainer: ViewStyle;
};

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create<LoginScreenStyleType>({
  root: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_COLORS.iron,
  },
  loginContainer: {
    width: width / 1.2,
    height: height / 1.5,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  headerText: {
    color: COLORS.TEXT_COLORS.zuccini,
    fontWeight: '600',
    fontSize: 18,
    marginTop: 24,
  },
  inputText: {
    borderBottomColor: COLORS.TEXT_COLORS.zuccini,
    borderBottomWidth: 2,
    color: COLORS.TEXT_COLORS.zuccini,
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    justifyContent: 'space-around',
    alignItems: 'stretch',
    marginVertical: 20,
    height: height / 3.5,
  },
  regularText: {
    color: COLORS.TEXT_COLORS.zuccini,
    fontWeight: '400',
    fontSize: 16,
  },
  textContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonsLinkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    backgroundColor: COLORS.TEXT_COLORS.zuccini,
    marginTop: 150,
  },
});
