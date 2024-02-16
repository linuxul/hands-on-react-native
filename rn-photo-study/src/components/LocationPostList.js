import { FlatList, StyleSheet, View } from 'react-native';
import PostItem from './PostItem';
import { GRAY } from '../colors';
import usePosts from '../hooks/usePosts';
import { useEffect } from 'react';
import event, { EventTypes } from '../event';
import { useUserState } from '../contexts/UserContext';
import PropTypes from 'prop-types';
import usePostsByLocation from '../hooks/usePostsByLocation';
import FastImage from './FastImage';
import { memo } from 'react';

const LocationPostItem = memo(({ uri }) => {
  return (
    <View style={{ paddingHorizontal: 5 }}>
      <FastImage
        source={{ uri }}
        style={{ width: 150, height: 150 }}
      ></FastImage>
    </View>
  );
});

LocationPostItem.displayName = 'LocationPostItem';
LocationPostItem.propTypes = {
  uri: PropTypes.string.isRequired
};

const LocationPostList = ({ location }) => {
  const { data, fetchNextPage } = usePostsByLocation(location);

  return (
    <FlatList
      horizontal={true}
      data={data}
      keyExtractor={(_, idx) => idx.toString()}
      renderItem={({ item }) => (
        <LocationPostItem uri={item}></LocationPostItem>
      )}
      onEndReached={fetchNextPage}
    ></FlatList>
  );
};

LocationPostList.propTypes = {
  location: PropTypes.string.isRequired
};

export default LocationPostList;
