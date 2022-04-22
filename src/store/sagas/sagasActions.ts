export const WEATHER_GET_INFO = 'WEATHER_GET_INFO';
export const GOOGLE_SIGN_IN = 'GOOGLE_SIGN_IN';
export const GOOGLE_SIGN_OUT = 'GOOGLE_SIGN_OUT';
export const FACEBOOK_SIGN_IN = 'FACEBOOK_SIGN_IN';
export const FETCH_USERS = 'FETCH_USERS';
export const MAKE_DEFAULT = 'MAKE_DEFAULT';
export const FETCH_SELECTED_CITIES = 'FETCH_SELECTED_CITIES';

export const weatherGetInfo = (payload: string): WeatherGetInfoType => ({
  type: WEATHER_GET_INFO,
  payload,
});

export type WeatherGetInfoType = {
  payload: string;
  type: typeof WEATHER_GET_INFO;
};

export const googleSignIn = (): GoogleSignInType => ({
  type: GOOGLE_SIGN_IN,
});

export type GoogleSignInType = {
  type: typeof GOOGLE_SIGN_IN;
};

export const facebookSignIn = (): FacebookSignInType => ({
  type: FACEBOOK_SIGN_IN,
});

export type FacebookSignInType = {
  type: typeof FACEBOOK_SIGN_IN;
};

export const googleSignOut = (): GoogleSignOutType => ({
  type: GOOGLE_SIGN_OUT,
});

export type GoogleSignOutType = {
  type: typeof GOOGLE_SIGN_OUT;
};

export const makeDefault = (payload: string): makeDefaultType => ({
  type: MAKE_DEFAULT,
  payload,
});

export type makeDefaultType = {
  payload: string;
  type: typeof MAKE_DEFAULT;
};
