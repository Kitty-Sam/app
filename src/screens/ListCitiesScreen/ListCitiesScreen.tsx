import React, { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { Icon, Overlay } from 'react-native-elements';
import { COMMON_STACK_NAME } from '../../enum/enum';
import { useDispatch, useSelector } from 'react-redux';
import { keyExtractor } from '../../utils/keyExtractor';
import { CityItem } from '../../components/CityItem/CityItem';
import { getSelectedCities } from '../../store/selectors/citySelector';
import { DataItemType } from './types';
import { StackScreenNavigationProps } from '../../navigation/authStack/types';
import { CommonStackParamList } from '../../navigation/commonStack/types';
import { colors } from '../../theme/colors';
import { iconsName, iconsType } from '../../utils/constants/icons';
import { requestStatus } from '../../store/reducers/appReducer';
import { selectStatusApp } from '../../store/selectors/appSelector';
import { useTranslation } from 'react-i18next';
import { weatherGetInfoAction } from '../../store/sagas/sagasActions/weatherGetInfo';

export const ListCitiesScreen = (
  props: StackScreenNavigationProps<
    COMMON_STACK_NAME.TAB,
    CommonStackParamList
  >,
) => {
  const { navigation } = props;

  const { t } = useTranslation();

  const [search, setSearch] = useState('');
  const [isVisibleSearch, setVisibleSearch] = useState(false);
  const selectedCities = useSelector(getSelectedCities);
  const statusApp = useSelector(selectStatusApp);

  const dispatch = useDispatch();

  const navToWeatherScreen = () => {
    navigation.navigate(COMMON_STACK_NAME.WEATHER, {
      title: search,
    });
  };

  const onShowWeatherPress = () => {
    if (!search.trim()) {
      toggleSearchOverlay();
    } else {
      dispatch(weatherGetInfoAction({ search, nav: navToWeatherScreen }));
      setSearch('');
    }
  };

  const onCityItemPress = (city: string) => {
    navigation.navigate(COMMON_STACK_NAME.WEATHER, {
      title: city,
    });
  };

  const toggleSearchOverlay = () => {
    setVisibleSearch(!isVisibleSearch);
  };

  const renderItem = ({ item }: { item: DataItemType }) => {
    const { city, id, selected, isDefault } = item;
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.cityItemContainer}
        onPress={() => onCityItemPress(city)}>
        <CityItem
          title={city}
          id={id}
          selected={selected}
          isDefault={isDefault}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      {statusApp === requestStatus.LOADING ? (
        <View style={styles.timerContainer}>
          <ActivityIndicator />
        </View>
      ) : (
        <>
          <Overlay
            isVisible={isVisibleSearch}
            onBackdropPress={toggleSearchOverlay}
            overlayStyle={styles.overlaySearch}>
            <Text style={styles.textOverlaySearch}>
              {t('listScreen.search')}
            </Text>
          </Overlay>
          <View style={styles.conditionContainer}>
            <Text style={styles.conditionText}>{t('listScreen.choice')}</Text>
            <TextInput
              placeholder={t('listScreen.input')}
              onChangeText={setSearch}
              value={search}
              style={styles.search}
            />
            <View style={styles.showButtonContainer}>
              <Icon
                tvParallaxProperties
                name={iconsName.SEARCH}
                type={iconsType.MATERIAL}
                onPress={onShowWeatherPress}
                color={colors.text_colors.zuccini}
                size={36}
              />
            </View>
          </View>
          <FlatList
            style={styles.listContainer}
            keyExtractor={keyExtractor}
            data={selectedCities}
            renderItem={renderItem}
            showsVerticalScrollIndicator={true}
          />
        </>
      )}
    </SafeAreaView>
  );
};
