import { DayWeatherInfo } from '../../screens/WeatherCardScreen/types';

export enum WeatherActions {
  DEFAULT_WEATHER_SAVE_INFO = 'DEFAULT_WEATHER_SAVE_INFO',
  WEATHER_SAVE_INFO = 'WEATHER_SAVE_INFO',
}

export const weatherSave: WeatherSaveActionType = (
  payload: DayWeatherInfo,
) => ({
  type: WeatherActions.WEATHER_SAVE_INFO,
  payload,
});
export type WeatherSaveActionType = (payload: DayWeatherInfo) => {
  payload: DayWeatherInfo;
  type: WeatherActions.WEATHER_SAVE_INFO;
};

export const defaultWeatherSave: DefaultWeatherSaveActionType = (
  payload: DayWeatherInfo,
) => ({
  type: WeatherActions.DEFAULT_WEATHER_SAVE_INFO,
  payload,
});
export type DefaultWeatherSaveActionType = (payload: DayWeatherInfo) => {
  payload: DayWeatherInfo;
  type: WeatherActions.DEFAULT_WEATHER_SAVE_INFO;
};
