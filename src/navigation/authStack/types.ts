import { AUTH_NAVIGATION_NAME } from '../../enum/enum';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type ScreenOptionsType =
  | StackNavigationOptions
  | ((props: {
      navigation: AUTH_NAVIGATION_NAME;
      route: RouteProp<AuthStackParamList, keyof AuthStackParamList>;
    }) => StackNavigationOptions);
