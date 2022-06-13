import { FETCH_USER_INFO } from '../sagasActionTypes/sagasActionsTypes';

export const fetchUserInfoAction = () => ({
  type: FETCH_USER_INFO,
});

export type fetchUserInfoActionType = {
  type: typeof FETCH_USER_INFO;
};
