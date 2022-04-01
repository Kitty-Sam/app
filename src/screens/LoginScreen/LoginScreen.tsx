import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton } from '../../components/AppButton/AppButton';
import { COLORS } from '../../theme/colors';
import { styles } from './style';
import { AppButtonWithImg } from '../../components/AppButtonWithImg/AppButtonWithImg';
import { Divider } from 'react-native-elements';
import { AUTH_NAVIGATION_NAME } from '../../enum/enum';
import {
  AuthStackParamList,
  StackScreenNavigationProps,
} from '../../navigation/authStack/types';

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useDispatch, useSelector } from 'react-redux';
import { AppStoreType } from '../../store/store';
import { loginToggleAC } from '../../store/reducers/loginReducer';
import {
  requestStatus,
  toggleAppStatusAC,
} from '../../store/reducers/appReducer';
import { UserType } from '../../store/reducers/registerReducer';

export const LoginScreen = (
  props: StackScreenNavigationProps<
    AUTH_NAVIGATION_NAME.LOGIN,
    AuthStackParamList
  >,
) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const statusApp = useSelector<AppStoreType, requestStatus>(
    (state) => state.app.status,
  );

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const UserDataFromRedux = useSelector<AppStoreType, UserType>(
    (state) => state.register.user,
  );

  const isAuth = useSelector<AppStoreType, boolean>(
    (state) => state.register.isAuth,
  );

  const UserData = {
    email,
    password,
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '355613544936-j7vuevctvi6buvua5b08emjdvbilp7ci.apps.googleusercontent.com',
    });
  });

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const credential = auth.GoogleAuthProvider.credential(idToken);
      const { user } = await auth().signInWithCredential(credential);
      Alert.alert(`Hello, ${user.displayName}`);
      dispatch(loginToggleAC(true));
    } catch (error) {
      console.log('error', error);
    }
  };

  const registerPress = () => {
    navigation.navigate(AUTH_NAVIGATION_NAME.REGISTER);
  };

  const loginPress = () => {
    dispatch(toggleAppStatusAC(requestStatus.loading));
    if (
      UserDataFromRedux.email === UserData.email &&
      UserDataFromRedux.password === UserData.password
    ) {
      dispatch(loginToggleAC(true));
      dispatch(toggleAppStatusAC(requestStatus.succeeded));
    } else {
      Alert.alert('incorrect personal data, try again');
      setEmail('');
      setPassword('');
      dispatch(toggleAppStatusAC(requestStatus.failed));
    }
  };

  const onForgotDataPress = () => {
    navigation.navigate(AUTH_NAVIGATION_NAME.FORGOT);
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      {statusApp === requestStatus.loading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <StatusBar hidden />
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.loginContainer}>
              <Text style={styles.headerText}>Weather App</Text>
              <TextInput
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                style={styles.inputText}
                placeholder="Email"
                placeholderTextColor={COLORS.TEXT_COLORS.soya_Bean}
              />
              <TextInput
                autoCapitalize="none"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                style={styles.inputText}
                placeholder="Password"
                placeholderTextColor={COLORS.TEXT_COLORS.soya_Bean}
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.textContainer}
                  activeOpacity={0.4}>
                  <Text style={styles.regularText} onPress={onForgotDataPress}>
                    Forgot email/password
                  </Text>
                </TouchableOpacity>
                <AppButton
                  onPress={loginPress}
                  title={'SIGH IN'}
                  disabled={!isAuth}
                />
                <AppButton
                  onPress={registerPress}
                  backgroundColor={COLORS.BUTTONS_COLORS.chalet_green}
                  title={'SIGH UP'}
                />
              </View>
              <Divider
                style={{
                  backgroundColor: COLORS.TEXT_COLORS.zuccini,
                  marginTop: 150,
                }}
              />
              <View style={styles.buttonsLinkContainer}>
                <AppButtonWithImg
                  onPress={() => {
                    console.log('123');
                  }}
                  backgroundColor={'#3b5998'}
                  title={'Login with facebook'}
                  icon={'facebook'}
                />
                <AppButtonWithImg
                  onPress={() => onGoogleButtonPress()}
                  backgroundColor={COLORS.BUTTONS_COLORS.tacao}
                  title={'Login with google'}
                  icon={'google-plus'}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
};
