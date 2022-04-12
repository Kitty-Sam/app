import React, { useEffect } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '../../components/AppButton/AppButton';
import { COLORS } from '../../theme/colors';
import { stylesRegister } from './styles';
import {
  AuthStackParamList,
  StackScreenNavigationProps,
} from '../../navigation/authStack/types';
import { AUTH_NAVIGATION_NAME } from '../../enum/enum';
import { useDispatch } from 'react-redux';
import { Field, Formik } from 'formik';
import { CustomInput } from '../../components/CustomInput/CustomInput';
import { signUpValidationSchema } from '../../utils/formValidation';
import { authToggle, saveUserData } from '../../store/actions/register';
import { UserType } from '../../store/reducers/registerReducer';
import database from '@react-native-firebase/database';

export const RegisterScreen = (
  props: StackScreenNavigationProps<
    AUTH_NAVIGATION_NAME.REGISTER,
    AuthStackParamList
  >,
) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const registerUserPress = async ({ fullName, email, password }: UserType) => {
    try {
      const newReference = await database().ref('/users').push();
      newReference
        .set({
          fullName,
          email,
          password,
        })
        .then(() => console.log('new person added'));
    } catch (e) {
      console.log(e);
    }
    dispatch(saveUserData({ email, password, fullName }));
    dispatch(authToggle(true));
    navigation.navigate(AUTH_NAVIGATION_NAME.LOGIN);
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={stylesRegister.root}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <StatusBar hidden />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={stylesRegister.registerContainer}>
            <Formik
              validationSchema={signUpValidationSchema}
              initialValues={{
                fullName: '',
                email: '',
                password: '',
                confirmPassword: '',
              }}
              onSubmit={(values) => {
                registerUserPress(values);
              }}>
              {({ handleSubmit, isValid }) => (
                <>
                  <Field
                    component={CustomInput}
                    name="fullName"
                    placeholder="Full Name"
                  />
                  <Field
                    component={CustomInput}
                    name="email"
                    placeholder="Email Address"
                    keyboardType="email-address"
                  />
                  <Field
                    component={CustomInput}
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                  />
                  <Field
                    component={CustomInput}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    secureTextEntry
                  />
                  <AppButton
                    onPress={handleSubmit}
                    title="SIGH UP"
                    disabled={!isValid}
                    backgroundColor={
                      COLORS.BUTTONS_COLORS.default_button_Buddha_Gold
                    }
                  />
                </>
              )}
            </Formik>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
