import React from 'react';
import {
  Keyboard,
  Platform,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '../../components/AppButton/AppButton';
import { COLORS } from '../../theme/colors';

import { styles } from '../LoginScreen/style';
import {
  AuthStackParamList,
  StackScreenNavigationProps,
} from '../../navigation/authStack/types';
import { AUTH_NAVIGATION_NAME } from '../../enum/enum';
import { stylesRegister } from '../RegisterScreen/styles';

export const ConfirmScreen = (
  props: StackScreenNavigationProps<
    AUTH_NAVIGATION_NAME.CONFIRM,
    AuthStackParamList
  >,
) => {
  const confirmPress = () => {
    console.log('confirm password');
  };

  const resetCodePress = () => {
    console.log('reset code');
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
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              activeOpacity={0.5}
              onPress={resetCodePress}>
              <Text style={{ color: COLORS.TEXT_COLORS.zuccini }}>
                Reset code?
              </Text>
            </TouchableOpacity>
            <AppButton
              onPress={confirmPress}
              title="CONFIRM"
              backgroundColor={COLORS.BUTTONS_COLORS.default_button_Buddha_Gold}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
