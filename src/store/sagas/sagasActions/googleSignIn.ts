import { GOOGLE_SIGN_IN } from '../sagasActionTypes/sagasActionsTypes';

export const googleSignInAction = () => ({
  type: GOOGLE_SIGN_IN,
});

export type GoogleSignInType = {
  type: typeof GOOGLE_SIGN_IN;
};
