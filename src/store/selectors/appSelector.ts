import { AppStoreType } from '../store';

export const selectStatusApp = (state: AppStoreType) => state.app.status;
