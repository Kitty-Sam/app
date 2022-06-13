import { requestStatus } from '../reducers/appReducer';
import { put, select } from '@redux-saga/core/effects';
import { toggleAppStatus } from '../actions/app';
import { getCurrentUser } from '../selectors/loginSelector';
import { database } from '../../utils/getDataBaseURL';
import { setUserInfo } from '../actions/login';

export type ShapshotType = {
  [K: string]: any;
};

export function* fetchUserInfoWorker() {
  try {
    const { userId } = yield select(getCurrentUser);

    yield put(toggleAppStatus(requestStatus.LOADING));

    const snapshotName: ShapshotType = yield database
      .ref(`/users/${userId}/userName/`)
      .once('value');
    const userName: string = yield snapshotName.val();

    const snapshotEmail: ShapshotType = yield database
      .ref(`/users/${userId}/userEmail/`)
      .once('value');
    const userEmail: string = yield snapshotEmail.val();

    const snapshotImg: ShapshotType = yield database
      .ref(`/users/${userId}/photoURL/`)
      .once('value');
    const userImg: string = yield snapshotImg.val();

    yield put(setUserInfo({ userName, userEmail, userImg }));

    yield put(toggleAppStatus(requestStatus.SUCCEEDED));
  } catch (error: any) {
    yield put(toggleAppStatus(requestStatus.FAILED));
    console.error(error);
  }
}
