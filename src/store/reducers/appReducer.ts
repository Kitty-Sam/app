import { toggleAppStatusAC } from '../actions/app';

export const APP_SET_STATUS = 'APP/SET_STATUS';

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
    case APP_SET_STATUS:
      return { ...state, status: action.status };

    default:
      return state;
  }
};

type ActionsType = ReturnType<typeof toggleAppStatusAC>;
