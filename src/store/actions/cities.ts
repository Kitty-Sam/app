import { DataItemType } from '../../screens/ListCitiesScreen/types';

export enum CitiesActions {
  ADD_CITY = 'ADD_CITY',
  GET_CITIES = 'GET_CITIES',
  SET_SELECTED_CITIES = 'SET_SELECTED_CITIES',
  TOGGLE_DEFAULT_POSITION = 'TOGGLE_DEFAULT_POSITION',
  TOGGLE_SELECTED_CITY = 'TOGGLE_SELECTED_CITY',
}

export type SetSelectedCitiesPayload = {
  selectedCities: DataItemType[];
};

export const setSelectedCities: setSelectedCitiesActionType = (
  payload: SetSelectedCitiesPayload,
) => ({
  type: CitiesActions.SET_SELECTED_CITIES,
  payload,
});

export type setSelectedCitiesActionType = (
  payload: SetSelectedCitiesPayload,
) => {
  payload: SetSelectedCitiesPayload;
  type: CitiesActions.SET_SELECTED_CITIES;
};

export const toggleDefaultPosition: ToggleDefaultPositionActionType = (
  payload: string,
) => ({
  type: CitiesActions.TOGGLE_DEFAULT_POSITION,
  payload,
});

export type ToggleDefaultPositionActionType = (payload: string) => {
  payload: string;
  type: CitiesActions.TOGGLE_DEFAULT_POSITION;
};

export const getCities: GetCitiesActionType = () => ({
  type: CitiesActions.GET_CITIES,
});

export type GetCitiesActionType = () => {
  type: CitiesActions.GET_CITIES;
};

export const toggleSelectedCity: ToggleSelectedCityActionType = (
  payload: string,
) => ({
  type: CitiesActions.TOGGLE_SELECTED_CITY,
  payload,
});

export type ToggleSelectedCityActionType = (payload: string) => {
  payload: string;
  type: CitiesActions.TOGGLE_SELECTED_CITY;
};

export const addCity: AddCityActionType = (payload) => ({
  type: CitiesActions.ADD_CITY,
  payload,
});

export type AddCityActionType = (payload: string) => {
  payload: string;
  type: CitiesActions.ADD_CITY;
};
