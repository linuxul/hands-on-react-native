import { StyleSheet, Text, View } from 'react-native';
import { WHITE } from '../colors';
import MapView, { Marker } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LocationSearch from '../components/LocationSearch';
import { useState } from 'react';
import LocationPostList from '../components/LocationPostList';

const MapScreen = () => {
  const { top } = useSafeAreaInsets();

  const [location, setLocation] = useState({
    latitudeDelta: 0.1,
    longitudeDelta: 0.1
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={location.latitude && location.longitude ? location : null}
      >
        {location.latitude && location.longitude && (
          <Marker coordinate={location} title={location.name}></Marker>
        )}
      </MapView>

      <LocationSearch
        styles={{
          container: {
            ...styles.location,
            paddingTop: top
          }
        }}
        iconVisible={false}
        onPress={(data, detail) => {
          console.log('data : ' + JSON.stringify(data));

          const {
            geometry: {
              location: { lat, lng }
            }
          } = detail;

          setLocation((prev) => ({
            ...prev,
            name: data.description,
            latitude: lat,
            longitude: lng
          }));
        }}
      ></LocationSearch>
      {location.name && (
        <View style={styles.list}>
          <LocationPostList location={location.name}></LocationPostList>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  map: {
    width: '100%',
    height: '100%'
  },
  location: {
    position: 'absolute',
    width: '90%',
    borderBottomWidth: 0
  },
  list: {
    width: '100%',
    position: 'absolute',
    bottom: 40,
    paddingHorizontal: 40
  }
});

export default MapScreen;
