import { AppStoreType } from '../store';

export const getDayWeatherInfo = (state: AppStoreType) =>
  state.weather.dataItem;
