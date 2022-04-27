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
import { ScreenOptionsType, TabStackParamList } from './types';
import { AppButton } from '../../components/AppButton/AppButton';
import { useDispatch } from 'react-redux';
import { googleSignOut } from '../../store/sagas/sagasActions';
import { buttonsName } from '../../utils/constants/buttons';
import { iconsName, iconsType } from '../../utils/constants/icons';

export const TabStack = createBottomTabNavigator<TabStackParamList>();

export const TabNavigation = () => {
  const dispatch = useDispatch();

  const onLogOutPress = () => {
    dispatch(googleSignOut());
  };

  const mainScreenOptions: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    tabBarIcon: ({ size, focused, color }) => (
      <Icon
        tvParallaxProperties
        name={iconsName.HOME}
        type={iconsType.IONICON}
        size={30}
        color={COLORS.TEXT_COLORS.zuccini}
      />
    ),

    tabBarActiveBackgroundColor: COLORS.BACKGROUND_COLORS.akaroa,
    tabBarInactiveBackgroundColor: COLORS.BACKGROUND_COLORS.pampas,
    headerTitleStyle: { color: COLORS.TEXT_COLORS.zuccini },
  };

  const listCityScreenOptions: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    tabBarIcon: ({ size, focused, color }) => (
      <Icon
        tvParallaxProperties
        name={iconsName.LIST}
        type={iconsType.IONICON}
        size={30}
        color={COLORS.TEXT_COLORS.zuccini}
      />
    ),
    tabBarActiveBackgroundColor: COLORS.BACKGROUND_COLORS.akaroa,
    tabBarInactiveBackgroundColor: COLORS.BACKGROUND_COLORS.pampas,
  };

  const commonScreenOptions: ScreenOptionsType = {
    headerStyle: {
      backgroundColor: COLORS.BACKGROUND_COLORS.akaroa,
    },
    headerTitleAlign: 'left',
    headerTitle: 'Weather Now',
    headerRightContainerStyle: {
      paddingRight: 16,
    },
    headerRight: () => (
      <AppButton onPress={onLogOutPress} title={buttonsName.LOG_OUT} />
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
    </TabStack.Navigator>
  );
};
