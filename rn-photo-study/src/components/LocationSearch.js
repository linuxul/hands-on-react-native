import { StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GRAY, PRIMARY } from '../colors';
import { MAP_KEY } from '../../env';
import PropTypes from 'prop-types';

const LocationSearch = ({ styles, onPress, isLoading, isSelected }) => {
  return (
    <View style={[defaultStyles.container, styles?.container]}>
      <GooglePlacesAutocomplete
        placeholder="Location"
        styles={{ container: { flex: 0 }, textInput: { paddingLeft: 30 } }}
        onPress={onPress}
        onFail={(e) => {
          console.log('GooglePlacesAutocomplate onFail : ' + JSON.stringify(e));
        }}
        query={{ key: MAP_KEY, language: 'ko' }}
        debounce={400}
        enablePoweredByContainer={false}
        textInputProps={{ editable: !isLoading }}
      ></GooglePlacesAutocomplete>
      <View style={[defaultStyles.icon, styles?.icon]}>
        <MaterialCommunityIcons
          name="map-marker"
          size={20}
          color={isSelected ? PRIMARY.DEFAULT : GRAY.LIGHT}
        ></MaterialCommunityIcons>
      </View>
    </View>
  );
};

LocationSearch.defaultProps = {
  isLoading: false,
  isSelected: false
};

LocationSearch.propTypes = {
  styles: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isSelected: PropTypes.bool
};

const defaultStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: GRAY.LIGHT
  },
  icon: {
    position: 'absolute',
    left: 20,
    top: 16
  }
});

export default LocationSearch;
