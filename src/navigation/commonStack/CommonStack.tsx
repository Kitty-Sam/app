import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { COMMON_STACK_NAME } from '../../enum/enum';

import { TabNavigation } from '../tabStack/tabNavigation';
import { WeatherCardScreen } from '../../screens/WeatherCardScreen/WeatherCardScreen';
import { CommonStackParamList } from './types';
import { colors } from '../../theme/colors';
import { UserProfileScreen } from '../../screens/UserProfileScreen/UserProfileScreen';

const MainStack = createStackNavigator<CommonStackParamList>();

export const MainStackNavigation = () => {
  const screenOptions: StackNavigationOptions = {
    headerStyle: {
      backgroundColor: colors.background_colors.akaroa,
    },
    gestureEnabled: true,
  };

  const [isFirst, setIsFirst] = useState<boolean>(false);

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={COMMON_STACK_NAME.TAB}>
        <MainStack.Screen
          name={COMMON_STACK_NAME.TAB}
          component={TabNavigation}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name={COMMON_STACK_NAME.WEATHER}
          component={WeatherCardScreen}
          options={screenOptions}
        />
        <MainStack.Screen
          name={COMMON_STACK_NAME.PROFILE}
          component={UserProfileScreen}
          options={screenOptions}
          initialParams={{
            isFirst,
            setIsFirst,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
