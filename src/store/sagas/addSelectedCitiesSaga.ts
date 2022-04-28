import { requestStatus } from '../reducers/appReducer';
import { put, select } from '@redux-saga/core/effects';
import { toggleAppStatus } from '../actions/app';
import { database } from '../../utils/getDataBaseURL';
import { setSelectedCities } from '../actions/cities';
import { DataItemType } from '../../screens/ListCitiesScreen/types';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { getCurrentUser } from '../selectors/loginSelector';

type CitiesTypeFromFirebase = {
  [K: string]: DataItemType;
};

export function* fetchSelectedCitiesWorker() {
  try {
    const { userId } = yield select(getCurrentUser);

    yield put(toggleAppStatus(requestStatus.LOADING));

    const reference: FirebaseDatabaseTypes.Reference = yield database.ref(
      `/users/${userId}/selected`,
    );

    const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once(
      'value',
    );

    if (snapshot.val()) {
      const values: CitiesTypeFromFirebase = snapshot.val();
      const selectedCities: DataItemType[] = Object.values(values);
      yield put(setSelectedCities({ selectedCities }));
    } else {
      const emptyArray: DataItemType[] = [];
      yield put(setSelectedCities({ selectedCities: emptyArray }));
    }
    yield put(toggleAppStatus(requestStatus.SUCCEEDED));
  } catch (error: any) {
    yield put(toggleAppStatus(requestStatus.FAILED));
    console.error(error);
  }
}
