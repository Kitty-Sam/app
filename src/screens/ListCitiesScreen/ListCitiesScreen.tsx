import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import { CityItem } from '../../components/CityItem/CityItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { SearchBar } from 'react-native-elements';
import { COLORS } from '../../theme/colors';

type DataItemType = {
  city: string;
  id: number;
};

const DATA: DataItemType[] = [
  { id: 1, city: 'Minsk' },
  { id: 2, city: 'Moscow' },
  { id: 3, city: 'Kiev' },
  { id: 4, city: 'Riga' },
  { id: 5, city: 'Beloozersk' },
  { id: 6, city: 'Riga' },
  { id: 7, city: 'Riga' },
  { id: 8, city: 'Riga' },
  { id: 9, city: 'Riga' },
  { id: 10, city: 'Riga' },
  { id: 11, city: 'Riga' },
  { id: 12, city: 'Riga' },
  { id: 13, city: 'Riga' },
  { id: 14, city: 'Riga' },
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

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <StatusBar hidden />
      <View style={styles.conditionContainer}>
        <Text style={styles.conditionText}>Choose the city</Text>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={(text: string) => searchFilter(text)}
          value={search}
          containerStyle={{
            marginVertical: 16,
            backgroundColor: COLORS.BACKGROUND_COLORS.indian_Khaki,
            borderRadius: 10,
          }}
          style={{
            backgroundColor: COLORS.BACKGROUND_COLORS.akaroa,
            color: COLORS.TEXT_COLORS.zuccini,
            borderRadius: 10,
          }}
          platform="android"
        />
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={filteredData}
        renderItem={({ item }) => <CityItem title={item.city} />}
      />
    </SafeAreaView>
  );
};
