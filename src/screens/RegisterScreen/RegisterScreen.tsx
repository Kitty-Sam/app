import React from 'react';
import {
  Keyboard,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../LoginScreen/style';
import { AppButton } from '../../components/AppButton';
import { COLORS } from '../../theme/colors';
import { stylesRegister } from './styles';

export const RegisterScreen = () => {
  const registerUserPress = () => {
    console.log('register user');
  };
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={stylesRegister.root}>
      <StatusBar hidden />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={stylesRegister.registerContainer}>
          <TextInput style={styles.inputText} placeholder="Name" />
          <TextInput style={styles.inputText} placeholder="Email" />
          <TextInput style={styles.inputText} placeholder="Password" />
          <TextInput
            style={[styles.inputText, { marginBottom: 20 }]}
            placeholder="Confirm password"
          />
          <AppButton
            onPress={registerUserPress}
            title="REGISTER"
            backgroundColor={COLORS.BUTTONS_COLORS.default_button_Buddha_Gold}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
