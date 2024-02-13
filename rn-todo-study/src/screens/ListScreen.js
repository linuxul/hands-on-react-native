import { Pressable, FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "../components/ListItem";
import { GRAY } from "../colors";

const Seperator = () => {
  return <View style={styles.separator}></View>;
};

const ListScreen = ({ navigation }) => {
  console.log(navigation);
  const todos = [
    { id: 1, task: "React Native", isDone: false },
    { id: 2, task: "FlattList", isDone: false },
    { id: 3, task: "React Navigation", isDone: true },
    { id: 4, task: "TODO App", isDone: false },
    { id: 5, task: "React.memo", isDone: true }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ListItem item={item}></ListItem>}
        windowSize={5}
        ItemSeparatorComponent={Seperator}
        ListHeaderComponent={View}
        ListHeaderComponentStyle={{height: 10}}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: GRAY.LIGHT,
    marginVertical: 10,
    marginHorizontal: 10
  }
});

export default ListScreen;
