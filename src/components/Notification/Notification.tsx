import { Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { COLORS } from '../../theme/colors';
import React from 'react';
import { styles } from './styles';

type NotificationProps = {
  checked: boolean;
  selectNotification: () => void;
  title: string;
};

export const Notification = (props: NotificationProps) => {
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
