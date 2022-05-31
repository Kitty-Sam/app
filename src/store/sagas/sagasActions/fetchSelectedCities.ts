import { FETCH_SELECTED_CITIES } from '../sagasActionTypes/sagasActionsTypes';

export const fetchSelectedCitiesAction = () => ({
  type: FETCH_SELECTED_CITIES,
});

export type FetchSelectedCitiesActionType = {
  type: typeof FETCH_SELECTED_CITIES;
};
