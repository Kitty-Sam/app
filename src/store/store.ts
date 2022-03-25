import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { cityReducer } from './reducers/cityReducer';

export const rootReducer = combineReducers({
  cities: cityReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
