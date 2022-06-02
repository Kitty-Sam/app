import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { colors } from '../../theme/colors';

type ListCitiesScreenStyleType = {
  citiesContainer: ViewStyle;
  cityItemContainer: ViewStyle;
  conditionContainer: ViewStyle;
  conditionText: TextStyle;
  listContainer: ViewStyle;
  overlay: ViewStyle;
  overlaySearch: ViewStyle;
  overlayText: TextStyle;
  root: ViewStyle;
  search: ViewStyle;
  showButtonContainer: ViewStyle;
  textOverlayContainer: ViewStyle;
  textOverlaySearch: TextStyle;
  timerContainer: ViewStyle;
};

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create<ListCitiesScreenStyleType>({
  root: {
    backgroundColor: colors.background_colors.pampas,
    flex: 1,
  },
  conditionText: {
    marginVertical: 6,
    fontSize: 18,
    color: colors.text_colors.zuccini,
  },
  conditionContainer: {
    marginVertical: 16,
    marginHorizontal: 30,
    width: width / 1.4,
  },
  search: {
    backgroundColor: colors.background_colors.akaroa,
    color: colors.text_colors.zuccini,
    borderRadius: 10,
    textTransform: 'capitalize',
    paddingHorizontal: 15,
    fontSize: 18,
  },
  citiesContainer: {
    alignItems: 'center',
  },
  listContainer: {
    margin: 16,
  },
  cityItemContainer: {
    margin: 8,
  },
  showButtonContainer: {
    position: 'absolute',
    left: 300,
    top: 43,
  },
  overlay: {
    width: width / 1.3,
    height: width / 1.3,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: colors.background_colors.pampas,
  },
  overlayText: {
    color: colors.text_colors.zuccini,
    textAlign: 'center',
    marginHorizontal: 10,
    fontSize: 20,
  },
  textOverlayContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  overlaySearch: {
    width: 200,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  textOverlaySearch: {
    textAlign: 'center',
  },
});
