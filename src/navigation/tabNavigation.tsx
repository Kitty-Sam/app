import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import CityScreen from '../screens/CityScreen';
import ListCitiesScreen from '../screens/ListCitiesScreen';
import { Icon } from 'react-native-elements';
import { theme } from '../theme/Theme';
import { LoginNavigation } from './loginStack';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  const [userData, setUserData] = useState(false);

  if (!userData) {
    return <LoginNavigation />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={'City'}
          component={CityScreen}
          options={{
            tabBarLabel: 'City',
            tabBarIcon: ({ size, focused, color }) => (
              <Icon
                tvParallaxProperties
                name="home"
                type="ionicon"
                color={focused ? theme.borderColor : theme.selectedColor}
              />
            ),
          }}
        />
        <Tab.Screen
          name={'List'}
          component={ListCitiesScreen}
          options={{
            tabBarLabel: 'List',
            tabBarIcon: ({ size, focused, color }) => (
              <Icon
                tvParallaxProperties
                name="md-list-circle"
                type="ionicon"
                color={focused ? theme.borderColor : theme.selectedColor}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
