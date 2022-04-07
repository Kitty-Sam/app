import React from 'react';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../CItyScreen/styles';
import { AppButton } from '../../components/AppButton/AppButton';
import { useNavigation } from '@react-navigation/native';
import { COMMON_STACK_NAME } from '../../enum/enum';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../../assets/not_found.png');

export const ErrorScreen = () => {
  const navigation = useNavigation();
  const onBackPress = () => {
    navigation.navigate(COMMON_STACK_NAME.TAB);
  };
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={img} style={styles.imageContainer} />
      <AppButton onPress={onBackPress} title="Try again" />
    </SafeAreaView>
  );
};
