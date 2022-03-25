import React, { useState } from 'react';
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
  { id: 5, city: 'Riga' },
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
  const [search, setSearch] = useState<string>('');

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <StatusBar hidden />
      <View style={styles.conditionContainer}>
        <Text style={styles.conditionText}>Choose the city</Text>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={updateSearch}
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
        keyExtractor={(item) => item.id.toString()}
        data={DATA}
        renderItem={({ item }) => <CityItem title={item.city} id={item.id} />}
      />
    </SafeAreaView>
  );
};
