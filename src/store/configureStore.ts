import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { rootReducer } from './store';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);

/*
const rootReducer = persistCombineReducers(persistConfig, {
  cities: cityReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store, { storage: AsyncStorage });
  return { store, persistor };
};
*/
