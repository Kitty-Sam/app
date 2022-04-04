import { authToggleAC, setUserDataAC } from '../actions/register';

export const REGISTER_AUTH = 'REGISTER/AUTH';
export const REGISTER_SET_USER_DATA = 'REGISTER/SET_USER_DATA';

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
    case REGISTER_AUTH:
      return { ...state, isAuth: action.isAuth };

    case REGISTER_SET_USER_DATA:
      return { ...state, user: action.user };

    default:
      return state;
  }
};

type ActionsType =
  | ReturnType<typeof authToggleAC>
  | ReturnType<typeof setUserDataAC>;
