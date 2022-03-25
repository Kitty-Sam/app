import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../theme/colors';
import { styles } from './styles';
import { CityItemProps } from './types';

export const CityItem = (props: CityItemProps) => {
  const { title } = props;
  const [value, setValue] = useState<boolean>(false);

  const onOpenDataPress = (title: string) => {
    Alert.alert('A few minutes, please');
    // const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${title}&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27`;
  };

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
