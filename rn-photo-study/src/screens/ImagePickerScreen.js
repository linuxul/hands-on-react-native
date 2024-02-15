import { useNavigation, useNavigationState } from '@react-navigation/native';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
  useRef
} from 'react';
import HeaderRight from '../components/HeaderRight';
import * as MediaLibrary from 'expo-media-library';
import {
  Alert,
  StyleSheet,
  View,
  FlatList,
  Image,
  Pressable,
  useWindowDimensions,
  Platform
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PRIMARY } from '../colors';
import { BlurView } from 'expo-blur';

const initialListInfo = { endCursor: '', hasNextPage: true };

const ImagePickerScreen = () => {
  const navigation = useNavigation();
  const [status, requestPermission] = MediaLibrary.usePermissions();

  const width = useWindowDimensions().width / 3;
  const [photos, setPhotos] = useState([]);
  const listInfo = useRef(initialListInfo);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const stateRoutes = useNavigationState((state) => state.routes);
  // console.log('state : ' + JSON.stringify(state))

  const onSelect = useCallback(() => {
    const prevScreenName = stateRoutes[stateRoutes.length - 2].name;
    navigation.navigate(prevScreenName, { selectedPhotos });
  }, [navigation, selectedPhotos, stateRoutes]);

  const getPhotos = useCallback(async () => {
    const options = {
      first: 30,
      sortBy: [MediaLibrary.SortBy.creationTime]
    };

    if (listInfo.current.endCursor) {
      options['after'] = listInfo.current.endCursor;
    }

    if (listInfo.current.hasNextPage) {
      const { assets, endCursor, hasNextPage } =
        await MediaLibrary.getAssetsAsync(options);
      setPhotos((prev) => (options.after ? [...prev, ...assets] : assets));
      listInfo.current = { endCursor, hasNextPage };
    }
  }, []);
  console.log('photo : ' + photos.length);

  const onRefresh = async () => {
    setRefreshing(true);
    listInfo.current = initialListInfo;
    await getPhotos();
    setRefreshing(false);
  };

  useEffect(() => {
    if (status?.granted) {
      getPhotos();
    }
  }, [getPhotos, status?.granted]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRight
          disabled={selectedPhotos.length < 1}
          onPress={onSelect}
        ></HeaderRight>
      )
    });
  }, [navigation, onSelect, selectedPhotos.length]);

  const isSelectedPhoto = (photo) => {
    return selectedPhotos.findIndex((item) => item.id === photo.id) > -1;
  };

  const togglePhoto = (photo) => {
    const isSelected = isSelectedPhoto(photo);
    setSelectedPhotos((prev) =>
      isSelected
        ? prev.filter((item) => item.id !== photo.id)
        : [...prev, photo]
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={photos}
        renderItem={({ item }) => {
          const isSelected = isSelectedPhoto(item);
          return (
            <Pressable
              style={{ width, height: width }}
              onPress={() => togglePhoto(item)}
            >
              <Image source={{ uri: item.uri }} style={styles.photo}></Image>
              {isSelected && (
                <BlurView
                  style={[StyleSheet.absoluteFill, styles.checkIcon]}
                  intensity={Platform.select({ ios: 10, android: 50 })}
                >
                  <MaterialCommunityIcons
                    name="check-circle"
                    size={40}
                    color={PRIMARY.DEFAULT}
                  ></MaterialCommunityIcons>
                </BlurView>
              )}
            </Pressable>
          );
        }}
        numColumns={3}
        onEndReached={getPhotos}
        onEndReachedThreshold={0.4}
        onRefresh={onRefresh}
        refreshing={refreshing}
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
  },
  checkIcon: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ImagePickerScreen;
