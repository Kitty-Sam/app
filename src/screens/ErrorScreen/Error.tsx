import React from 'react';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '../../components/AppButton/AppButton';
import { COMMON_STACK_NAME } from '../../enum/enum';
import { StackScreenNavigationProps } from '../../navigation/authStack/types';
import { CommonStackParamList } from '../../navigation/commonStack/types';
import { styles } from './style';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../../assets/not_found.png');

export const ErrorScreen = (
  props: StackScreenNavigationProps<
    COMMON_STACK_NAME.ERROR,
    CommonStackParamList
  >,
) => {
  const { navigation } = props;

  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <Image source={img} style={styles.imageContainer} />
      <AppButton onPress={onBackPress} title="Try again" />
    </SafeAreaView>
  );
};
