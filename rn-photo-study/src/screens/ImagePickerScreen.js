import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import HeaderRight from '../components/HeaderRight';
import * as MediaLibrary from 'expo-media-library';
import {
  Alert,
  StyleSheet,
  View,
  FlatList,
  Image,
  Pressable,
  useWindowDimensions
} from 'react-native';

const ImagePickerScreen = () => {
  const navigation = useNavigation();
  const [status, requestPermission] = MediaLibrary.usePermissions();

  const width = useWindowDimensions().width / 3;
  const [photos, setPhotos] = useState([]);
  const [listInfo, setListInfo] = useState({
    endCursor: '',
    hasNextPage: true
  });

  const getPhotos = async () => {
    const options = {
      first: 30,
      sortBy: [MediaLibrary.SortBy.creationTime]
    };

    if (listInfo.hasNextPage) {
      const { assets, endCursor, hasNextPage } =
        await MediaLibrary.getAssetsAsync(options);
      setPhotos((prev) => [...prev, ...assets]);
      setListInfo({ endCursor, hasNextPage });
    }

    // const res = await MediaLibrary.getAssetsAsync(options);
    // console.log('res : ' + res.assets);
    // console.log(
    //   'image : ' +
    //     res.endCursor +
    //     ', next : ' +
    //     res.hasNextPage +
    //     ', count : ' +
    //     res.totalCount
    // );
  };

  useEffect(() => {
    if (status?.granted) {
      getPhotos();
    }
  }, [status?.granted]);

  // useEffect(() => {
  //   (async () => {
  //     const { granted } = await requestPermission();
  //     if (!granted) {
  //       Alert.alert('사진 접근 권한', '사진 접근 권한이 필요합니다.', [
  //         {
  //           text: '확인',
  //           onPress: () => {
  //             navigation.canGoBack && navigation.goBack();
  //           }
  //         }
  //       ]);
  //     }
  //   })();
  // }, [navigation, requestPermission]);
  console.log('status : ' + status);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight onPress={() => {}}></HeaderRight>
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={photos}
        renderItem={({ item }) => (
          <Pressable style={{ width, height: width }}>
            <Image source={{ uri: item.uri }} style={styles.photo}></Image>
          </Pressable>
        )}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    width: '100%'
  },
  photo: {
    width: '100%',
    height: '100%'
  }
});

export default ImagePickerScreen;
