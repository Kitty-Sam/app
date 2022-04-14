import auth from '@react-native-firebase/auth';
import { loginToggle } from '../actions/login';
import { toggleAppStatus } from '../actions/app';
import { requestStatus } from '../reducers/appReducer';
import { Alert } from 'react-native';
import { put } from '@redux-saga/core/effects';
import { facebookSignInType } from './sagasActions';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';

export function* facebookSignInWorker(action: facebookSignInType) {
  try {
    yield LoginManager.logInWithPermissions(['public_profile', 'email']);
    const dataToken = yield AccessToken.getCurrentAccessToken();
    const { accessToken } = dataToken!;
    const facebookCredential = yield auth.FacebookAuthProvider.credential(
      accessToken,
    );
    const { user } = yield auth().signInWithCredential(facebookCredential);
    yield put(loginToggle(true));
    yield put(toggleAppStatus(requestStatus.SUCCEEDED));
    Alert.alert('Welcome!', `${user.displayName}`);
  } catch (error) {
    Alert.alert('Something goes wrong!');
  }
}
