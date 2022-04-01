const initialState = {
  isLoggedIn: false,
};

export const loginReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'LOGIN/TOGGLE_LOGIN':
      return { ...state, isLoggedIn: action.isLoggedIn };

    default:
      return state;
  }
};

export const loginToggleAC = (isLoggedIn: boolean) =>
  ({ type: 'LOGIN/TOGGLE_LOGIN', isLoggedIn } as const);

type ActionsType = ReturnType<typeof loginToggleAC>;
