import React, { ReactElement, useState } from 'react';
import { Text, View } from 'react-native';
import { Icon, Overlay } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { CityItemProps } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../theme/colors';
import { iconsName, iconsType } from '../../utils/constants/icons';
import { getSelectedCities } from '../../store/selectors/citySelector';
import { AppButton } from '../AppButton/AppButton';
import { buttonsName } from '../../utils/constants/buttons';
import { useTranslation } from 'react-i18next';
import {
  deleteItemAction,
  deleteItemPayload,
} from '../../store/sagas/sagasActions/deleteItem';
import {
  makeDefaultItemAction,
  makeDefaultItemPayload,
} from '../../store/sagas/sagasActions/makeDefaultItem';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

export const CityItem = (props: CityItemProps): ReactElement => {
  const { title, id, isDefault } = props;

  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const selectedCities = useSelector(getSelectedCities);

  const citiesLen = selectedCities.length === 1;

  const onDeletePress = () => {
    toggleOverlay();
  };

  const deleteItemPress = (id: deleteItemPayload['id']) => {
    dispatch(deleteItemAction({ id, title }));
  };

  const makeDefaultPress = (id: makeDefaultItemPayload['id']) => {
    dispatch(makeDefaultItemAction({ id }));
  };
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const translateX = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  type ContextAnimationType = {
    translateX: number;
  };

  const [isMovedItem, setMovedItem] = useState<boolean>(false);
  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextAnimationType
  >({
    onActive: (event, context) => {
      translateX.value = event.translationX;
    },
    onEnd: (event, context) => {
      console.log('visible', visible);
      const positionX = event.translationX;

      /*  if (Math.abs(positionX) > 100) {
        translateX.value = withTiming(-50);
        setMovedItem(true);
      } else {
        translateX.value = withTiming(0);
      }*/
      Math.abs(positionX) > 100
        ? (translateX.value = withTiming(-50))
        : (translateX.value = withTiming(0));
    },
  });

  return (
    <SafeAreaView>
      {citiesLen || isDefault ? null : (
        <View
          style={{
            position: 'absolute',
            right: 18,
            top: 6,
            backgroundColor: 'orange',
            padding: 4,
            borderRadius: 4,
          }}>
          <Icon
            style={{ marginHorizontal: 8 }}
            disabled={selectedCities.length === 1}
            tvParallaxProperties
            name={iconsName.DELETE}
            type={iconsType.MATERIAL}
            onPress={() => onDeletePress()}
          />
        </View>
      )}
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View
          style={[
            styles.textContainer,
            {
              backgroundColor: isDefault
                ? colors.background_colors.iron
                : colors.background_colors.akaroa,
            },
            rStyle,
          ]}>
          <Text style={styles.itemText}>{title}</Text>
          <View style={styles.iconsContainer}>
            <Icon
              type={iconsType.IONICS}
              tvParallaxProperties
              name={isDefault ? iconsName.BOOKMARK : iconsName.BOOKMARK_OUTLINE}
              onPress={() => makeDefaultPress(id)}
            />
          </View>
        </Animated.View>
      </PanGestureHandler>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={styles.overlayContainer}>
        <View style={styles.overlay}>
          <Text style={styles.text}>{t('listScreen.delete')}</Text>
          <View style={styles.buttonsContainer}>
            <AppButton
              onPress={() => {
                deleteItemPress(id);
              }}
              title={buttonsName.YES}
            />
            <AppButton
              onPress={() => {
                toggleOverlay();
              }}
              title={buttonsName.CLOSE}
              backgroundColor={colors.button_colors.tacao}
            />
          </View>
        </View>
      </Overlay>
    </SafeAreaView>
  );
};
