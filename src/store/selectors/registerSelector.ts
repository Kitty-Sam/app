import { AppStoreType } from '../store';

export const selectAuth = (state: AppStoreType) => state.register.isAuth;
export const getUserData = (state: AppStoreType) => state.register.user;
