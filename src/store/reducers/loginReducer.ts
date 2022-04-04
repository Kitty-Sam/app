import { loginToggleAC } from '../actions/login';

const initialState = {
  isLoggedIn: false,
};

export const LOGIN_TOGGLE_LOGIN = 'LOGIN/TOGGLE_LOGIN';

export const loginReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case LOGIN_TOGGLE_LOGIN:
      return { ...state, isLoggedIn: action.isLoggedIn };

    default:
      return state;
  }
};

type ActionsType = ReturnType<typeof loginToggleAC>;
