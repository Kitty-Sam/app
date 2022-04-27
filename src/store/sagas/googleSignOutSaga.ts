import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { loginToggle } from '../actions/login';
import { Alert } from 'react-native';
import { put } from '@redux-saga/core/effects';
import auth from '@react-native-firebase/auth';
import { toggleAppStatus } from '../actions/app';
import { requestStatus } from '../reducers/appReducer';
import { DataItemType } from '../../screens/ListCitiesScreen/types';
import { setSelectedCities } from '../actions/cities';

export function* signOutWorker() {
  try {
    yield put(toggleAppStatus(requestStatus.LOADING));

    yield GoogleSignin.signOut();
    yield auth().signOut();

    yield put(loginToggle(false));
    yield put(toggleAppStatus(requestStatus.SUCCEEDED));

    const emptyArray: DataItemType[] = [];
    yield put(setSelectedCities({ selectedCities: emptyArray }));
  } catch (error: any) {
    yield put(toggleAppStatus(requestStatus.FAILED));
    Alert.alert('Something goes wrong!', `${error.message}`);
  }
}
