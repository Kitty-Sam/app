import React from 'react';
import {
  Platform,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton } from '../../components/AppButton';
import { COLORS } from '../../theme/colors';

import { useNavigation } from '@react-navigation/native';
import { styles } from './style';

export const LoginScreen = () => {
  const navigation = useNavigation();

  const registerPress = () => {
    // @ts-ignore
    navigation.navigate('Register');
  };

  const loginPress = () => {
    console.log('login');
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <StatusBar hidden />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginContainer}>
            <Text style={styles.headerText}>Weather App</Text>
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
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.textContainer}
                activeOpacity={0.4}>
                <Text style={styles.regularText}>Forgot email/password</Text>
              </TouchableOpacity>
              <AppButton onPress={loginPress} title={'LOGIN'} />
              <AppButton
                onPress={registerPress}
                backgroundColor={COLORS.BUTTONS_COLORS.chalet_green}
                title={'REGISTER'}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
