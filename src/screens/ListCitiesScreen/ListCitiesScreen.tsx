import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
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

export const ListCitiesScreen = (
  props: StackScreenNavigationProps<
    COMMON_STACK_NAME.TAB,
    CommonStackParamList
  >,
) => {
  const { navigation } = props;

  const [search, setSearch] = useState<string>('');
  const selectedCities = useSelector(getSelectedCities);
  const statusApp = useSelector(selectStatusApp);
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const onShowWeatherPress = () => {
    if (!search.trim()) {
      Alert.alert('OOPs! Type something!');
    } else {
      dispatch(weatherGetInfo(search));
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

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      {statusApp === requestStatus.LOADING ? (
        <View style={styles.timerContainer}>
          <ActivityIndicator />
        </View>
      ) : (
        <View>
          <View>
            <StatusBar hidden />
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.conditionContainer}>
                  <Text style={styles.conditionText}>Choose the city...</Text>
                  <TextInput
                    placeholder="Type here..."
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
              Favorite cities list
            </Text>

            <FAB
              color={COLORS.BUTTONS_COLORS.default_button_Buddha_Gold}
              onPress={toggleOverlay}
              title="?"
              style={styles.fab}
            />
            <Overlay
              isVisible={visible}
              onBackdropPress={toggleOverlay}
              overlayStyle={styles.overlay}>
              <View style={styles.textOverlayContainer}>
                <Text style={[styles.overlayText, { fontSize: 24 }]}>
                  Hello!
                </Text>
                <Text style={[styles.overlayText, { marginVertical: 16 }]}>
                  Just type city title, if you want to know the weather there.
                  Have a nice day!
                </Text>
                <Icon
                  tvParallaxProperties
                  name={iconsName.SMILE}
                  type={iconsType.MATERIAL}
                />
              </View>
            </Overlay>
          </View>
          <FlatList
            style={styles.listContainer}
            keyExtractor={keyExtractor}
            data={selectedCities}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.5}
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
        </View>
      )}
    </SafeAreaView>
  );
};
