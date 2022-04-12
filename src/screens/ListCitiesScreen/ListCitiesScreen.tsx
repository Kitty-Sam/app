import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Text,
  ToastAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { SearchBar } from 'react-native-elements';
import { COMMON_STACK_NAME } from '../../enum/enum';
import { AppButton } from '../../components/AppButton/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import { keyExtractor } from '../../utils/keyExtractor';
import { CityItem } from '../../components/CityItem/CityItem';
import { addCity } from '../../store/actions/cities';
import { getSelectedCities } from '../../store/selectors/citySelector';
import { DataItemType } from './types';
import { toggleAppStatus } from '../../store/actions/app';
import { requestStatus } from '../../store/reducers/appReducer';
import { dayWeatherInfo } from '../WeatherCardScreen/types';
import { StackScreenNavigationProps } from '../../navigation/authStack/types';
import { CommonStackParamList } from '../../navigation/commonStack/types';
import database from '@react-native-firebase/database';

export const ListCitiesScreen = (
  props: StackScreenNavigationProps<
    COMMON_STACK_NAME.TAB,
    CommonStackParamList
  >,
) => {
  const { navigation } = props;
  const [search, setSearch] = useState<string>('');
  const [data, setData] = useState<dayWeatherInfo | null>(null);
  const [error, setError] = useState<boolean>(false);

  const dispatch = useDispatch();

  const selectedCities = useSelector(getSelectedCities);

  useEffect(() => {
    const newReference = database().ref('/users/').push();
    newReference
      .set({
        user: 'userTitle',
      })
      .then(() => console.log('Data updated.'));
  }, []);

  useEffect(() => {
    setError(false);
  });

  type ValuesForWeatherType = {
    feels_like: number | undefined;
    temp_max: number | undefined;
    temp_min: number | undefined;
  };

  const valuesForWeather: ValuesForWeatherType = {
    temp_max: data?.['main']?.['temp_max'],
    temp_min: data?.['main']?.['temp_min'],
    feels_like: data?.['main']?.['feels_like'],
  };

  // console.log('ERROR', error);
  // console.log('valuesForWeather from the list', valuesForWeather);

  const onShowWeatherPress = async () => {
    if (!search.trim()) {
      ToastAndroid.show('OOPs! Type something!', ToastAndroid.LONG);
    } else {
      dispatch(toggleAppStatus(requestStatus.LOADING));
      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=ru&units=metric&appid=ef8dbe91097853f46a4f5c2d9130a67d`;
      const response = await fetch(weatherURL);
      const responseForRender = await response.json();
      if (responseForRender.cod === '404') {
        setError(true);
        setSearch('');
        dispatch(toggleAppStatus(requestStatus.FAILED));
      } else {
        dispatch(toggleAppStatus(requestStatus.IDLE));
        setData(responseForRender);
        dispatch(addCity(search));
        setSearch('');
        setError(false);
        navigation.navigate(COMMON_STACK_NAME.WEATHER, {
          data: valuesForWeather,
          title: search,
        });
      }
    }
  };

  const onCityItemPress = (item: DataItemType) => {
    setError(false);
    navigation.navigate(COMMON_STACK_NAME.WEATHER, {
      title: item.city,
    });
  };

  if (error) {
    navigation.navigate(COMMON_STACK_NAME.ERROR);
  }

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <StatusBar hidden />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

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
