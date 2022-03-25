const ADD_TO_SELECT_LIST = 'ADD_TO_SELECT_LIST';
const REMOVE_FROM_SELECT_LIST = 'REMOVE_FROM_SELECT_LIST';
const GET_CITIES = 'GET_CITIES';

const initialState = {
  cities: [],
  selectedCities: [],
};

export const cityReducer = (state = initialState, action: ActionsType) => {
  return state;
};

const getCitiesAC = (cities: number) => {
  return {
    type: GET_CITIES,
    payload: cities,
  };
};

const selectCityAC = (city: any) => {
  return {
    type: ADD_TO_SELECT_LIST,
    payload: city,
  };
};

const unSelectCityAC = (id: number) => {
  return {
    type: REMOVE_FROM_SELECT_LIST,
    payload: id,
  };
};

type ActionsType =
  | ReturnType<typeof getCitiesAC>
  | ReturnType<typeof selectCityAC>
  | ReturnType<typeof unSelectCityAC>;
