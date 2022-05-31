import { FACEBOOK_SIGN_IN } from '../sagasActionTypes/sagasActionsTypes';

export const facebookSignInAction = () => ({
  type: FACEBOOK_SIGN_IN,
});

export type FacebookSignInActionType = {
  type: typeof FACEBOOK_SIGN_IN;
};
