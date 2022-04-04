import { LOGIN_TOGGLE_LOGIN } from '../reducers/loginReducer';

export const loginToggleAC = (isLoggedIn: boolean) => ({
  type: LOGIN_TOGGLE_LOGIN,
  isLoggedIn,
});
