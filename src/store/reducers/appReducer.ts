export enum requestStatus {
  failed = 'failed',
  idle = 'idle',
  loading = 'loading',
  succeeded = 'succeeded',
}

const initialState = {
  status: requestStatus.idle,
};

type initialStateType = {
  status: RequestStatusType;
};

export type RequestStatusType =
  | requestStatus.idle
  | requestStatus.loading
  | requestStatus.succeeded
  | requestStatus.failed;

export const appReducer = (
  state: initialStateType = initialState,
  action: ActionsType,
) => {
  switch (action.type) {
    case 'APP/SET_STATUS':
      return { ...state, status: action.status };

    default:
      return state;
  }
};

export const toggleAppStatusAC = (status: RequestStatusType) =>
  ({ type: 'APP/SET_STATUS', status } as const);

type ActionsType = ReturnType<typeof toggleAppStatusAC>;
