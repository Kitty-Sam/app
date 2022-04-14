import { LoginActions, loginToggle, saveUsers } from '../actions/login';

export type UserType = {
  name?: string;
  password?: string;
};

const initialState = {
  isLoggedIn: false,
  users: [] as UserType[],
};

export const loginReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case LoginActions.LOGIN_TOGGLE_LOGIN:
      return { ...state, isLoggedIn: action.payload };

    case LoginActions.SAVE_USERS:
      return { ...state, users: [...action.payload] };

    default:
      return state;
  }
};

type ActionsType =
  | ReturnType<typeof loginToggle>
  | ReturnType<typeof saveUsers>;
