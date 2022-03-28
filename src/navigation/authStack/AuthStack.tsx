import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { RegisterScreen } from '../../screens/RegisterScreen/RegisterScreen';

import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from '../../screens/LoginScreen/LoginScreen';
import { AUTH_NAVIGATION_NAME } from '../../enum/enum';
import { AuthStackParamList, ScreenOptionsType } from './types';

const AuthStack = createStackNavigator<AuthStackParamList>();

const commonScreenOptions: ScreenOptionsType = {
  headerShown: false,
};

export const AuthStackNavigation = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        initialRouteName={AUTH_NAVIGATION_NAME.LOGIN}
        screenOptions={commonScreenOptions}>
        <AuthStack.Screen
          name={AUTH_NAVIGATION_NAME.LOGIN}
          component={LoginScreen}
        />
        <AuthStack.Screen
          name={AUTH_NAVIGATION_NAME.REGISTER}
          component={RegisterScreen}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};
