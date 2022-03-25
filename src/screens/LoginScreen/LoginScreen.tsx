import React from 'react';
import {
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
import { AppButton } from '../../components/AppButton';
import { COLORS } from '../../theme/colors';

import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import { AppButtonWithImg } from '../../components/AppButtonWithImg';
import { Divider } from 'react-native-elements';

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
                onPress={() => {
                  console.log('123');
                }}
                backgroundColor={COLORS.BUTTONS_COLORS.tacao}
                title={'Login with google'}
                icon={'google-plus'}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
