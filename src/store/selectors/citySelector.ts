import { AppStoreType } from '../store';

export const getPinnedCities = (state: AppStoreType) =>
  state.cities.cities.find((city) => city.isDefault);

export const getSelectedCities = (state: AppStoreType) =>
  state.cities.cities.filter((city) => city.selected);

export const getCities = (state: AppStoreType) => state.cities.cities;
