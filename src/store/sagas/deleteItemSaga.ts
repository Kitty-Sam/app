import { put, select } from '@redux-saga/core/effects';
import { toggleSelectedCity } from '../actions/cities';
import { database } from '../../utils/getDataBaseURL';
import { Alert } from 'react-native';
import { deleteItemType } from './sagasActions';
import { getCurrentUser } from '../selectors/loginSelector';

export function* deleteItemWorker({ payload }: deleteItemType) {
  const { userId } = yield select(getCurrentUser);
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
