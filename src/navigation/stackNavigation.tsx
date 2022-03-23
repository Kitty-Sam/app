import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginNavigation } from './loginStack';
import { TabNavigation } from './tabNavigation';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'LoginStack'} component={LoginNavigation} />
      <Stack.Screen name={'TabStack'} component={TabNavigation} />
    </Stack.Navigator>
  );
};
