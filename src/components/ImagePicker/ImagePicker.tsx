import React, { ReactElement, useState } from 'react';
import {
  Alert,
  Image,
  PermissionsAndroid,
  ScrollView,
  View,
} from 'react-native';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import { AppButton } from '../AppButton/AppButton';
import { COLORS } from '../../theme/colors';
import { styles } from './styles';
import { DataResponseType } from './types';

export const ImagePicker = (): ReactElement => {
  const [dataFromGallery, setDataFromGallery] = useState<DataResponseType[]>(
    [],
  );

  const savePhoto = (result: ImagePickerResponse) => {
    let newItem: DataResponseType[];
    if (result.assets) {
      newItem = result.assets.map((el) => ({
        id: el.fileName,
        uri: el.uri,
      }));
    }
    setDataFromGallery((prev) => [...prev, ...newItem]);
  };

  const addPhoto = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
      ]);

      if (
        granted['android.permission.CAMERA'] ===
        PermissionsAndroid.RESULTS.GRANTED
      ) {
        await launchImageLibrary(
          {
            selectionLimit: 0,
            mediaType: 'photo',
            includeBase64: false,
          },
          savePhoto,
        );
      } else {
        Alert.alert('Give your permissions');
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const takePhoto = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
      ]);

      if (
        granted['android.permission.CAMERA'] ===
        PermissionsAndroid.RESULTS.GRANTED
      ) {
        await launchCamera({
          saveToPhotos: true,
          mediaType: 'photo',
          includeBase64: false,
        });

        await launchImageLibrary(
          {
            selectionLimit: 0,
            mediaType: 'photo',
            includeBase64: false,
          },
          savePhoto,
        );
      } else {
        Alert.alert('Give your permissions');
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.buttonsContainer}>
        <AppButton title={'take photo'} onPress={takePhoto} />
        <AppButton
          title={'add from gallery'}
          onPress={addPhoto}
          backgroundColor={COLORS.BUTTONS_COLORS.tacao}
        />
      </View>
      {dataFromGallery.length ? (
        <View>
          <ScrollView contentContainerStyle={styles.listContainer}>
            {dataFromGallery.map(({ uri, id }) => (
              <View key={id} style={styles.imageContainer}>
                <Image
                  resizeMode="cover"
                  resizeMethod="scale"
                  style={styles.image}
                  source={{ uri: uri }}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
};
