export enum CitiesActions {
  GET_CITIES = 'GET_CITIES',
  TOGGLE_SELECTED_CITY = 'TOGGLE_SELECTED_CITY',
}

export const getCities: GetCitiesActionType = () => ({
  type: CitiesActions.GET_CITIES,
});

export type GetCitiesActionType = () => {
  type: CitiesActions.GET_CITIES;
};

export const toggleSelectedCity: ToggleSelectedCityActionType = (
  payload: number,
) => ({
  type: CitiesActions.TOGGLE_SELECTED_CITY,
  payload,
});

export type ToggleSelectedCityActionType = (payload: number) => {
  payload: number;
  type: CitiesActions.TOGGLE_SELECTED_CITY;
};
