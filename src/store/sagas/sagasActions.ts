export const WEATHER_GET_INFO = 'WEATHER_GET_INFO';

export const weatherGetInfo = (payload: string): WeatherGetInfoType => ({
  type: WEATHER_GET_INFO,
  payload,
});

export type WeatherGetInfoType = {
  payload: string;
  type: typeof WEATHER_GET_INFO;
};
