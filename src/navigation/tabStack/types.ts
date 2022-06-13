import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { TAB_NAVIGATION_NAME } from '../../enum/enum';
import { RouteProp } from '@react-navigation/native';

export type TabStackParamList = {
  [TAB_NAVIGATION_NAME.MAIN_SCREEN]: { isDefault: boolean; title: string };
  [TAB_NAVIGATION_NAME.LIST_CITIES_SCREEN]: undefined;
  // [TAB_NAVIGATION_NAME.EMPTY]: undefined;
};

export type ScreenOptionsType =
  | BottomTabNavigationOptions
  | ((props: {
      navigation: TAB_NAVIGATION_NAME;
      route: RouteProp<TabStackParamList, keyof TabStackParamList>;
    }) => BottomTabNavigationOptions);
