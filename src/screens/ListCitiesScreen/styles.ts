import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../theme/colors';

type ListCitiesScreenStyleType = {
  cityItemContainer: ViewStyle;
  conditionContainer: ViewStyle;
  conditionText: TextStyle;
  fab: ViewStyle;
  listContainer: ViewStyle;
  overlay: ViewStyle;
  overlayText: TextStyle;
  root: ViewStyle;
  search: ViewStyle;
  showButtonContainer: ViewStyle;
  textOverlayContainer: ViewStyle;
  timerContainer: ViewStyle;
};

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create<ListCitiesScreenStyleType>({
  root: {
    backgroundColor: COLORS.BACKGROUND_COLORS.pampas,
    flex: 1,
  },
  conditionText: {
    marginVertical: 6,
    fontSize: 18,
    color: COLORS.TEXT_COLORS.zuccini,
  },
  conditionContainer: {
    marginVertical: 16,
    marginHorizontal: 30,
    width: width / 1.4,
  },
  search: {
    backgroundColor: COLORS.BACKGROUND_COLORS.akaroa,
    color: COLORS.TEXT_COLORS.zuccini,
    borderRadius: 10,
    textTransform: 'capitalize',
    paddingHorizontal: 15,
    fontSize: 18,
  },
  listContainer: {
    margin: 16,
  },
  cityItemContainer: {
    margin: 8,
  },
  showButtonContainer: {
    position: 'absolute',
    right: -55,
    top: 39,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: -height / 1.7,
    zIndex: 10,
  },
  overlay: {
    width: width / 1.5,
    height: width / 2,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: COLORS.BACKGROUND_COLORS.pampas,
  },
  overlayText: {
    color: COLORS.TEXT_COLORS.zuccini,
    textAlign: 'center',
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
});
