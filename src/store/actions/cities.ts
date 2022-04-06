export enum CitiesActions {
  ADD_CITY = 'ADD_CITY',
  GET_CITIES = 'GET_CITIES',
  TOGGLE_DEFAULT_POSITION = 'TOGGLE_DEFAULT_POSITION',
  TOGGLE_SELECTED_CITY = 'TOGGLE_SELECTED_CITY',
}

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

export const addCity: AddCityActionType = (payload) => ({
  type: CitiesActions.ADD_CITY,
  payload,
});

export type AddCityActionType = (payload: string) => {
  payload: string;
  type: CitiesActions.ADD_CITY;
};
