import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { COMMON_STACK_NAME } from '../../enum/enum';
import { AppButton } from '../../components/AppButton/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import { AppStoreType } from '../../store/store';
import { DataItemType } from './types';
import { keyExtractor } from '../../utils/keyExtractor';
import { CityItem } from '../../components/CityItem/CityItem';
import { addCity } from '../../store/actions/cities';

export const ListCitiesScreen = () => {
  const [search, setSearch] = useState<string>('');
  const navigation = useNavigation();

  const cities = useSelector<AppStoreType, DataItemType[]>((state) =>
    //state.cities.cities.filter((city) => city.selected),
    state.cities.cities.filter((city) => city.selected),
  );

  useEffect(() => {
    dispatch({ type: 'zalupa' });
  }, []);

  console.log('### cityFromTheList', cities);

  const dispatch = useDispatch();

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <StatusBar hidden />
      <View style={styles.conditionContainer}>
        <Text style={styles.conditionText}>Choose the city...</Text>
        <SearchBar
          placeholder="Type Here..."
          // @ts-ignore
          onChangeText={setSearch}
          value={search}
          containerStyle={styles.searchContainer}
          style={styles.search}
          platform="android"
          // onBlur={() => {
          //   dispatch(addCity(search));
          //   navigation.navigate(COMMON_STACK_NAME.WEATHER, {
          //     title: search,
          //   });
          // }}
        />
        <View style={{ position: 'absolute', right: -68, top: 24 }}>
          <AppButton
            title={'show'}
            onPress={() => {
              dispatch(addCity(search));
              navigation.navigate(COMMON_STACK_NAME.WEATHER, {
                title: search,
              });
            }}
          />
        </View>
        <Text style={styles.conditionText}>Favorite cities list</Text>
      </View>

      <FlatList
        style={styles.listContainer}
        keyExtractor={keyExtractor}
        data={cities}
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
