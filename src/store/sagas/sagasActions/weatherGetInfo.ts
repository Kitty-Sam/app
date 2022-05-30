import { WEATHER_GET_INFO } from '../sagasActionTypes/sagasActionsTypes';

export const weatherGetInfoAction = (payload: weatherGetInfoPayload) => ({
  type: WEATHER_GET_INFO,
  payload,
});

export type weatherGetInfoPayload = {
  nav?: () => void;
  search: string;
};

export type WeatherGetInfoActionType = {
  payload: weatherGetInfoPayload;
  type: typeof WEATHER_GET_INFO;
};
