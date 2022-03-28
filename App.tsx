import React, { FC, useState } from 'react';

import { LogBox } from 'react-native';
import { TabNavigation } from './src/navigation/tabStack/tabNavigation';
import { store } from './src/store/store';
import { Provider } from 'react-redux';
import { AuthStackNavigation } from './src/navigation/authStack/AuthStack';

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
      <TabNavigation />
    </Provider>
  );
};
