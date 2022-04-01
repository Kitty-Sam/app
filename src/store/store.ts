import { combineReducers, createStore } from 'redux';
import { cityReducer } from './reducers/cityReducer';
import { registerReducer } from './reducers/registerReducer';
import { loginReducer } from './reducers/loginReducer';
import { appReducer } from './reducers/appReducer';

export const rootReducer = combineReducers({
  cities: cityReducer,
  register: registerReducer,
  login: loginReducer,
  app: appReducer,
});

export type AppStoreType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
