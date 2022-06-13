import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { CityScreen } from '../../screens/CItyScreen/CityScreen';
import { ListCitiesScreen } from '../../screens/ListCitiesScreen/ListCitiesScreen';
import { Icon } from 'react-native-elements';
import { COMMON_STACK_NAME, TAB_NAVIGATION_NAME } from '../../enum/enum';
import { colors } from '../../theme/colors';
import { ScreenOptionsType, TabStackParamList } from './types';
import { iconsName, iconsType } from '../../utils/constants/icons';
import { useNavigation } from '@react-navigation/native';

export const TabStack = createBottomTabNavigator<TabStackParamList>();

export const TabNavigation = () => {
  const navigation = useNavigation();

  const mainScreenOptions: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    tabBarIcon: ({ size, focused, color }) => (
      <Icon
        tvParallaxProperties
        name={iconsName.HOME}
        type={iconsType.IONICON}
        size={30}
        color={colors.text_colors.zuccini}
      />
    ),

    tabBarActiveBackgroundColor: colors.background_colors.akaroa,
    tabBarInactiveBackgroundColor: colors.background_colors.pampas,
    headerTitleStyle: { color: colors.text_colors.zuccini },
  };

  const listCityScreenOptions: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    tabBarIcon: ({ size, focused, color }) => (
      <Icon
        tvParallaxProperties
        name={iconsName.LIST}
        type={iconsType.IONICON}
        size={30}
        color={colors.text_colors.zuccini}
      />
    ),
    tabBarActiveBackgroundColor: colors.background_colors.akaroa,
    tabBarInactiveBackgroundColor: colors.background_colors.pampas,
  };

  const commonScreenOptions: ScreenOptionsType = {
    headerStyle: {
      backgroundColor: colors.background_colors.akaroa,
    },
    headerTitleAlign: 'left',
    headerTitle: 'Weather',
    headerRightContainerStyle: {
      paddingRight: 16,
    },
    headerRight: () => (
      <Icon
        tvParallaxProperties
        name={iconsName.AVATAR}
        type={iconsType.MATERIAL}
        onPress={() => navigation.navigate(COMMON_STACK_NAME.PROFILE)}
        color={colors.text_colors.zuccini}
        size={36}
      />
    ),
  };

  return (
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
      {/* <TabStack.Screen
        name={TAB_NAVIGATION_NAME.EMPTY}
        component={EmptyScreen}
        options={listCityScreenOptions}
      />*/}
    </TabStack.Navigator>
  );
};
