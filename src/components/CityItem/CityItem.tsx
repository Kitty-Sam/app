import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { CityItemProps } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSelectedCity } from '../../store/actions/cities';
import { database } from '../../utils/getDataBaseURL';
import { getCurrentUser } from '../../store/selectors/loginSelector';
import { makeDefault } from '../../store/sagas/sagasActions';

export const CityItem = (props: CityItemProps): ReactElement => {
  const { title, selected, id, isDefault } = props;
  const dispatch = useDispatch();
  const current_user = useSelector(getCurrentUser);

  const onFavoritePress = async (id: string) => {
    dispatch(toggleSelectedCity(id));
    await database
      .ref(`/users/${current_user.userId}/selected`)
      .child(`${title}`)
      .remove();
  };

  const makeDefaultPress = (id: string) => {
    dispatch(makeDefault(id));
    /*  await database.ref(`/users/${current_user.userId}`).update({
        default: id,
      });

      dispatch(toggleDefaultPosition(id));*/
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
