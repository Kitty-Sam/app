import React, { useState } from 'react';
import { Button, Dimensions, StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Gap from '../components/Gap';

const LoginScreen = () => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Gap />
      <Text style={styles.titleText}>Enter in your account</Text>
      <Gap />
      <Text style={styles.infoText}>
        If your account is here, please, use your current name and password
      </Text>
      <Gap />
      <TextInput
        placeholder="Enter your name"
        style={styles.inputText}
        onChangeText={setName}
        value={name}
      />
      <Gap />
      <TextInput
        placeholder="Enter your password"
        style={styles.inputText}
        onChangeText={setPassword}
        value={password}
      />
      <Gap />
      <TextInput
        placeholder="Confirm password"
        style={styles.inputText}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <Gap />
      <View style={styles.buttonContainer}>
        <Button
          title="send"
          disabled={!name || !password || !confirmPassword}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  buttonContainer: {
    width: Dimensions.get('window').width / 4,
    margin: 10,
  },
  inputText: {
    borderWidth: 1,
    borderColor: 'black',
    width: 300,
    textAlign: 'center',
  },
});

export default LoginScreen;
