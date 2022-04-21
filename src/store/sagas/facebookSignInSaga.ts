import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { loginToggle } from '../actions/login';
import { toggleAppStatus } from '../actions/app';
import { requestStatus } from '../reducers/appReducer';
import { Alert } from 'react-native';
import { put } from '@redux-saga/core/effects';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import FBAccessToken from 'react-native-fbsdk-next/lib/typescript/src/FBAccessToken';

export function* facebookSignInWorker() {
  try {
    yield LoginManager.logInWithPermissions(['public_profile', 'email']);
    const dataToken: FBAccessToken | null =
      yield AccessToken.getCurrentAccessToken();

    if (dataToken) {
      const facebookCredential: FirebaseAuthTypes.AuthCredential =
        yield auth.FacebookAuthProvider.credential(dataToken.accessToken);
      const { user } = yield auth().signInWithCredential(facebookCredential);
      yield put(loginToggle(true));
      yield put(toggleAppStatus(requestStatus.SUCCEEDED));
      Alert.alert('Welcome!', `${user.displayName}`);
    }
  } catch (error) {
    Alert.alert('Something goes wrong!');
    console.error(error);
  }
}
