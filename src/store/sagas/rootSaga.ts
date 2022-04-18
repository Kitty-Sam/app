import { takeLatest, takeEvery } from '@redux-saga/core/effects';
import {
  FETCH_USERS,
  FACEBOOK_SIGN_IN,
  GOOGLE_SIGN_IN,
  WEATHER_GET_INFO,
  GOOGLE_SIGN_OUT,
} from './sagasActions';
import { getWeatherWorker } from './getWeatherSaga';
import { googleSignInWorker } from './googleSignInSaga';
import { facebookSignInWorker } from './facebookSignInSaga';
import { fetchUsersWorker } from './addUsersSaga';
import { signOutWorker } from './googleSignOutSaga';

export function* watchClickSaga() {
  yield takeEvery(WEATHER_GET_INFO, getWeatherWorker);
  yield takeLatest(GOOGLE_SIGN_IN, googleSignInWorker);
  yield takeLatest(FACEBOOK_SIGN_IN, facebookSignInWorker);
  yield takeEvery(FETCH_USERS, fetchUsersWorker);
  yield takeLatest(GOOGLE_SIGN_OUT, signOutWorker);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
