import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { CityItemProps } from './types';
import { useDispatch } from 'react-redux';
import {
  toggleDefaultPosition,
  toggleSelectedCity,
} from '../../store/actions/cities';

export const CityItem = (props: CityItemProps): ReactElement => {
  const { title, selected, id, isDefault } = props;
  const dispatch = useDispatch();

  const onFavoritePress = (id: number) => {
    dispatch(toggleSelectedCity(id));
  };

  const makeDefaultPress = (id: number) => {
    dispatch(toggleDefaultPosition(id));
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']}>
      <View style={styles.textContainer}>
        <Text style={styles.itemText}>{title}</Text>
        <View style={{ flexDirection: 'row' }}>
          {selected && (
            <Icon
              tvParallaxProperties
              name={isDefault ? 'bookmark' : 'bookmark-outline'}
              onPress={() => makeDefaultPress(id)}
            />
          )}
          <Icon
            tvParallaxProperties
            name={selected ? 'star' : 'star-outline'}
            type="ionics"
            onPress={() => onFavoritePress(id)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
