import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { loginToggle, setCurrentUser } from '../actions/login';
import { toggleAppStatus } from '../actions/app';
import { requestStatus } from '../reducers/appReducer';
import { Alert } from 'react-native';
import { call, put } from '@redux-saga/core/effects';
import { database } from '../../utils/getDataBaseURL';
import { UserCredential } from '@firebase/auth';
import { ShapshotType } from './addUsersSaga';
import { fetchSelectedCitiesWorker } from './addSelectedCitiesSaga';

export function* googleSignInWorker() {
  try {
    yield GoogleSignin.hasPlayServices();
    const { idToken } = yield GoogleSignin.signIn();
    const credential = auth.GoogleAuthProvider.credential(idToken);
    const userCred: UserCredential = yield auth().signInWithCredential(
      credential,
    );

    const {
      uid: userId,
      displayName: userName,
      email: userEmail,
    } = userCred.user;

    yield put(loginToggle(true));
    yield put(toggleAppStatus(requestStatus.SUCCEEDED));
    yield put(setCurrentUser({ userId, userEmail, userName }));

    const snapshot: ShapshotType = yield database.ref('/users/').once('value');
    const users = Object.values(snapshot.val());
    const USER = users.find((user) => user.userId === userId);

    yield call(() => fetchSelectedCitiesWorker());

    if (!USER) {
      yield database
        .ref('/users/')
        .child(`${userId}`)
        .set({ userId, userEmail, userName });
      Alert.alert('Welcome!', `${userName}`);
    }
  } catch (error: any) {
    yield put(loginToggle(false));
    Alert.alert('Something goes wrong!', `${error.message}`);
  }
}
