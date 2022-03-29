import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { COMMON_STACK_NAME } from '../../enum/enum';

import { TabNavigation } from '../tabStack/tabNavigation';
import { WeatherCard } from '../../components/WeatherCard/WeatherCard';
import { TabStackParamList } from '../tabStack/types';

export type CommonStackParamList = {
  Tab: TabStackParamList;
  Weather: undefined;
};

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
          name={COMMON_STACK_NAME.WEATHER}
          component={WeatherCard}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
