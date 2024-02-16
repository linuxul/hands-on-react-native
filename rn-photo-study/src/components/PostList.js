import { FlatList, StyleSheet, View } from 'react-native';
import PostItem from './PostItem';
import { GRAY } from '../colors';
import PropTypes from 'prop-types';
import usePosts from '../hooks/usePosts';

const PostList = () => {
  const { data, fetchNextPage, refetch, refetching } = usePosts();

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <PostItem post={item}></PostItem>}
      ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      onEndReached={fetchNextPage}
      refreshing={refetching}
      onRefresh={refetch}
    ></FlatList>
  );
};

PostList.propTypes = {
  data: PropTypes.array.isRequired,
  fetchNextPage: PropTypes.func,
  refreshing: PropTypes.bool,
  refetch: PropTypes.func
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 20,
    borderBottomColor: GRAY.LIGHT,
    borderBottomWidth: 0.5
  }
});

export default PostList;
