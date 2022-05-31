import { DELETE_ITEM } from '../sagasActionTypes/sagasActionsTypes';

export const deleteItemAction = (payload: deleteItemPayload) => ({
  type: DELETE_ITEM,
  payload,
});

export type deleteItemPayload = {
  id: string;
  title?: string;
};

export type DeleteItemActionType = {
  payload: deleteItemPayload;
  type: typeof DELETE_ITEM;
};
