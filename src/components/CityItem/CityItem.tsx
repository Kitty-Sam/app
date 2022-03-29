import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../theme/colors';
import { styles } from './styles';
import { CityItemProps } from './types';
import { useNavigation } from '@react-navigation/native';
import { COMMON_STACK_NAME } from '../../enum/enum';

export const CityItem = (props: CityItemProps) => {
  const navigation = useNavigation();

  const { title } = props;
  const [value, setValue] = useState<boolean>(false);

  if (value) {
    navigation.navigate(COMMON_STACK_NAME.WEATHER, {
      title: title,
    });
    setValue(false);
  }

  console.log('data from city', title);

  return (
    <SafeAreaView edges={['top', 'left', 'right']}>
      <View style={styles.textContainer}>
        <Text style={styles.itemText}>{title}</Text>
        <CheckBox
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={value}
          onPress={() => setValue(!value)}
          checkedColor={COLORS.BUTTONS_COLORS.default_button_Buddha_Gold}
        />
      </View>
    </SafeAreaView>
  );
};
