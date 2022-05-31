import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { loginToggle } from '../actions/login';
import { toggleAppStatus } from '../actions/app';
import { requestStatus } from '../reducers/appReducer';
import { Alert } from 'react-native';
import { put, select } from '@redux-saga/core/effects';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import FBAccessToken from 'react-native-fbsdk-next/lib/typescript/src/FBAccessToken';
import { UserType } from '../reducers/loginReducer';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { database } from '../../utils/getDataBaseURL';
import { DataItemType } from '../../screens/ListCitiesScreen/types';
import { setSelectedCities } from '../actions/cities';
import { getUsers } from '../selectors/loginSelector';

export function* facebookSignInWorker() {
  try {
    const usersRedux: UserType[] = yield select(getUsers);

    yield LoginManager.logInWithPermissions(['public_profile', 'email']);
    const dataToken: FBAccessToken | null =
      yield AccessToken.getCurrentAccessToken();

    if (dataToken) {
      const facebookCredential: FirebaseAuthTypes.AuthCredential =
        yield auth.FacebookAuthProvider.credential(dataToken.accessToken);
      const { user } = yield auth().signInWithCredential(facebookCredential);

      const userEmail = user.providerData[0].email;
      const userName = user.providerData[0].displayName;
      const userId = user.providerData[0].userId;

      const facebookUser = usersRedux.find(
        (user) => user.userEmail === userEmail,
      );

      if (facebookUser) {
        yield put(toggleAppStatus(requestStatus.LOADING));

        const reference: FirebaseDatabaseTypes.Reference = yield database.ref(
          `/users/${facebookUser.userId}/selected`,
        );

        const snapshot: FirebaseDatabaseTypes.DataSnapshot =
          yield reference.once('value');

        if (snapshot.val()) {
          const values = snapshot.val();
          const selectedCities: DataItemType[] = Object.values(values);
          yield put(setSelectedCities({ selectedCities }));
        } else {
          const emptyArray: DataItemType[] = [];
          yield put(setSelectedCities({ selectedCities: emptyArray }));
        }

        yield put(toggleAppStatus(requestStatus.SUCCEEDED));
        yield put(loginToggle(true));
        yield put(toggleAppStatus(requestStatus.SUCCEEDED));
        Alert.alert('Welcome!', `${user.displayName}`);
      } else {
        yield database
          .ref('/users/')
          .child(`${user.userId}`)
          .set({ userId, userEmail, userName });
      }
    }
  } catch (error) {
    Alert.alert('Something goes wrong!');
    console.error(error);
  }
}
