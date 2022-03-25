import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { CityScreen } from '../../screens/CItyScreen/CityScreen';
import { ListCitiesScreen } from '../../screens/ListCitiesScreen/ListCitiesScreen';
import { Icon } from 'react-native-elements';

import { TAB_NAVIGATION_NAME } from '../../enum/enum';
import { COLORS } from '../../theme/colors';

import { Button, useColorScheme, View } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { ScreenOptionsType, TabStackParamList } from './types';

const TabStack = createBottomTabNavigator<TabStackParamList>();

export const TabNavigation = () => {
  const scheme = useColorScheme();

  const onLogOutPress = () => {
    console.log('123');
  };

  const mainScreenOptions: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    tabBarIcon: ({ size, focused, color }) => (
      <Icon
        tvParallaxProperties
        name="home"
        type="ionicon"
        color={focused ? COLORS.indigo : COLORS.jumbo}
        size={30}
      />
    ),
    headerRight: () => (
      <View>
        <Button title="Log out" onPress={onLogOutPress} color={COLORS.punch} />
      </View>
    ),
  };

  const listCityScreenOptions: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    tabBarIcon: ({ size, focused, color }) => (
      <Icon
        tvParallaxProperties
        name="md-list-circle"
        type="ionicon"
        color={focused ? COLORS.indigo : COLORS.jumbo}
        size={30}
      />
    ),
  };

  const commonScreenOptions: ScreenOptionsType = {
    headerStyle: {
      backgroundColor: COLORS.indigo,
    },
    headerTitleAlign: 'center',
    headerTitle: 'Weather App',
  };

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <TabStack.Navigator screenOptions={commonScreenOptions}>
        <TabStack.Screen
          name={TAB_NAVIGATION_NAME.MAIN_SCREEN}
          component={CityScreen}
          options={mainScreenOptions}
        />
        <TabStack.Screen
          name={TAB_NAVIGATION_NAME.LIST_CITIES_SCREEN}
          component={ListCitiesScreen}
          options={listCityScreenOptions}
        />
      </TabStack.Navigator>
    </NavigationContainer>
  );
};
