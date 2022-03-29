import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '../../components/AppButton/AppButton';
import { COLORS } from '../../theme/colors';
import { stylesRegister } from './styles';
import { styles } from '../LoginScreen/style';
import {
  AuthStackParamList,
  StackScreenNavigationProps,
} from '../../navigation/authStack/types';
import { AUTH_NAVIGATION_NAME } from '../../enum/enum';

export const RegisterScreen = (
  props: StackScreenNavigationProps<
    AUTH_NAVIGATION_NAME.CONFIRM,
    AuthStackParamList
  >,
) => {
  const { navigation } = props;

  const registerUserPress = () => {
    navigation.navigate(AUTH_NAVIGATION_NAME.CONFIRM);
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={stylesRegister.root}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <StatusBar hidden />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={stylesRegister.registerContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              placeholderTextColor={COLORS.TEXT_COLORS.soya_Bean}
            />
            <TextInput
              style={styles.inputText}
              placeholder="Password"
              placeholderTextColor={COLORS.TEXT_COLORS.soya_Bean}
            />
            <TextInput
              style={[styles.inputText, { marginBottom: 20 }]}
              placeholder="Confirm password"
              placeholderTextColor={COLORS.TEXT_COLORS.soya_Bean}
            />
            <AppButton
              onPress={registerUserPress}
              title="SIGH UP"
              backgroundColor={COLORS.BUTTONS_COLORS.default_button_Buddha_Gold}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
