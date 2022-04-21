import { AppStoreType } from '../store';

export const selectLoginIn = (state: AppStoreType) => state.login.isLoggedIn;
export const getCurrentUser = (state: AppStoreType) => state.login.currentUser;
