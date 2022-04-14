import { takeLatest } from '@redux-saga/core/effects';
import {
  FETCH_USERS,
  FACEBOOK_SIGN_IN,
  GOOGLE_SIGN_IN,
  WEATHER_GET_INFO,
} from './sagasActions';
import { getWeatherWorker } from './getWeatherSaga';
import { googleSignInWorker } from './googleSignInSaga';
import { facebookSignInWorker } from './facebookSignInSaga';
import { fetchUsersWorker } from './addUsersSaga';

export function* watchClickSaga() {
  yield takeLatest(WEATHER_GET_INFO, getWeatherWorker);
  yield takeLatest(GOOGLE_SIGN_IN, googleSignInWorker);
  yield takeLatest(FACEBOOK_SIGN_IN, facebookSignInWorker);
  yield takeLatest(FETCH_USERS, fetchUsersWorker);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
