import { call, put } from '@redux-saga/core/effects';
import { toggleAppError, toggleAppStatus } from '../actions/app';
import { requestStatus } from '../reducers/appReducer';
import { addCity } from '../actions/cities';
import { weatherSave } from '../actions/weather';
import { WeatherGetInfoActionType } from './sagasActions/weatherGetInfo';

export function* getWeatherWorker({ payload }: WeatherGetInfoActionType) {
  try {
    const { nav, search } = payload;
    yield put(toggleAppStatus(requestStatus.LOADING));
    yield put(toggleAppError(false));

    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=ru&units=metric&appid=ef8dbe91097853f46a4f5c2d9130a67d`;
    const response = yield call(fetch, weatherURL);
    const responseForRender = yield response.json();

    if (responseForRender.cod === '404') {
      yield put(toggleAppError(true));
      yield put(toggleAppStatus(requestStatus.FAILED));
      if (nav) {
        yield nav();
      }
    } else {
      yield put(weatherSave(responseForRender));
      yield put(addCity(search));
      yield put(toggleAppStatus(requestStatus.SUCCEEDED));
      if (nav) {
        yield nav();
      }
    }
  } catch (error) {
    yield put(toggleAppStatus(requestStatus.FAILED));
    yield put(toggleAppError(true));
    console.error(error);
  }
}
