import React from 'react';
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
import { requestStatus } from '../../store/reducers/appReducer';
import { UserType } from '../../store/reducers/registerReducer';
import { Formik } from 'formik';
import { loginValidationSchema } from '../../utils/formValidation';
import { loginToggle } from '../../store/actions/login';
import { toggleAppStatus } from '../../store/actions/app';
import {
  getUserData,
  selectAuth,
} from '../../store/selectors/registerSelector';
import { selectStatusApp } from '../../store/selectors/appSelector';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';

export const LoginScreen = (
  props: StackScreenNavigationProps<
    AUTH_NAVIGATION_NAME.LOGIN,
    AuthStackParamList
  >,
) => {
  const { navigation } = props;

  const dispatch = useDispatch();

  const statusApp = useSelector(selectStatusApp);
  const UserDataFromRedux = useSelector(getUserData);
  const isAuth = useSelector(selectAuth);

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const credential = auth.GoogleAuthProvider.credential(idToken);
      const { user } = await auth().signInWithCredential(credential);
      Alert.alert('Welcome back!', `${user.displayName}`);
      dispatch(loginToggle(true));
    } catch (error) {
      Alert.alert('Something goes wrong!');
    }
  };

  const registerPress = () => {
    navigation.navigate(AUTH_NAVIGATION_NAME.REGISTER);
  };

  const loginPress = (values: UserType) => {
    dispatch(toggleAppStatus(requestStatus.LOADING));
    if (
      UserDataFromRedux.email === values.email &&
      UserDataFromRedux.password === values.password
    ) {
      dispatch(loginToggle(true));
      dispatch(toggleAppStatus(requestStatus.SUCCEEDED));
      Alert.alert('Welcome Back!', `${UserDataFromRedux.fullName}`);
    } else {
      Alert.alert('OOPS!', 'Incorrect personal data, try again');
      dispatch(toggleAppStatus(requestStatus.FAILED));
    }
  };

  const onForgotDataPress = () => {
    navigation.navigate(AUTH_NAVIGATION_NAME.FORGOT);
  };

  const onFacebookButtonPress = async () => {
    try {
      await LoginManager.logInWithPermissions(['public_profile', 'email']);
      const dataToken = await AccessToken.getCurrentAccessToken();
      const accessToken = dataToken?.accessToken;
      const facebookCredential = await auth.FacebookAuthProvider.credential(
        accessToken,
      );
      const { user } = await auth().signInWithCredential(facebookCredential);
      Alert.alert('Welcome back!', `${user.displayName}`);
      dispatch(loginToggle(true));
    } catch (e) {
      Alert.alert('Something goes wrong!');
    }
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      {statusApp === requestStatus.LOADING ? (
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
              <Formik
                validationSchema={loginValidationSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => {
                  loginPress(values);
                }}>
                {({
                  touched,
                  handleChange,
                  errors,
                  handleBlur,
                  handleSubmit,
                  values,
                }) => (
                  <>
                    <TextInput
                      autoCapitalize="none"
                      style={styles.inputText}
                      placeholder="Email"
                      placeholderTextColor={COLORS.TEXT_COLORS.soya_Bean}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      keyboardType="email-address"
                    />
                    {errors.email && touched.email && (
                      <Text style={{ color: 'red' }}>{errors.email}</Text>
                    )}

                    <TextInput
                      autoCapitalize="none"
                      secureTextEntry={true}
                      style={styles.inputText}
                      placeholder="Password"
                      placeholderTextColor={COLORS.TEXT_COLORS.soya_Bean}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />

                    {errors.password && touched.password && (
                      <Text style={{ color: 'red' }}>{errors.password}</Text>
                    )}

                    <View style={styles.buttonContainer}>
                      <TouchableOpacity
                        style={styles.textContainer}
                        activeOpacity={0.4}>
                        <Text
                          style={styles.regularText}
                          onPress={onForgotDataPress}>
                          Forgot email/password
                        </Text>
                      </TouchableOpacity>
                      <AppButton
                        onPress={handleSubmit}
                        title={'SIGH IN'}
                        disabled={!isAuth}
                      />
                      <AppButton
                        onPress={registerPress}
                        backgroundColor={COLORS.BUTTONS_COLORS.chalet_green}
                        title={'SIGH UP'}
                      />
                    </View>
                  </>
                )}
              </Formik>

              <Divider style={styles.divider} />
              <View style={styles.buttonsLinkContainer}>
                <AppButtonWithImg
                  onPress={() => onFacebookButtonPress()}
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
