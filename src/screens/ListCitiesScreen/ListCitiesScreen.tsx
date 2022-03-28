import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, Text, TextInputProps, View } from 'react-native';
import { CityItem } from '../../components/CityItem/CityItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { SearchBar } from 'react-native-elements';

type DataItemType = {
  city: string;
  id: number;
};

const DATA: DataItemType[] = [
  { id: 1, city: 'Minsk' },
  { id: 2, city: 'Moscow' },
  { id: 3, city: 'Kiev' },
  { id: 4, city: 'Riga' },
  { id: 5, city: 'Orsha' },
  { id: 6, city: 'Brest' },
  { id: 7, city: 'Grodno' },
  { id: 8, city: 'Bereza' },
  { id: 9, city: 'Mogilev' },
  { id: 10, city: 'Vitebsk' },
];

export const ListCitiesScreen = () => {
  const [filteredData, setFilteredData] = useState<DataItemType[]>([]);
  const [masterData, setMasterData] = useState<DataItemType[]>([]);
  const [search, setSearch] = useState<string>('');

  const loadData = () => {
    setMasterData(DATA);
    setFilteredData(DATA);
  };

  useEffect(() => {
    loadData();
  }, []);

  const searchFilter = (text: string) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.city ? item.city.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(masterData);
      setSearch(text);
    }
  };

  const onChangeText: TextInputProps['onChangeText'] = (text: string) => {
    searchFilter(text);
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <StatusBar hidden />
      <View style={styles.conditionContainer}>
        <Text style={styles.conditionText}>Choose the city</Text>
        <SearchBar
          placeholder="Type Here..."
          // @ts-ignore
          onChangeText={onChangeText}
          value={search}
          containerStyle={styles.searchContainer}
          style={styles.search}
          platform="android"
        />
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={filteredData}
        renderItem={({ item }) => <CityItem title={item.city} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
