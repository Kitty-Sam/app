/**
 * @format
 */
import 'intl-pluralrules';
import React from 'react';
import { AppRegistry, Platform } from 'react-native';
import { App } from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/store/configureStore';
import PushNotification from 'react-native-push-notification';
import i18n from './src/i18n/i18n';

const ReduxProvider = () => {
  PushNotification.configure({
    onNotification: function (notification) {
      console.log('LOCAL NOTIFICATION ==>', notification);
    },

    popInitialNotification: true,
    requestPermissions: Platform.OS === 'ios',
  });

  PushNotification.createChannel(
    {
      channelId: 'not1',
      channelName: 'Channel',
    },
    (created) => console.log(`createChannel returned '${created}'`),
  );

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxProvider);
