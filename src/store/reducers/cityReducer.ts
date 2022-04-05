import { getCities, toggleSelectedCity } from '../actions/cities';
import { DataItemType } from '../../screens/ListCitiesScreen/types';

export const TOGGLE_SELECTED_CITY = 'TOGGLE_SELECTED_CITY';
export const GET_CITIES = 'GET_CITIES';

export type initialStateType = {
  cities: DataItemType[];
  selectedCities?: DataItemType[];
};
const initialState: initialStateType = {
  cities: [
    { id: 1, city: 'Minsk', selected: false },
    { id: 2, city: 'Moscow', selected: false },
    { id: 3, city: 'Kiev', selected: false },
    { id: 4, city: 'Riga', selected: false },
    { id: 5, city: 'Orsha', selected: false },
    { id: 6, city: 'Brest', selected: false },
    { id: 7, city: 'Grodno', selected: false },
    { id: 8, city: 'Bereza', selected: false },
    { id: 9, city: 'Mogilev', selected: false },
    { id: 10, city: 'Vitebsk', selected: false },
  ],
  selectedCities: [],
};

export const cityReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case GET_CITIES:
      return {
        ...state,
      };

    case TOGGLE_SELECTED_CITY: {
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

    default:
      return state;
  }
};

type ActionsType =
  | ReturnType<typeof getCities>
  | ReturnType<typeof toggleSelectedCity>;
