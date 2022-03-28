import * as React from 'react';
import { useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import { AppButton } from '../AppButton/AppButton';
import { COLORS } from '../../theme/colors';
import { styles } from './styles';
import { DataResponseType } from './types';

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
      <View style={styles.buttonsContainer}>
        <AppButton title={'take photo'} onPress={takePhoto} />
        <AppButton
          title={'add from gallery'}
          onPress={addPhoto}
          backgroundColor={COLORS.BUTTONS_COLORS.tacao}
        />
      </View>
      {dataFromGallery.length ? (
        <ScrollView
          contentContainerStyle={styles.listContainer}
          showsHorizontalScrollIndicator={false}>
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
      ) : null}
    </View>
  );
};

/*
const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  image: {
    width: width / 2,
    height: height / 3,
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
*/
