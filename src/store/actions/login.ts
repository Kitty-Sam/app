import { UserType } from '../reducers/loginReducer';

export enum LoginActions {
  LOGIN_TOGGLE_LOGIN = 'LOGIN/TOGGLE_LOGIN',
  SAVE_USERS = 'LOGIN/SAVE_USERS',
}

export const loginToggle: LoginToggleActionType = (payload: boolean) => ({
  type: LoginActions.LOGIN_TOGGLE_LOGIN,
  payload,
});

export type LoginToggleActionType = (payload: boolean) => {
  payload: boolean;
  type: LoginActions.LOGIN_TOGGLE_LOGIN;
};

export const saveUsers: saveUserActionType = (payload: UserType[]) => ({
  type: LoginActions.SAVE_USERS,
  payload,
});

export type saveUserActionType = (payload: UserType[]) => {
  payload: UserType[];
  type: LoginActions.SAVE_USERS;
};
