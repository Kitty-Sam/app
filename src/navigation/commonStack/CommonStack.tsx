import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { COMMON_STACK_NAME } from '../../enum/enum';

import { TabNavigation } from '../tabStack/tabNavigation';
import { WeatherCardScreen } from '../../screens/WeatherCardScreen/WeatherCardScreen';
import { CommonStackParamList } from './types';
import { COLORS } from '../../theme/colors';
import { NotificationsScreen } from '../../screens/NotificationsSCreen/NotificationsScreen';

const MainStack = createStackNavigator<CommonStackParamList>();

export const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={COMMON_STACK_NAME.TAB}>
        <MainStack.Screen
          name={COMMON_STACK_NAME.TAB}
          component={TabNavigation}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name={COMMON_STACK_NAME.NOTIFICATIONS}
          component={NotificationsScreen}
          options={{
            headerStyle: {
              backgroundColor: COLORS.BACKGROUND_COLORS.akaroa,
            },
          }}
        />
        <MainStack.Screen
          name={COMMON_STACK_NAME.WEATHER}
          component={WeatherCardScreen}
          options={{
            headerStyle: {
              backgroundColor: COLORS.BACKGROUND_COLORS.akaroa,
            },
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
