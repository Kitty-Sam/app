import {
  LoginActions,
  loginToggle,
  saveUsers,
  setCurrentUser,
} from '../actions/login';

export type UserType = {
  isDefault?: string;
  selected?: string[];
  userEmail?: string;
  userId: string;
  userName: string;
};

export type initialStateType = {
  currentUser: {
    userEmail?: string;
    userId: string;
    userName: string;
  };
  isLoggedIn: boolean;
  users: UserType[];
};

const initialState = {
  isLoggedIn: false,
  users: [] as UserType[],
  currentUser: {} as UserType,
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

    case LoginActions.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
};

type ActionsType =
  | ReturnType<typeof loginToggle>
  | ReturnType<typeof saveUsers>
  | ReturnType<typeof setCurrentUser>;
