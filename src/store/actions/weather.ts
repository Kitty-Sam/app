import { dayWeatherInfo } from '../../screens/WeatherCardScreen/types';

export enum WeatherActions {
  WEATHER_SAVE_INFO = 'WEATHER_SAVE_INFO',
}

export const weatherSave: WeatherSaveActionType = (
  payload: dayWeatherInfo,
) => ({
  type: WeatherActions.WEATHER_SAVE_INFO,
  payload,
});
export type WeatherSaveActionType = (payload: dayWeatherInfo) => {
  payload: dayWeatherInfo;
  type: WeatherActions.WEATHER_SAVE_INFO;
};
