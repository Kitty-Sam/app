import { call, put } from '@redux-saga/core/effects';
import { toggleAppError, toggleAppStatus } from '../actions/app';
import { requestStatus } from '../reducers/appReducer';
import { defaultWeatherSave } from '../actions/weather';
import { DefaultWeatherGetInfoActionType } from './sagasActions/defaultWeatherGetInfo';

export function* getDefaultWeatherWorker({
  payload,
}: DefaultWeatherGetInfoActionType) {
  try {
    yield put(toggleAppStatus(requestStatus.LOADING));
    yield put(toggleAppError(false));

    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${payload.city}&lang=ru&units=metric&appid=ef8dbe91097853f46a4f5c2d9130a67d`;
    const response = yield call(fetch, weatherURL);
    const responseForRender = yield response.json();

    yield put(defaultWeatherSave(responseForRender));
    yield put(toggleAppStatus(requestStatus.IDLE));
  } catch (error) {
    yield put(toggleAppStatus(requestStatus.FAILED));
    yield put(toggleAppError(true));
    console.error(error);
  }
}
