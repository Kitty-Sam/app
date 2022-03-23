import React from 'react';
import { FlatList, StatusBar, StyleSheet } from 'react-native';
import CityItem from '../components/CityItem';
import { SafeAreaView } from 'react-native-safe-area-context';

const ListCitiesScreen = () => {
  type DataItemType = {
    city: string;
    id: number;
  };

  const DATA: DataItemType[] = [
    { id: 1, city: 'Minsk' },
    { id: 2, city: 'Moscow' },
    { id: 3, city: 'Kiev' },
  ];

  return (
    <SafeAreaView>
      <StatusBar hidden />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={DATA}
        renderItem={({ item }) => <CityItem title={item.city} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
});

export default ListCitiesScreen;
