import { requestStatus } from '../reducers/appReducer';
import { put } from '@redux-saga/core/effects';
import { toggleAppStatus } from '../actions/app';
import { saveUsers } from '../actions/login';
import { Alert } from 'react-native';
import { database } from '../../utils/getDataBaseURL';

export function* fetchUsersWorker() {
  try {
    yield put(toggleAppStatus(requestStatus.LOADING));
    yield database
      .ref('/users/')
      .once('value')
      .then((snapshot) => {
        const users = snapshot.val();
        put(saveUsers([users]));
      });
    yield put(toggleAppStatus(requestStatus.SUCCEEDED));
  } catch (e: any) {
    yield put(toggleAppStatus(requestStatus.FAILED));
    Alert.alert(`${e.message}`);
    console.warn(e);
  }
}
