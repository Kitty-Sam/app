import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StatusBar,
  Text,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { CityItem } from '../../components/CityItem/CityItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { SearchBar } from 'react-native-elements';
import { DataItemType } from './types';
import { keyExtractor } from '../../utils/keyExtractor';
import { useSelector } from 'react-redux';
import { getCities } from '../../store/selectors/citySelector';
import { useNavigation } from '@react-navigation/native';
import { COMMON_STACK_NAME } from '../../enum/enum';

export const ListCitiesScreen = () => {
  const [filteredData, setFilteredData] = useState<DataItemType[]>([]);
  const [masterData, setMasterData] = useState<DataItemType[]>([]);
  const [search, setSearch] = useState<string>('');

  const navigation = useNavigation();

  const cities = useSelector(getCities);

  const loadData = () => {
    setMasterData(cities);
    setFilteredData(cities);
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
        style={styles.listContainer}
        keyExtractor={keyExtractor}
        data={filteredData}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ margin: 8 }}
            onPress={() => {
              navigation.navigate(COMMON_STACK_NAME.WEATHER, {
                title: item.city,
              });
            }}>
            <CityItem
              title={item.city}
              id={item.id}
              selected={item.selected}
              isDefault={item.isDefault}
            />
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
