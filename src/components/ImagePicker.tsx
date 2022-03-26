import * as React from 'react';
import { useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import { AppButton } from './AppButton';
import { COLORS } from '../theme/colors';

type DataResponseType = {
  id?: string;
  uri?: string;
};

export const ImagePicker = () => {
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
    await launchImageLibrary(
      {
        selectionLimit: 0,
        mediaType: 'photo',
        includeBase64: false,
      },
      savePhoto,
    );
  };

  const takePhoto = async () => {
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
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <AppButton title={'take photo'} onPress={takePhoto} />
        <AppButton
          title={'add from gallery'}
          onPress={addPhoto}
          backgroundColor={COLORS.BUTTONS_COLORS.tacao}
        />
      </View>
      {dataFromGallery.length ? (
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            // showsHorizontalScrollIndicator: false,
          }}>
          {dataFromGallery.map(({ uri, id }) => (
            <View
              key={id}
              style={{
                flexDirection: 'row',
                marginVertical: 16,
              }}>
              <Image
                resizeMode="cover"
                resizeMethod="scale"
                style={{ width: 200, height: 200 }}
                source={{ uri: uri }}
              />
            </View>
          ))}
        </ScrollView>
      ) : null}
    </View>
  );
};
