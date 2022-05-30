import { MAKE_DEFAULT } from '../sagasActionTypes/sagasActionsTypes';

export const makeDefaultItemAction = (payload: makeDefaultItemPayload) => ({
  type: MAKE_DEFAULT,
  payload,
});

export type makeDefaultItemPayload = {
  id: string;
};

export type MakeDefaultItemActionType = {
  payload: makeDefaultItemPayload;
  type: typeof MAKE_DEFAULT;
};
