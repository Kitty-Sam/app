import { AppStoreType } from '../store';

export const selectStatusApp = (state: AppStoreType) => state.app.status;
export const getError = (state: AppStoreType) => state.app.error;
