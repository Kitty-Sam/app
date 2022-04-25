import { AppStoreType } from '../store';

export const getDayWeatherInfo = (state: AppStoreType) =>
  state.weather.dataItem;

export const getDefaultDayWeatherInfo = (state: AppStoreType) =>
  state.weather.dataItemDefault;
