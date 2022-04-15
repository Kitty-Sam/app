import { combineReducers } from 'redux';
import { cityReducer } from './reducers/cityReducer';
import { loginReducer } from './reducers/loginReducer';
import { appReducer } from './reducers/appReducer';
import { weatherReducer } from './reducers/weatherReducer';

export const rootReducer = combineReducers({
  cities: cityReducer,
  login: loginReducer,
  app: appReducer,
  weather: weatherReducer,
});

export type AppStoreType = ReturnType<typeof rootReducer>;
