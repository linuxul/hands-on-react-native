import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Button,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Pressable,
  Alert,
  Platform,
  Image
} from 'react-native';
import { MainRoutes } from '../navigations/routes';
import { GRAY, WHITE } from '../colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState, useLayoutEffect, useCallback } from 'react';
import { getLocalUri } from '../components/ImagePicker';
import HeaderRight from '../components/HeaderRight';
import ImageSwier from '../components/ImageSwiper';

const SelectPhotosScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();

  const width = useWindowDimensions().width;
  const [photos, setPhotos] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (params) {
      setPhotos(params.selectedPhotos ?? []);
    }
  }, [params]);
  console.log('photo : ' + JSON.stringify(photos));

  useEffect(() => {
    setDisabled(isLoading || !photos.length);
  }, [isLoading, photos.length]);

  const onSubmit = useCallback(async () => {
    if (!disabled) {
      setIsLoading(true);
      try {
        const localUris = await Promise.all(
          photos.map((photo) =>
            Platform.select({
              ios: getLocalUri(photo.id),
              android: photo.uri
            })
          )
        );

        console.log('localUris : ' + localUris);
        navigation.navigate(MainRoutes.WRITE_TEXT, { photoUris: localUris });
      } catch (e) {
        Alert.alert('사진 정보 조회 실패 : ' + e.message);
      }
      setIsLoading(false);
    }
  }, [disabled, photos, navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRight disabled={disabled} onPress={onSubmit}></HeaderRight>
      )
    });
  }, [navigation, disabled, onSubmit]);

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        이미지 최대 4장까지 선택 가능합니다.
      </Text>
      <View style={{ width, height: width }}>
        {photos.length ? (
          <ImageSwier photos={photos}></ImageSwier>
        ) : (
          <Pressable
            style={styles.photoButton}
            onPress={() =>
              navigation.navigate(MainRoutes.IMAGE_PICKER, { maxCount: 4 })
            }
          >
            <MaterialCommunityIcons
              name="image-plus"
              size={80}
              color={GRAY.DEFAULT}
            ></MaterialCommunityIcons>
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE
  },
  description: {
    color: GRAY.DARK,
    paddingHorizontal: 20,
    marginVertical: 10
  },
  photoButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GRAY.LIGHT
  }
});

export default SelectPhotosScreen;
