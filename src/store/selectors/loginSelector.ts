import { AppStoreType } from '../store';

export const selectLoginIn = (state: AppStoreType) => state.login.isLoggedIn;
