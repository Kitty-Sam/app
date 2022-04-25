import { takeEvery, takeLatest } from '@redux-saga/core/effects';
import {
  DELETE_ITEM,
  FACEBOOK_SIGN_IN,
  FETCH_SELECTED_CITIES,
  FETCH_USERS,
  GOOGLE_SIGN_IN,
  GOOGLE_SIGN_OUT,
  MAKE_DEFAULT,
  WEATHER_GET_INFO,
} from './sagasActions';
import { getWeatherWorker } from './getWeatherSaga';
import { googleSignInWorker } from './googleSignInSaga';
import { facebookSignInWorker } from './facebookSignInSaga';
import { signOutWorker } from './googleSignOutSaga';
import { makeDefaultWorker } from './makeDefaultSaga';
import { fetchSelectedCitiesWorker } from './addSelectedCitiesSaga';
import { deleteItemWorker } from './deleteItemSaga';
import { fetchUsersWorker } from './addUsersSaga';

export function* watchClickSaga() {
  yield takeEvery(WEATHER_GET_INFO, getWeatherWorker);
  yield takeLatest(GOOGLE_SIGN_IN, googleSignInWorker);
  yield takeLatest(FACEBOOK_SIGN_IN, facebookSignInWorker);
  yield takeLatest(MAKE_DEFAULT, makeDefaultWorker);
  yield takeEvery(FETCH_SELECTED_CITIES, fetchSelectedCitiesWorker);
  yield takeLatest(GOOGLE_SIGN_OUT, signOutWorker);
  yield takeLatest(DELETE_ITEM, deleteItemWorker);
  yield takeLatest(FETCH_USERS, fetchUsersWorker);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
