import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { TAB_NAVIGATION_NAME } from '../enum/enum';
import { RouteProp } from '@react-navigation/native';

export type TabNavigationParamList = {
  CityScreen: undefined;
  List: undefined;
};

export type ScreenOptionsType =
  | BottomTabNavigationOptions
  | ((props: {
      navigation: TAB_NAVIGATION_NAME;
      route: RouteProp<TabNavigationParamList, keyof TabNavigationParamList>;
    }) => BottomTabNavigationOptions);
