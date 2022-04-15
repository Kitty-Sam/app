export const WEATHER_GET_INFO = 'WEATHER_GET_INFO';
export const GOOGLE_SIGN_IN = 'GOOGLE_SIGN_IN';
export const FACEBOOK_SIGN_IN = 'FACEBOOK_SIGN_IN';
export const FETCH_USERS = 'FETCH_USERS';

export const weatherGetInfo = (payload: string): WeatherGetInfoType => ({
  type: WEATHER_GET_INFO,
  payload,
});

export type WeatherGetInfoType = {
  payload: string;
  type: typeof WEATHER_GET_INFO;
};

export const googleSignIn = (): googleSignInType => ({
  type: GOOGLE_SIGN_IN,
});

export type googleSignInType = {
  type: typeof GOOGLE_SIGN_IN;
};

export const facebookSignIn = (): facebookSignInType => ({
  type: FACEBOOK_SIGN_IN,
});

export type facebookSignInType = {
  type: typeof FACEBOOK_SIGN_IN;
};

export const fetchUsers = (): fetchUsersType => ({
  type: FETCH_USERS,
});

export type fetchUsersType = {
  type: typeof FETCH_USERS;
};
