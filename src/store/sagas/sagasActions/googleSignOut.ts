import { GOOGLE_SIGN_OUT } from '../sagasActionTypes/sagasActionsTypes';

export const googleSignOutAction = () => ({
  type: GOOGLE_SIGN_OUT,
});

export type GoogleSignOutType = {
  type: typeof GOOGLE_SIGN_OUT;
};
