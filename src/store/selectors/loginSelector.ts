import { AppStoreType } from '../store';

export const selectLoginIn = (state: AppStoreType) => state.login.isLoggedIn;
export const getUsers = (state: AppStoreType) => state.login.users;
