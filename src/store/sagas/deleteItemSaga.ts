import { put, select } from '@redux-saga/core/effects';
import { AppStoreType } from '../store';
import { toggleSelectedCity } from '../actions/cities';
import { database } from '../../utils/getDataBaseURL';
import { Alert } from 'react-native';
import { deleteItemType } from './sagasActions';

export function* deleteItemWorker({ payload }: deleteItemType) {
  const current_user = (state: AppStoreType) => state.login.currentUser;
  const { userId } = yield select(current_user);
  try {
    yield put(toggleSelectedCity(payload.id));
    yield database
      .ref(`/users/${userId}/selected`)
      .child(`${payload.title}`)
      .remove();
  } catch (error: any) {
    Alert.alert('Something goes wrong!', `${error.message}`);
  }
}
