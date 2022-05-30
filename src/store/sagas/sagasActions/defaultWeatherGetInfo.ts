import { DEFAULT_WEATHER_GET_INFO } from '../sagasActionTypes/sagasActionsTypes';

export const defaultWeatherGetInfoAction = (
  payload: defaultWeatherGetInfoPayload,
) => ({
  type: DEFAULT_WEATHER_GET_INFO,
  payload,
});

export type defaultWeatherGetInfoPayload = {
  city: string;
};

export type DefaultWeatherGetInfoActionType = {
  payload: defaultWeatherGetInfoPayload;
  type: typeof DEFAULT_WEATHER_GET_INFO;
};
