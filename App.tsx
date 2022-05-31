import React, { FC, useEffect } from 'react';

import PushNotification from 'react-native-push-notification';

import { LogBox } from 'react-native';
import { useSelector } from 'react-redux';
import { AuthStackNavigation } from './src/navigation/authStack/AuthStack';
import { MainStackNavigation } from './src/navigation/commonStack/CommonStack';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { selectLoginIn } from './src/store/selectors/loginSelector';

import messaging from '@react-native-firebase/messaging';

import SplashScreen from 'react-native-splash-screen';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  'EventEmitter.removeListener',
]);

export const App: FC = () => {
  const isLoggedIn = useSelector(selectLoginIn);

  const getPushData = async (message: any) => {
    PushNotification.localNotification({
      channelId: 'not1',
      message: message.notification.body,
      title: message.notification.title,
    });
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    messaging().onMessage(getPushData);
    messaging().setBackgroundMessageHandler(getPushData);
  }, []);

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
