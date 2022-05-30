import {
  defaultWeatherSave,
  WeatherActions,
  weatherSave,
} from '../actions/weather';
import { DayWeatherInfo } from '../../screens/WeatherCardScreen/types';

const initialState: InitialStateType = {
  dataItem: null,
  dataItemDefault: null,
};

type InitialStateType = {
  dataItem: DayWeatherInfo | null;
  dataItemDefault: DayWeatherInfo | null;
};

export const weatherReducer = (
  state: InitialStateType = initialState,
  action: ActionsType,
): InitialStateType => {
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
