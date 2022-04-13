import { RequestStatusType } from '../reducers/appReducer';

export enum AppActions {
  APP_SET_ERROR = 'APP_SET_ERROR',
  APP_SET_STATUS = 'APP/SET_STATUS',
}

export const toggleAppStatus: AppStatusToggleActionType = (
  payload: RequestStatusType,
) => ({
  type: AppActions.APP_SET_STATUS,
  payload,
});
export type AppStatusToggleActionType = (payload: RequestStatusType) => {
  payload: RequestStatusType;
  type: AppActions.APP_SET_STATUS;
};

export const toggleAppError: AppErrorToggleActionType = (payload: boolean) => ({
  type: AppActions.APP_SET_ERROR,
  payload,
});
export type AppErrorToggleActionType = (payload: boolean) => {
  payload: boolean;
  type: AppActions.APP_SET_ERROR;
};
