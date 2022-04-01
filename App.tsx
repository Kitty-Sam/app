import React, { FC } from 'react';

import { LogBox } from 'react-native';
import { AppStoreType } from './src/store/store';
import { useSelector } from 'react-redux';
import { AuthStackNavigation } from './src/navigation/authStack/AuthStack';
import { MainStackNavigation } from './src/navigation/commonStack/CommonStack';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export const App: FC = () => {
  const isLoggedIn = useSelector<AppStoreType, boolean>(
    (state) => state.login.isLoggedIn,
  );

  if (!isLoggedIn) {
    return <AuthStackNavigation />;
  }
  return <MainStackNavigation />;
};
