import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, Text, View } from 'react-native';
import { styles } from './styles';
import { FAB, Image, Overlay } from 'react-native-elements';
import { COLORS } from '../../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { AppStoreType } from '../../store/store';
import { DataItemType } from '../ListCitiesScreen/types';
import { WeatherCardDayTemplate } from '../../components/WeatherCardTemplate/WeatherCardTemplate';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../../assets/weather.png');

export const CityScreen = () => {
  const city = useSelector<AppStoreType, DataItemType[]>((state) =>
    state.cities.cities.filter((city) => city.isDefault),
  );

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <StatusBar hidden />
      <Text style={styles.titleText}>
        {city.length != 0 ? city[0].city : 'hello'}
      </Text>
      {city ? (
        <Icon
          name={city ? 'bookmark' : 'bookmark-outline'}
          style={{ position: 'absolute', right: 16, top: 28 }}
          size={24}
          onPress={() => {
            console.log('default');
          }}
        />
      ) : null}
      <FAB
        color={COLORS.BUTTONS_COLORS.tacao}
        onPress={toggleOverlay}
        title="?"
        style={styles.fab}
      />
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={styles.overlay}>
        <View style={styles.textOverlayContainer}>
          <Text style={styles.overlayText}>Hello!</Text>
          <Text style={styles.overlayText}>
            Just use me, if you want to know the weather
          </Text>
          <Image source={img} style={styles.imageContainer} />
        </View>
      </Overlay>
      <WeatherCardDayTemplate
        day={'123'}
        feelsLike={12}
        tempMax={12}
        tempMin={12}
      />
    </SafeAreaView>
  );
};
