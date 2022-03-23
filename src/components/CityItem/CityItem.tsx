import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Gap } from '../Gap';
import { styles } from './styles';
import { CityItemProps } from './types';

export const CityItem = ({ title, id }: CityItemProps) => {
  const [loadData, setLoadData] = useState<boolean>(false);

  const onOpenDataPress = (title: string) => {
    Alert.alert('A few minutes, please');
    setLoadData(true);
    const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${title}&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27`;
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']}>
      <Gap />
      <View style={styles.textContainer}>
        <Text style={styles.itemText}>
          {id} {title}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => onOpenDataPress(title)}>
            <Text style={styles.buttonText}>Show</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
