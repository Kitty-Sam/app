import {
  addCity,
  CitiesActions,
  getCities,
  toggleDefaultPosition,
  toggleSelectedCity,
} from '../actions/cities';
import { DataItemType } from '../../screens/ListCitiesScreen/types';

export type initialStateType = {
  cities: DataItemType[];
  selectedCities: DataItemType[];
};

const initialState: initialStateType = {
  cities: [{ id: 'Minsk', city: 'Minsk', selected: true, isDefault: true }],
  //favoriteCities
  selectedCities: [
    { id: 'Minsk', city: 'Minsk', selected: true, isDefault: true },
  ],
};

export const cityReducer = (
  state = initialState,
  action: ActionsType,
): initialStateType => {
  switch (action.type) {
    case CitiesActions.GET_CITIES:
      return {
        ...state,
      };
    case CitiesActions.ADD_CITY: {
      const hasCity = state.cities.find((city) => city.id === action.payload);

      if (!hasCity) {
        const newCity: DataItemType = {
          id: action.payload,
          city: action.payload,
          isDefault: false,
          selected: false,
        };

        return {
          ...state,
          cities: [newCity, ...state.cities],
          selectedCities: state.cities.filter((city) => city.selected),
        };
      } else {
        return state;
      }
    }

    case CitiesActions.TOGGLE_SELECTED_CITY: {
      return {
        ...state,
        cities: state.cities.map((city) => {
          if (action.payload === city.city) {
            return { ...city, selected: !city.selected };
          } else {
            return city;
          }
        }),
        selectedCities: state.cities.filter((city) => city.selected),
      };
    }
    case CitiesActions.TOGGLE_DEFAULT_POSITION: {
      const cities = state.cities.map((city) => {
        if (city.city === action.payload) {
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
  | ReturnType<typeof toggleDefaultPosition>
  | ReturnType<typeof addCity>;
