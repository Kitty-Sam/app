import React, { FC } from 'react';

import { LogBox } from 'react-native';
import { TabNavigation } from './src/navigation/tabNavigation';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export const App: FC = () => {
  return <TabNavigation />;
};
