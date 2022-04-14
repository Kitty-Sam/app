import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../theme/colors';
import { styles } from './style';
import { AppButtonWithImg } from '../../components/AppButtonWithImg/AppButtonWithImg';
import { AUTH_NAVIGATION_NAME } from '../../enum/enum';
import {
  AuthStackParamList,
  StackScreenNavigationProps,
} from '../../navigation/authStack/types';
import { useDispatch, useSelector } from 'react-redux';
import { requestStatus } from '../../store/reducers/appReducer';
import { selectStatusApp } from '../../store/selectors/appSelector';
import { facebookSignIn, googleSignIn } from '../../store/sagas/sagasActions';

enum buttonsName {
  FACEBOOK = 'Login with facebook',
  GOOGLE = 'Login with google',
}

enum iconsName {
  FACEBOOK = 'facebook',
  GOOGLE = 'google-plus',
}

export const LoginScreen = (
  props: StackScreenNavigationProps<
    AUTH_NAVIGATION_NAME.LOGIN,
    AuthStackParamList
  >,
) => {
  const statusApp = useSelector(selectStatusApp);

  const dispatch = useDispatch();

  const onGoogleButtonPress = () => {
    dispatch(googleSignIn());
  };

  const onFacebookButtonPress = () => {
    dispatch(facebookSignIn());
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      {statusApp === requestStatus.LOADING ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator />
        </View>
      ) : (
        <View>
          <Text>Weather App</Text>
          <AppButtonWithImg
            onPress={onFacebookButtonPress}
            backgroundColor={COLORS.BACKGROUND_COLORS.facebook}
            title={buttonsName.FACEBOOK}
            icon={iconsName.FACEBOOK}
          />
          <AppButtonWithImg
            onPress={onGoogleButtonPress}
            backgroundColor={COLORS.BUTTONS_COLORS.tacao}
            title={buttonsName.GOOGLE}
            icon={iconsName.GOOGLE}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
