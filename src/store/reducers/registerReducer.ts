import { authToggle, RegisterActions, saveUserData } from '../actions/register';

export type UserType = {
  email: string;
  fullName?: string;
  password: string;
};

type InitialStateType = {
  isAuth: boolean;
  user: UserType;
};

const initialState = {
  isAuth: false,
  user: {
    email: '',
    password: '',
  },
};

export const registerReducer = (
  state: InitialStateType = initialState,
  action: ActionsType,
) => {
  switch (action.type) {
    case RegisterActions.REGISTER_AUTH:
      return { ...state, isAuth: action.payload };

    case RegisterActions.REGISTER_SAVE_USER_DATA:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

type ActionsType =
  | ReturnType<typeof authToggle>
  | ReturnType<typeof saveUserData>;
