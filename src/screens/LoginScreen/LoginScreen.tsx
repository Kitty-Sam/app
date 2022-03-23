import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Gap } from '../../components/Gap';
import { styles } from './styles';

export const LoginScreen = () => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const onSendPress = () => {
    console.log('123');
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <Gap scale={3} />
      <Text style={styles.titleText}>Enter in your account</Text>
      <Gap scale={3} />
      <TextInput
        placeholder="Enter your name"
        style={styles.inputText}
        onChangeText={setName}
        value={name}
      />
      <Gap scale={2} />
      <TextInput
        placeholder="Enter your password"
        style={styles.inputText}
        onChangeText={setPassword}
        value={password}
      />
      <Gap scale={2} />
      <TextInput
        placeholder="Confirm password"
        style={styles.inputText}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <Gap scale={2} />
      <View style={styles.buttonContainer}>
        <Button
          title="send"
          disabled={!name || !password || !confirmPassword}
          onPress={onSendPress}
        />
      </View>
    </SafeAreaView>
  );
};
