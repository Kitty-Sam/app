import React, { useState } from 'react';
import { FlatList, FlatListProps, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton } from '../../components/AppButton/AppButton';
import { COMMON_STACK_NAME } from '../../enum/enum';
import { Notification } from '../../components/Notification/Notification';
import { styles } from './style';
import { NotificationItemType } from './types';
import { StackScreenNavigationProps } from '../../navigation/authStack/types';
import { CommonStackParamList } from '../../navigation/commonStack/types';
import { keyExtractor } from '../../utils/keyExtractor';

export const NOTIFICATIONS: NotificationItemType[] = [
  { id: 1, title: 'max temperature', shortTitle: 'temp_max' },
  { id: 2, title: 'min temperature', shortTitle: 'temp_min' },
  { id: 3, title: 'pressure', shortTitle: 'pressure' },
  { id: 4, title: 'wind', shortTitle: 'wind' },
  { id: 5, title: 'humidity', shortTitle: 'humidity' },
];

export const NotificationsScreen = (
  props: StackScreenNavigationProps<
    COMMON_STACK_NAME.NOTIFICATIONS,
    CommonStackParamList
  >,
) => {
  const { route, navigation } = props;
  const cityTitle = route.params.title;

  const [chosenValuesIds, setChosenValuesIds] = useState<number[]>([]);

  const onSendButtonPress = () => {
    navigation.navigate(COMMON_STACK_NAME.WEATHER, {
      title: cityTitle,
      selectedIds: chosenValuesIds,
    });
  };

  const onCheckBoxPress = (id: number) => {
    setChosenValuesIds((prev) => [...prev, id]);
  };

  const renderItem: FlatListProps<NotificationItemType>['renderItem'] = ({
    item,
  }) => {
    const notificationItemIsSelected = !!chosenValuesIds.find(
      (selectedItem) => selectedItem === item.id,
    );

    return (
      <Notification
        key={item.id}
        title={item.title}
        selectNotification={() => onCheckBoxPress(item.id)}
        checked={notificationItemIsSelected}
      />
    );
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']}>
      <StatusBar hidden />
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>{cityTitle}</Text>
        <Text style={styles.itemText}>Choose necessary parameters</Text>
      </View>
      <FlatList
        style={styles.listContainer}
        keyExtractor={keyExtractor}
        data={NOTIFICATIONS}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.buttonContainer}>
        <AppButton
          onPress={onSendButtonPress}
          title="Go"
          disabled={chosenValuesIds.length === 0}
        />
      </View>
    </SafeAreaView>
  );
};
