import { LoginActions, loginToggle, saveUsers } from '../actions/login';

export type UserType = {
  name?: string;
  password?: string;
};

export type initialStateType = {
  isLoggedIn: boolean;
  users: UserType[];
};

const initialState = {
  isLoggedIn: false,
  users: [],
};

export const loginReducer = (
  state: initialStateType = initialState,
  action: ActionsType,
): initialStateType => {
  switch (action.type) {
    case LoginActions.LOGIN_TOGGLE_LOGIN:
      return { ...state, isLoggedIn: action.payload };

    case LoginActions.SAVE_USERS:
      return { ...state, users: [...state.users, ...action.payload] };

    default:
      return state;
  }
};

type ActionsType =
  | ReturnType<typeof loginToggle>
  | ReturnType<typeof saveUsers>;
