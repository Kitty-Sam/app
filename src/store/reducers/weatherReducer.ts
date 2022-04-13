import { WeatherActions, weatherSave } from '../actions/weather';
import { dayWeatherInfo } from '../../screens/WeatherCardScreen/types';

const initialState = {
  dataItem: {} as dayWeatherInfo,
};

type initialStateType = {
  dataItem: dayWeatherInfo;
};

export const weatherReducer = (
  state: initialStateType = initialState,
  action: ActionsType,
) => {
  switch (action.type) {
    case WeatherActions.WEATHER_SAVE_INFO:
      return { ...state, dataItem: action.payload };

    default:
      return state;
  }
};

type ActionsType = ReturnType<typeof weatherSave>;
