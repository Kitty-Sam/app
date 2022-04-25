/**
 * @format
 */
import 'intl-pluralrules';
import React from 'react';
import { AppRegistry } from 'react-native';
import { App } from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/store/configureStore';

import i18n from './src/i18n/i18n';

const ReduxProvider = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxProvider);
