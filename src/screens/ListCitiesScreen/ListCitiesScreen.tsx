import React, { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { FAB, Icon, Overlay } from 'react-native-elements';
import { COMMON_STACK_NAME } from '../../enum/enum';
import { useDispatch, useSelector } from 'react-redux';
import { keyExtractor } from '../../utils/keyExtractor';
import { CityItem } from '../../components/CityItem/CityItem';
import { getSelectedCities } from '../../store/selectors/citySelector';
import { DataItemType } from './types';
import { StackScreenNavigationProps } from '../../navigation/authStack/types';
import { CommonStackParamList } from '../../navigation/commonStack/types';
import { weatherGetInfo } from '../../store/sagas/sagasActions';
import { COLORS } from '../../theme/colors';
import { iconsName, iconsType } from '../../utils/constants/icons';
import { requestStatus } from '../../store/reducers/appReducer';
import { selectStatusApp } from '../../store/selectors/appSelector';
import { useTranslation } from 'react-i18next';

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
  const [visible, setVisible] = useState(false);
  const selectedCities = useSelector(getSelectedCities);
  const statusApp = useSelector(selectStatusApp);

  const dispatch = useDispatch();

  const onShowWeatherPress = () => {
    if (!search.trim()) {
      toggleSearchOverlay();
    } else {
      dispatch(weatherGetInfo(search));
      setSearch('');
      navigation.navigate(COMMON_STACK_NAME.WEATHER, {
        title: search,
      });
    }
  };

  const onCityItemPress = (city: string) => {
    navigation.navigate(COMMON_STACK_NAME.WEATHER, {
      title: city,
    });
  };

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const toggleSearchOverlay = () => {
    setVisibleSearch(!isVisibleSearch);
  };

  const renderItem = ({ item }) => {
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
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      {statusApp === requestStatus.LOADING ? (
        <View style={styles.timerContainer}>
          <ActivityIndicator />
        </View>
      ) : (
        <>
          <View>
            <StatusBar hidden />
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.conditionContainer}>
                  <Text style={styles.conditionText}>
                    {t('listScreen.choice')}
                  </Text>
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
                      color={COLORS.TEXT_COLORS.zuccini}
                      size={36}
                    />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <Text style={[styles.conditionText, { textAlign: 'center' }]}>
              {t('listScreen.favorite')}
            </Text>
            <View style={styles.citiesContainer}>
              <FlatList
                style={styles.listContainer}
                keyExtractor={keyExtractor}
                data={selectedCities}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
          <FAB
            color={COLORS.BUTTONS_COLORS.default_button_Buddha_Gold}
            onPress={toggleOverlay}
            title={'?'}
            style={styles.fab}
          />
          <Overlay
            isVisible={visible}
            onBackdropPress={toggleOverlay}
            overlayStyle={styles.overlay}>
            <View style={styles.textOverlayContainer}>
              <Text style={[styles.overlayText, { fontSize: 24 }]}>
                {t('modal.greetings')}
              </Text>
              <Text style={[styles.overlayText, { marginVertical: 16 }]}>
                {t('modal.fab')}
              </Text>
              <Icon
                tvParallaxProperties
                name={iconsName.SMILE}
                type={iconsType.MATERIAL}
              />
            </View>
          </Overlay>
          <Overlay
            isVisible={isVisibleSearch}
            onBackdropPress={toggleSearchOverlay}
            overlayStyle={styles.overlaySearch}>
            <Text style={styles.textOverlaySearch}>
              {t('listScreen.search')}
            </Text>
          </Overlay>
        </>
      )}
    </SafeAreaView>
  );
};
