import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions, StatusBar, Text, View } from 'react-native';
import { styles } from './styles';
import { FAB, Image, Overlay } from 'react-native-elements';
import { COLORS } from '../../theme/colors';

const { width, height } = Dimensions.get('window');

const img =
  'https://icons-for-free.com/iconfiles/png/512/fog+foggy+weather+icon-1320196634851598977.png';

export const CityScreen = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <StatusBar hidden />
      <Text style={styles.titleText}>Minsk</Text>
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
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: COLORS.TEXT_COLORS.zuccini }}>Hello!</Text>
          <Text
            style={{ color: COLORS.TEXT_COLORS.zuccini, textAlign: 'center' }}>
            Just use me, if you want to know the weather
          </Text>
          <Image
            source={{ uri: img }}
            style={{ width: width / 2, height: height / 3 }}
          />
        </View>
      </Overlay>
    </SafeAreaView>
  );
};
