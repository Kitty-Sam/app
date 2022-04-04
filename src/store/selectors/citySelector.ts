import { AppStoreType } from '../store';

export const getCities = (state: AppStoreType) => state.cities.cities;

export const getSelectedCities = (state: AppStoreType) =>
  state.cities.selectedCities;
