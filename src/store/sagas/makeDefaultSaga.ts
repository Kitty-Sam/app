import { Alert } from 'react-native';
import { put, select } from '@redux-saga/core/effects';
import { database } from '../../utils/getDataBaseURL';
import { toggleDefaultPosition } from '../actions/cities';
import { AppStoreType } from '../store';
import { makeDefaultType } from './sagasActions';

export function* makeDefaultWorker({ payload }: makeDefaultType) {
  const current_user = (state: AppStoreType) => state.login.currentUser;
  const { userId } = yield select(current_user);
  try {
    yield database.ref(`/users/${userId}`).update({
      default: payload,
    });
    yield database.ref(`/users/${userId}/selected/${payload}`).update({
      city: payload,
      id: payload,
      isDefault: true,
      selected: true,
    });

    yield put(toggleDefaultPosition(payload));
  } catch (error: any) {
    Alert.alert('Something goes wrong!');
  }
}
