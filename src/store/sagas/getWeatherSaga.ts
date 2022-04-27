import { WeatherGetInfoType } from './sagasActions';
import { call, put } from '@redux-saga/core/effects';
import { toggleAppError, toggleAppStatus } from '../actions/app';
import { requestStatus } from '../reducers/appReducer';
import { addCity } from '../actions/cities';
import { weatherSave } from '../actions/weather';

export function* getWeatherWorker({ payload }: WeatherGetInfoType) {
  try {
    yield put(toggleAppStatus(requestStatus.LOADING));
    yield put(toggleAppError(false));

    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${payload}&lang=ru&units=metric&appid=ef8dbe91097853f46a4f5c2d9130a67d`;
    const response = yield call(fetch, weatherURL);
    const responseForRender = yield response.json();

    if (responseForRender.cod === '404') {
      yield put(toggleAppError(true));
      yield put(toggleAppStatus(requestStatus.FAILED));
    } else {
      yield put(weatherSave(responseForRender));
      yield put(addCity(payload));
      yield put(toggleAppStatus(requestStatus.IDLE));
    }
  } catch (error) {
    yield put(toggleAppStatus(requestStatus.FAILED));
    yield put(toggleAppError(true));
    console.error(error);
  }
}
