import { FETCH_USERS } from '../sagasActionTypes/sagasActionsTypes';

export const fetchUsersAction = () => ({
  type: FETCH_USERS,
});

export type FetchUsersActionType = {
  type: typeof FETCH_USERS;
};
