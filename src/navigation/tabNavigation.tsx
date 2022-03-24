import React, { useState } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { LoginScreen } from '../screens/LoginScreen/LoginScreen';
import { CityScreen } from '../screens/CItyScreen/CityScreen';
import { ListCitiesScreen } from '../screens/ListCitiesScreen/ListCitiesScreen';
import { Icon } from 'react-native-elements';

import { TAB_NAME } from '../enum/enum';
import { COLORS } from '../theme/colors';

import { Button, View, useColorScheme } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  RouteProp,
} from '@react-navigation/native';
import { TabNavigationParamList } from './types';
import { styles } from './styles';

const Tab = createBottomTabNavigator<TabNavigationParamList>();

export const TabNavigation = () => {
  const scheme = useColorScheme();

  const [userData, setUserData] = useState(true);

  if (!userData) {
    return <LoginScreen />;
  }

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
      <View style={styles.logOutContainer}>
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

  type ScreenOptionsType =
    | BottomTabNavigationOptions
    | ((props: {
        // navigation: TabNavigation;
        navigation: any;
        route: RouteProp<TabNavigationParamList, keyof TabNavigationParamList>;
      }) => BottomTabNavigationOptions);

  const commonScreenOptions: ScreenOptionsType = {
    headerStyle: {
      backgroundColor: COLORS.indigo,
    },
    headerTitleAlign: 'center',
    headerTitle: 'Weather App',
  };

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator screenOptions={commonScreenOptions}>
        <Tab.Screen
          name={TAB_NAME.MAIN_SCREEN}
          component={CityScreen}
          options={mainScreenOptions}
        />
        <Tab.Screen
          name={TAB_NAME.LIST_CITIES_SCREEN}
          component={ListCitiesScreen}
          options={listCityScreenOptions}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
