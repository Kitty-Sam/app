import { AppStoreType } from '../store';

export const selectLoginIn = (state: AppStoreType) => state.login.isLoggedIn;
export const getCurrentUser = (state: AppStoreType) => state.login.currentUser;
export const getCurrentUserId = (state: AppStoreType) =>
  state.login.currentUser.userId;
export const getUsers = (state: AppStoreType) => state.login.users;

export const getUserEmail = (state: AppStoreType) => state.login.user.userEmail;
export const getUserImg = (state: AppStoreType) => state.login.user.userImg;
export const getUserName = (state: AppStoreType) => state.login.user.userName;
