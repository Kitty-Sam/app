import React, { ReactElement, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Icon, Overlay } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { CityItemProps, ContextAnimationType } from './types';
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
  runOnJS,
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
  const { title, id, isDefault, update, trashVisibleId } = props;

  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const selectedCities = useSelector(getSelectedCities);
  const citiesLen = selectedCities.length === 1;
  const translateX = useSharedValue(0);

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

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  const rIconContainer = useAnimatedStyle(() => {
    const opacity = withTiming(Math.abs(translateX.value) < 50 ? 0 : 1);
    return { opacity };
  });

  useEffect(() => {
    if (trashVisibleId !== id && trashVisibleId !== null) {
      translateX.value = withTiming(0);
    }
  }, [trashVisibleId]);

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextAnimationType
  >({
    onStart: () => {
      translateX.value = withTiming(0);
    },

    onActive: (event, context) => {
      translateX.value = event.translationX;
    },
    onEnd: (event, context) => {
      const positionX = event.translationX;

      -positionX > 50
        ? (translateX.value = withTiming(-50))
        : (translateX.value = withTiming(0));

      runOnJS(update)(id);
    },
  });

  return (
    <SafeAreaView>
      {citiesLen || isDefault ? null : (
        <Animated.View style={[styles.trashIconContainer, rIconContainer]}>
          <Icon
            style={{ marginHorizontal: 8 }}
            disabled={selectedCities.length === 1}
            tvParallaxProperties
            name={iconsName.DELETE}
            type={iconsType.MATERIAL}
            onPress={() => onDeletePress()}
          />
        </Animated.View>
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
