import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import LoginScreen from '../screens/LoginScreen';

const Login = createNativeStackNavigator();

export const LoginNavigation = () => {
  const RegistrationScreen = () => {
    return <Text> I am here </Text>;
  };

  return (
    <Login.Navigator>
      <Login.Screen name={'Login'} component={LoginScreen} />
      <Login.Screen name={'Registration'} component={RegistrationScreen} />
    </Login.Navigator>
  );
};
