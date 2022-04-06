import { AppStoreType } from '../store';

export const getCities = (state: AppStoreType) => state.cities.cities;

export const getPinnedCities = (state: AppStoreType) =>
  state.cities.cities.filter((city) => city.isDefault);

export const getSelectedCities = (state: AppStoreType) =>
  state.cities.cities.filter((city) => city.selected);
