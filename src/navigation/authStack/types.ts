import { AUTH_NAVIGATION_NAME } from '../../enum/enum';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';

export type AuthStackParamList = {
  Confirm: undefined;
  Forgot: undefined;
  Forgot_Submit: undefined;
  Login: undefined;
  Register: undefined;
};

export type StackScreenNavigationProps<
  T extends keyof NavParamList,
  NavParamList extends ParamListBase,
> = {
  navigation: StackNavigationProp<NavParamList, T>;
  route: RouteProp<NavParamList, T>;
};

export type ScreenOptionsType =
  | StackNavigationOptions
  | ((props: {
      navigation: AUTH_NAVIGATION_NAME;
      route: RouteProp<AuthStackParamList, keyof AuthStackParamList>;
    }) => StackNavigationOptions);
