import { StyleSheet, Text, View } from 'react-native';
import { WHITE } from '../colors';
import { useEffect, useState } from 'react';
import { getPosts } from '../api/post';
import PostList from '../components/PostList';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ListScreen = () => {
  const { top } = useSafeAreaInsets();
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const list = await getPosts();
      console.log('posts : ' + JSON.stringify(list));
      setData(list);
    })();
  }, []);

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <PostList data={data}></PostList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE
  }
});

export default ListScreen;
