import { UserType } from '../reducers/registerReducer';

export enum RegisterActions {
  REGISTER_AUTH = 'REGISTER/AUTH',
  REGISTER_SET_USER_DATA = 'REGISTER/SET_USER_DATA',
}

export const authToggleAC: AuthActionType = (isAuth) => ({
  type: RegisterActions.REGISTER_AUTH,
  isAuth,
});

export type AuthActionType = (isAuth: boolean) => {
  isAuth: boolean;
  type: RegisterActions.REGISTER_AUTH;
};

export const setUserDataAC: SetUserActionType = (user) => ({
  type: RegisterActions.REGISTER_SET_USER_DATA,
  user,
});
export type SetUserActionType = (user: UserType) => {
  type: RegisterActions.REGISTER_SET_USER_DATA;
  user: UserType;
};
