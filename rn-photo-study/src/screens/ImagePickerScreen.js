import { useNavigation } from '@react-navigation/native';
import { useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderRight from '../components/HeaderRight';
import * as MediaLibrary from 'expo-media-library';

const ImagePickerScreen = () => {
  const navigation = useNavigation();
  const [status, requestPermission] = MediaLibrary.usePermissions();

  // const getPhotos = async() => {
  //   const options = {
  //     first: 30,
  //     sortBy: [MediaLibrary.SortBy.creationTime]
  //   }
  //   const res = await MediaLibrary.getAssetsAsync(options)
  //   console.log('res : ' + res.assets)
  //   console.log('image : ' + res.endCursor + ', next : ' + res.hasNextPage + ', count : ' + res.totalCount)

  // }

  // useEffect(() => {
  //   if (status?.granted) {
  //     getPhotos()
  //   }
  // }, [status?.granted])

  useEffect(() => {
    (async () => {
      const { granted } = await requestPermission();
      if (!granted) {
        Alert.alert('사진 접근 권한', '사진 접근 권한이 필요합니다.', [
          {
            text: '확인',
            onPress: () => {
              navigation.canGoBack && navigation.goBack();
            }
          }
        ]);
      }
    })();
  }, [navigation, requestPermission]);
  console.log('status : ' + status);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight onPress={() => {}}></HeaderRight>
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Image Picker</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ImagePickerScreen;
