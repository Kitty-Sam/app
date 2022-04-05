import { UserType } from '../reducers/registerReducer';

export enum RegisterActions {
  REGISTER_AUTH = 'REGISTER/AUTH',
  REGISTER_SAVE_USER_DATA = 'REGISTER/SAVE_USER_DATA',
}

export const authToggle: AuthActionType = (payload: boolean) => ({
  type: RegisterActions.REGISTER_AUTH,
  payload,
});

export type AuthActionType = (payload: boolean) => {
  payload: boolean;
  type: RegisterActions.REGISTER_AUTH;
};

export const saveUserData: SaveUserActionType = (payload: UserType) => ({
  type: RegisterActions.REGISTER_SAVE_USER_DATA,
  payload,
});
export type SaveUserActionType = (payload: UserType) => {
  payload: UserType;
  type: RegisterActions.REGISTER_SAVE_USER_DATA;
};
