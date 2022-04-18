import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { loginToggle, setCurrentUser } from '../actions/login';
import { toggleAppStatus } from '../actions/app';
import { requestStatus } from '../reducers/appReducer';
import { Alert } from 'react-native';
import { put } from '@redux-saga/core/effects';
import { database } from '../../utils/getDataBaseURL';
import { UserCredential } from '@firebase/auth';

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
    yield database
      .ref('/users/')
      .child(`${userId}`)
      .set({ userId, userEmail, userName });
    yield put(setCurrentUser({ userId, userEmail, userName }));
    Alert.alert('Welcome!', `${userName}`);
  } catch (error: any) {
    yield put(loginToggle(false));
    Alert.alert('Something goes wrong!', `${error.message}`);
  }
}
