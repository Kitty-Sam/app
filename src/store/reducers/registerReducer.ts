type UserType = {
  email: string;
  password: string;
};

type InitialStateType = {
  isAuth: boolean;
  user: UserType;
};

const initialState = {
  isAuth: false,
  user: {} as UserType,
};

export const registerReducer = (
  state: InitialStateType = initialState,
  action: ActionsType,
) => {
  switch (action.type) {
    case 'REGISTER/AUTH':
      return { ...state, isAuth: action.isAuth };

    case 'REGISTER/SET_USER_DATA':
      return { ...state, user: action.user };

    default:
      return state;
  }
};

export const authToggleAC = (isAuth: boolean) =>
  ({ type: 'REGISTER/AUTH', isAuth } as const);

export const setUserDataAC = (user: UserType) =>
  ({ type: 'REGISTER/SET_USER_DATA', user } as const);

type ActionsType =
  | ReturnType<typeof authToggleAC>
  | ReturnType<typeof setUserDataAC>;
