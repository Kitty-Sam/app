import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../theme/colors';
import { loginStyles } from './style';
import { AppButtonWithImg } from '../../components/AppButtonWithImg/AppButtonWithImg';
import { AUTH_NAVIGATION_NAME } from '../../enum/enum';
import {
  AuthStackParamList,
  StackScreenNavigationProps,
} from '../../navigation/authStack/types';
import { useDispatch, useSelector } from 'react-redux';
import { requestStatus } from '../../store/reducers/appReducer';
import { selectStatusApp } from '../../store/selectors/appSelector';
import { buttonsName } from '../../utils/constants/buttons';
import { iconsName } from '../../utils/constants/icons';
import { facebookSignInAction } from '../../store/sagas/sagasActions/facebookSignIn';
import { googleSignInAction } from '../../store/sagas/sagasActions/googleSignIn';
import { fetchUsersAction } from '../../store/sagas/sagasActions/fetchUsers';

export const LoginScreen = (
  props: StackScreenNavigationProps<
    AUTH_NAVIGATION_NAME.LOGIN,
    AuthStackParamList
  >,
) => {
  const statusApp = useSelector(selectStatusApp);

  const dispatch = useDispatch();

  const { width } = useWindowDimensions();
  const styles = loginStyles(width);

  useEffect(() => {
    dispatch(fetchUsersAction());
  }, []);

  const onGoogleButtonPress = () => {
    dispatch(googleSignInAction());
  };

  const onFacebookButtonPress = () => {
    dispatch(facebookSignInAction());
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      {statusApp === requestStatus.LOADING ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator />
        </View>
      ) : (
        <View>
          <Text style={styles.text}>Weather Now</Text>
          <AppButtonWithImg
            onPress={onFacebookButtonPress}
            backgroundColor={colors.background_colors.facebook}
            title={buttonsName.FACEBOOK}
            icon={iconsName.FACEBOOK}
          />
          <AppButtonWithImg
            onPress={onGoogleButtonPress}
            backgroundColor={colors.button_colors.tacao}
            title={buttonsName.GOOGLE}
            icon={iconsName.GOOGLE}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
