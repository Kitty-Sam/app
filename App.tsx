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
  const isLoggedIn = useSelector(selectLoginIn);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '355613544936-j7vuevctvi6buvua5b08emjdvbilp7ci.apps.googleusercontent.com',
    });
  }, []);

  if (!isLoggedIn) {
    return <AuthStackNavigation />;
  }
  return <MainStackNavigation />;
};
