import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore } from 'redux';
import {
  persistReducer,
  persistStore,
  persistCombineReducers,
} from 'redux-persist';
import { cityReducer } from './reducers/cityReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

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
