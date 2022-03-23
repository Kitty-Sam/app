import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Gap } from '../Gap';
import { styles } from './styles';
import { CityItemProps } from './types';

export const CityItem = ({ title, id }: CityItemProps) => {
  const onOpenDataPress = (id: number) => {
    Alert.alert('A few minutes, please');
    console.log(id);
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']}>
      <Gap />
      <View style={{ flexDirection: 'row', height: 30 }}>
        <Text style={styles.itemText}>
          {id} {title}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => onOpenDataPress(id)}>
            <Text style={styles.buttonText}>Show</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
