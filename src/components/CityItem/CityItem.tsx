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

  return (
    <SafeAreaView>
      <View
        style={[
          styles.textContainer,
          {
            backgroundColor: isDefault
              ? colors.background_colors.iron
              : colors.background_colors.akaroa,
          },
        ]}>
        <Text style={styles.itemText}>{title}</Text>
        <View style={styles.iconsContainer}>
          <Icon
            type={iconsType.IONICS}
            tvParallaxProperties
            name={isDefault ? iconsName.BOOKMARK : iconsName.BOOKMARK_OUTLINE}
            onPress={() => makeDefaultPress(id)}
          />
          {citiesLen || isDefault ? null : (
            <Icon
              disabled={selectedCities.length === 1}
              tvParallaxProperties
              name={iconsName.DELETE}
              type={iconsType.MATERIAL}
              onPress={() => onDeletePress()}
            />
          )}
        </View>
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
      </View>
    </SafeAreaView>
  );
};
