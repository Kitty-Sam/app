export enum LoginActions {
  LOGIN_TOGGLE_LOGIN = 'LOGIN/TOGGLE_LOGIN',
}

export const loginToggle: LoginToggleActionType = (payload: boolean) => ({
  type: LoginActions.LOGIN_TOGGLE_LOGIN,
  payload,
});

export type LoginToggleActionType = (payload: boolean) => {
  payload: boolean;
  type: LoginActions.LOGIN_TOGGLE_LOGIN;
};
