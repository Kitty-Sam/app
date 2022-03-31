import React, { FC, useState } from 'react';

import { LogBox } from 'react-native';
import { store } from './src/store/store';
import { Provider } from 'react-redux';
import { AuthStackNavigation } from './src/navigation/authStack/AuthStack';
import { MainStackNavigation } from './src/navigation/commonStack/CommonStack';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export const App: FC = () => {
  const [userData, setUserData] = useState(true);

  if (!userData) {
    return <AuthStackNavigation />;
  }
  return (
    <Provider store={store}>
      <MainStackNavigation />
    </Provider>
  );
};
