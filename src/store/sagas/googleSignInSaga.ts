import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { loginToggle } from '../actions/login';
import { toggleAppStatus } from '../actions/app';
import { requestStatus } from '../reducers/appReducer';
import { Alert } from 'react-native';
import { put } from '@redux-saga/core/effects';
import { database } from '../../utils/getDataBaseURL';

export function* googleSignInWorker() {
  try {
    yield GoogleSignin.hasPlayServices();
    const { idToken } = yield GoogleSignin.signIn();
    const credential = auth.GoogleAuthProvider.credential(idToken);
    const { user } = yield auth().signInWithCredential(credential);
    const userId = user.uid;
    const userName = user.displayName;
    const userEmail = user.email;
    yield put(loginToggle(true));
    yield put(toggleAppStatus(requestStatus.SUCCEEDED));
    yield database
      .ref('/users/')
      .child('userInfo')
      .set({ userId, userEmail, userName });
    Alert.alert('Welcome!', `${user.displayName}`);
  } catch (error: any) {
    yield put(loginToggle(false));
    Alert.alert('Something goes wrong!', `${error.message}`);
  }
}
