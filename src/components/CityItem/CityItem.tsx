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
import { COLORS } from '../../theme/colors';
import { iconsName, iconsType } from '../../utils/constants/icons';
import { getSelectedCities } from '../../store/selectors/citySelector';

export const CityItem = (props: CityItemProps): ReactElement => {
  const { title, id, isDefault } = props;

  const dispatch = useDispatch();

  const current_user = useSelector(getCurrentUser);
  const selectedCities = useSelector(getSelectedCities);

  const onDeletePress = async (id: string) => {
    dispatch(toggleSelectedCity(id));
    await database
      .ref(`/users/${current_user.userId}/selected`)
      .child(`${title}`)
      .remove();
  };

  const makeDefaultPress = (id: string) => {
    dispatch(makeDefault(id));
  };

  return (
    <SafeAreaView>
      <View
        style={[
          styles.textContainer,
          {
            backgroundColor: isDefault
              ? COLORS.BACKGROUND_COLORS.iron
              : COLORS.BACKGROUND_COLORS.akaroa,
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
          {selectedCities.length === 1 || isDefault ? null : (
            <Icon
              disabled={selectedCities.length === 1}
              tvParallaxProperties
              name={iconsName.DELETE}
              type={iconsType.MATERIAL}
              onPress={() => onDeletePress(id)}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
