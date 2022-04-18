import { UserType } from '../reducers/loginReducer';

export enum LoginActions {
  LOGIN_TOGGLE_LOGIN = 'LOGIN_TOGGLE_LOGIN',
  SAVE_USERS = 'LOGIN_SAVE_USERS',
  SET_CURRENT_USER = 'SET_CURRENT_USER',
}

export const loginToggle: LoginToggleActionType = (payload: boolean) => ({
  type: LoginActions.LOGIN_TOGGLE_LOGIN,
  payload,
});

export type LoginToggleActionType = (payload: boolean) => {
  payload: boolean;
  type: LoginActions.LOGIN_TOGGLE_LOGIN;
};

export const saveUsers: saveUsersActionType = (payload: UserType[]) => ({
  type: LoginActions.SAVE_USERS,
  payload,
});

export type saveUsersActionType = (payload: UserType[]) => {
  payload: UserType[];
  type: LoginActions.SAVE_USERS;
};

export const setCurrentUser: setCurrentUserActionType = (
  payload: UserType,
) => ({
  type: LoginActions.SET_CURRENT_USER,
  payload,
});

export type setCurrentUserActionType = (payload: UserType) => {
  payload: UserType;
  type: LoginActions.SET_CURRENT_USER;
};
