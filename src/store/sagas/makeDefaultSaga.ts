import { Alert } from 'react-native';
import { put, select } from '@redux-saga/core/effects';
import { database } from '../../utils/getDataBaseURL';
import { toggleDefaultPosition } from '../actions/cities';
import { AppStoreType } from '../store';
import { makeDefaultType } from './sagasActions';
import { DataItemType } from '../../screens/ListCitiesScreen/types';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { toggleAppStatus } from '../actions/app';
import { requestStatus } from '../reducers/appReducer';
import { getCurrentUser } from '../selectors/loginSelector';

export function* makeDefaultWorker({ payload }: makeDefaultType) {
  put(toggleAppStatus(requestStatus.LOADING));
  const { userId } = yield select(getCurrentUser);

  try {
    const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield database
      .ref(`/users/${userId}/selected`)
      .once('value');

    if (snapshot.val()) {
      const cities: DataItemType[] = Object.values(snapshot.val());
      cities.forEach((city: DataItemType) =>
        database.ref(`/users/${userId}/selected/${city.city}`).update({
          city: city.city,
          id: city.city,
          isDefault: false,
          selected: true,
        }),
      );
    }

    yield database.ref(`/users/${userId}`).update({
      default: payload,
    });

    yield database.ref(`/users/${userId}/selected/${payload}`).update({
      city: payload,
      id: payload,
      isDefault: true,
      selected: true,
    });

    yield put(toggleAppStatus(requestStatus.SUCCEEDED));
    yield put(toggleDefaultPosition(payload));
  } catch (error: any) {
    yield put(toggleAppStatus(requestStatus.FAILED));
    Alert.alert('Something goes wrong!');
  }
}
