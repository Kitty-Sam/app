import {
  defaultWeatherSave,
  WeatherActions,
  weatherSave,
} from '../actions/weather';
import { dayWeatherInfo } from '../../screens/WeatherCardScreen/types';

const initialState: initialStateType = {
  dataItem: null,
  dataItemDefault: null,
};

type initialStateType = {
  dataItem: dayWeatherInfo | null;
  dataItemDefault: dayWeatherInfo | null;
};

export const weatherReducer = (
  state: initialStateType = initialState,
  action: ActionsType,
): initialStateType => {
  switch (action.type) {
    case WeatherActions.WEATHER_SAVE_INFO:
      return { ...state, dataItem: action.payload };

    case WeatherActions.DEFAULT_WEATHER_SAVE_INFO:
      return { ...state, dataItemDefault: action.payload };
    default:
      return state;
  }
};

type ActionsType =
  | ReturnType<typeof weatherSave>
  | ReturnType<typeof defaultWeatherSave>;
