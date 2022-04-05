import { LoginActions, loginToggle } from '../actions/login';

const initialState = {
  isLoggedIn: false,
};

export const loginReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case LoginActions.LOGIN_TOGGLE_LOGIN:
      return { ...state, isLoggedIn: action.payload };

    default:
      return state;
  }
};

type ActionsType = ReturnType<typeof loginToggle>;
