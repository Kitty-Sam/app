export enum CitiesActions {
  GET_CITIES = 'GET_CITIES',
  TOGGLE_SELECTED_CITY = 'TOGGLE_SELECTED_CITY',
}

export const getCitiesAC: getCitiesACType = () => ({
  type: CitiesActions.GET_CITIES,
});

export type getCitiesACType = () => {
  type: CitiesActions.GET_CITIES;
};

export const toggleSelectedCityAC: toggleSelectedCityACType = (id) => ({
  type: CitiesActions.TOGGLE_SELECTED_CITY,
  id,
});

export type toggleSelectedCityACType = (id: number) => {
  id: number;
  type: CitiesActions.TOGGLE_SELECTED_CITY;
};
