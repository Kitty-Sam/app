import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginScreen } from '../screens/LoginScreen/LoginScreen';
import { CityScreen } from '../screens/CItyScreen/CityScreen';
import { ListCitiesScreen } from '../screens/ListCitiesScreen/ListCitiesScreen';
import { Icon } from 'react-native-elements';
import { theme } from '../theme/Theme';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  const [userData, setUserData] = useState(true);

  if (!userData) {
    return <LoginScreen />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.screenColor,
          },
          headerTitleAlign: 'center',
        }}>
        <Tab.Screen
          name="weather forecast for 5 days"
          component={CityScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ size, focused, color }) => (
              <Icon
                tvParallaxProperties
                name="home"
                type="ionicon"
                color={focused ? theme.focusedItem : theme.unFocusedItem}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="List of cities"
          component={ListCitiesScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ size, focused, color }) => (
              <Icon
                tvParallaxProperties
                name="md-list-circle"
                type="ionicon"
                color={focused ? theme.focusedItem : theme.unFocusedItem}
                size={30}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
