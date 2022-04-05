import { AppActions, toggleAppStatus } from '../actions/app';

export enum requestStatus {
  FAILED = 'FAILED',
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCEEDED = 'SUCCEEDED',
}

const initialState = {
  status: requestStatus.IDLE,
};

type initialStateType = {
  status: RequestStatusType;
};

export type RequestStatusType = requestStatus;

export const appReducer = (
  state: initialStateType = initialState,
  action: ActionsType,
) => {
  switch (action.type) {
    case AppActions.APP_SET_STATUS:
      return { ...state, status: action.payload };

    default:
      return state;
  }
};

type ActionsType = ReturnType<typeof toggleAppStatus>;
