import React, { useState } from 'react';
import {
  Alert,
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
import { keyExtractor } from '../../utils/keyExtractor';
import { CityItem } from '../../components/CityItem/CityItem';
import { addCity } from '../../store/actions/cities';
import {
  getPinnedCities,
  getSelectedCities,
} from '../../store/selectors/citySelector';
import { DataItemType } from './types';

export const ListCitiesScreen = () => {
  const [search, setSearch] = useState<string>('');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const selectedCities = useSelector(getSelectedCities);
  const getPinnedCity = useSelector(getPinnedCities);

  console.log('getPinnedCity', getPinnedCity);

  const onShowWeatherPress = () => {
    if (!search.trim()) {
      Alert.alert('OOPs! Type something!');
    } else {
      dispatch(addCity(search));
      setSearch('');
      navigation.navigate(COMMON_STACK_NAME.WEATHER, {
        title: search,
      });
    }
  };

  const onCityItemPress = (item: DataItemType) => {
    navigation.navigate(COMMON_STACK_NAME.WEATHER, {
      title: item.city,
    });
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <StatusBar hidden />
      <View style={styles.conditionContainer}>
        <Text style={styles.conditionText}>Choose the city...</Text>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={setSearch}
          value={search}
          containerStyle={styles.searchContainer}
          style={styles.search}
          platform="android"
        />
        <View style={styles.showButtonContainer}>
          <AppButton title={'show'} onPress={onShowWeatherPress} />
        </View>
      </View>
      <Text style={[styles.conditionText, { textAlign: 'center' }]}>
        Favorite cities list
      </Text>

      <FlatList
        style={styles.listContainer}
        keyExtractor={keyExtractor}
        data={selectedCities}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cityItemContainer}
            onPress={() => onCityItemPress(item)}>
            <CityItem
              isActive={
                !getPinnedCity.filter((city) => city.city === item.city).length
              }
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
