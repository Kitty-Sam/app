import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
  Image,
  LogBox,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COMMON_STACK_NAME } from '../../enum/enum';
import { StackScreenNavigationProps } from '../../navigation/authStack/types';
import { CommonStackParamList } from '../../navigation/commonStack/types';
import { AppButton } from '../../components/AppButton/AppButton';
import { buttonsName } from '../../utils/constants/buttons';
import { useDispatch, useSelector } from 'react-redux';
import { googleSignOutAction } from '../../store/sagas/sagasActions/googleSignOut';
import { fetchUserInfoAction } from '../../store/sagas/sagasActions/fetchUserData';
import {
  getCurrentUserId,
  getUserEmail,
  getUserImg,
  getUserName,
} from '../../store/selectors/loginSelector';
import { colors } from '../../theme/colors';
import { Icon, Overlay } from 'react-native-elements';
import { iconsName, iconsType } from '../../utils/constants/icons';
import { database } from '../../utils/getDataBaseURL';
import { useRoute } from '@react-navigation/native';
import { profileStyles } from './style';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export const UserProfileScreen = (
  props: StackScreenNavigationProps<
    COMMON_STACK_NAME.PROFILE,
    CommonStackParamList
  >,
) => {
  const route = useRoute();
  const { isFirst, setIsFirst } = route.params;

  const userName = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail);
  const userImg = useSelector(getUserImg);
  const userId = useSelector(getCurrentUserId);

  const [isEditMode, setEditMode] = useState<boolean>(false);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>(userName);

  const dispatch = useDispatch();

  const { width } = useWindowDimensions();
  const styles = profileStyles(width);

  const avatar = 'https://flyclipart.com/thumb2/avatar-icon-518360.png';

  useLayoutEffect(() => {
    dispatch(fetchUserInfoAction());
  }, []);

  const onLogOutPress = () => {
    dispatch(googleSignOutAction());
  };

  const onSaveChangedNamePress = async () => {
    await database.ref(`/users/${userId}`).update({
      userName: newName,
    });
    setEditMode(false);
  };

  useEffect(() => {
    setNewName(userName);
  }, [userName]);

  useEffect(() => {
    setIsFirst(true);
    isFirst ||
      setTimeout(() => {
        setVisible(true);
      }, 500);
  }, [isFirst]);

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <Overlay
        onBackdropPress={() => setVisible(false)}
        isVisible={isVisible}
        overlayStyle={styles.overlay}>
        <Text style={styles.text}>
          {newName || 'user'}, you can change your NickName, if you want!
        </Text>
      </Overlay>
      <View style={styles.avatarContainer}>
        <View style={styles.buttonContainer}>
          <AppButton onPress={onLogOutPress} title={buttonsName.LOG_OUT} />
        </View>

        <Image
          source={{ uri: userImg ? userImg : avatar }}
          style={styles.avatar}
        />
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.text}>Hey,</Text>
          {isEditMode ? (
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TextInput
                value={newName}
                onChangeText={setNewName}
                style={styles.textInput}
                autoFocus={true}
                maxLength={19}
                onSubmitEditing={onSaveChangedNamePress}
              />

              <Icon
                tvParallaxProperties
                name={iconsName.SAVE}
                type={iconsType.IONICON}
                size={24}
                color={colors.text_colors.zuccini}
                onPress={onSaveChangedNamePress}
                containerStyle={{ marginTop: 8 }}
              />
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={styles.textName}>{newName}</Text>
              <Icon
                tvParallaxProperties
                name={iconsName.EDIT}
                type={iconsType.IONICON}
                size={24}
                color={colors.text_colors.zuccini}
                onPress={() => {
                  setEditMode(true);
                }}
                containerStyle={{ marginTop: 8 }}
              />
            </View>
          )}
        </View>
        <Text style={styles.text}>Email: {userEmail}</Text>
      </View>
    </SafeAreaView>
  );
};
