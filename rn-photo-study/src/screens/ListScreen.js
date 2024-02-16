import { StyleSheet, Text, View } from 'react-native';
import { WHITE } from '../colors';
import { useEffect, useState, useRef, useCallback } from 'react';
import { getPosts } from '../api/post';
import PostList from '../components/PostList';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ListScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <PostList></PostList>
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
