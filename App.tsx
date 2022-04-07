import React, { FC, useEffect } from 'react';

import { LogBox } from 'react-native';
import { useSelector } from 'react-redux';
import { AuthStackNavigation } from './src/navigation/authStack/AuthStack';
import { MainStackNavigation } from './src/navigation/commonStack/CommonStack';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { selectLoginIn } from './src/store/selectors/loginSelector';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
LogBox.ignoreLogs(['EventEmitter.removeListener']);

export const App: FC = () => {
  useEffect(() => {
    /* GoogleSignin.configure({
       webClientId:
         '355613544936-j7vuevctvi6buvua5b08emjdvbilp7ci.apps.googleusercontent.com',
     });*/

    /* GoogleSignin.configure({
       webClientId:
         '989628253767-fdv67ugc181ci71upgoscfi7ve7ieg03.apps.googleusercontent.com',
     });*/

    GoogleSignin.configure({
      webClientId:
        '989628253767-qm6m07eej2qef9et4ovdr7ukkr7094kb.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  const isLoggedIn = useSelector(selectLoginIn);

  if (!isLoggedIn) {
    return <AuthStackNavigation />;
  }
  return <MainStackNavigation />;
};
