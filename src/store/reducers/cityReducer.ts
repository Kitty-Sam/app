import {
  CitiesActions,
  getCities,
  toggleDefaultPosition,
  toggleSelectedCity,
} from '../actions/cities';
import { DataItemType } from '../../screens/ListCitiesScreen/types';

export type initialStateType = {
  cities: DataItemType[];
  selectedCities?: DataItemType[];
};
const initialState: initialStateType = {
  cities: [
    { id: 1, city: 'Minsk', selected: true, isDefault: false },
    { id: 2, city: 'Moscow', selected: false, isDefault: true },
    { id: 3, city: 'Kiev', selected: false, isDefault: false },
    { id: 4, city: 'Riga', selected: false, isDefault: false },
    { id: 5, city: 'Orsha', selected: false, isDefault: false },
    { id: 6, city: 'Brest', selected: false, isDefault: false },
    { id: 7, city: 'Grodno', selected: false, isDefault: false },
    { id: 8, city: 'Bereza', selected: false, isDefault: false },
    { id: 9, city: 'Mogilev', selected: false, isDefault: false },
    { id: 10, city: 'Vitebsk', selected: false, isDefault: false },
  ],
  selectedCities: [],
};

export const cityReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case CitiesActions.GET_CITIES:
      return {
        ...state,
      };

    case CitiesActions.TOGGLE_SELECTED_CITY: {
      const cities = state.cities.map((city) => {
        if (city.id === action.payload) {
          city.selected = !city.selected;
        }
        return city;
      });
      return {
        ...state,
        cities: cities,
        selectedCities: cities.filter((city) => city.selected),
      };
    }
    case CitiesActions.TOGGLE_DEFAULT_POSITION: {
      const cities = state.cities.map((city) => {
        if (city.id === action.payload) {
          city.isDefault = !city.isDefault;
        }
        return city;
      });
      return {
        ...state,
        cities: cities,
        selectedCities: cities.filter((city) => city.selected),
      };
    }

    default:
      return state;
  }
};

type ActionsType =
  | ReturnType<typeof getCities>
  | ReturnType<typeof toggleSelectedCity>
  | ReturnType<typeof toggleDefaultPosition>;
