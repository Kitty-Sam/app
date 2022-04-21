import { requestStatus } from '../reducers/appReducer';
import { put } from '@redux-saga/core/effects';
import { toggleAppStatus } from '../actions/app';
import { saveUsers } from '../actions/login';
import { Alert } from 'react-native';
import { database } from '../../utils/getDataBaseURL';
import { UserType } from '../reducers/loginReducer';

export type ShapshotType = {
  [K: string]: UserType;
};

export function* fetchUsersWorker() {
  try {
    yield put(toggleAppStatus(requestStatus.LOADING));
    const snapshot: ShapshotType = yield database.ref('/users/').once('value');
    const users: UserType[] = Object.values(snapshot);
    yield put(saveUsers(users));
    yield put(toggleAppStatus(requestStatus.SUCCEEDED));
  } catch (error: any) {
    yield put(toggleAppStatus(requestStatus.FAILED));
    Alert.alert(`${error.message}`);
    console.error(error);
  }
}
