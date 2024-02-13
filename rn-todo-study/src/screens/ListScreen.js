import { memo } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

const ListItem = memo(({ item }) => {
  console.log("item id : " + item.id);

  return (
    <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 20 }}>{item.task}</Text>
    </View>
  );
});

const ListScreen = ({ navigation }) => {
  console.log(navigation);
  const todos = [];
  for (let i = 1; i < 500; i++) {
    // todos.push({ value: i });
    todos.push({ id: i, task: `task :: ${i}` });
  }

  return (
    <View style={styles.container}>
      <FlatList
        windowSize={5}
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ListItem item={item}></ListItem>}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: "center",
    // alignItems: "center"
  }
});

export default ListScreen;
