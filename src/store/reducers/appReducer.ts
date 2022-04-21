import { AppActions, toggleAppError, toggleAppStatus } from '../actions/app';

export enum requestStatus {
  FAILED = 'FAILED',
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCEEDED = 'SUCCEEDED',
}

const initialState = {
  status: requestStatus.IDLE,
  error: false,
};

type initialStateType = {
  error: boolean;
  status: RequestStatusType;
};

export type RequestStatusType = requestStatus;

export const appReducer = (
  state: initialStateType = initialState,
  action: ActionsType,
): initialStateType => {
  switch (action.type) {
    case AppActions.APP_SET_STATUS:
      return { ...state, status: action.payload };

    case AppActions.APP_SET_ERROR: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};

type ActionsType =
  | ReturnType<typeof toggleAppStatus>
  | ReturnType<typeof toggleAppError>;
