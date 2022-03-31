import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { COLORS } from '../../theme/colors';
import { styles } from './styles';
import { NotificationProps } from './types';

export const Notification = (props: NotificationProps): ReactElement => {
  const { title, checked, selectNotification } = props;

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{title}</Text>
      <CheckBox
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={checked}
        onPress={selectNotification}
        checkedColor={COLORS.BUTTONS_COLORS.default_button_Buddha_Gold}
      />
    </View>
  );
};
