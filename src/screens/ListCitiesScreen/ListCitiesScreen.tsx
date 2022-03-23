import React from 'react';
import { FlatList, StatusBar } from 'react-native';
import { CityItem } from '../../components/CityItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

type DataItemType = {
  city: string;
  id: number;
};

const DATA: DataItemType[] = [
  { id: 1, city: 'Minsk' },
  { id: 2, city: 'Moscow' },
  { id: 3, city: 'Kiev' },
];

export const ListCitiesScreen = () => {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.center}>
      <StatusBar hidden />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={DATA}
        renderItem={({ item }) => <CityItem title={item.city} />}
      />
    </SafeAreaView>
  );
};
