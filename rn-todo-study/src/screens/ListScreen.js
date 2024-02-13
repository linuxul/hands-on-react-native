import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

const ListScreen = ({ navigation }) => {
  console.log(navigation);
  // console.log("rendering ListScreen: ", route.params);

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
        renderItem={({ item }) => {
          console.log("item id : " + item.id);
          return (
            <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 20 }}>{item.task}</Text>
            </View>
          );
        }
      }
      ></FlatList>
    </View>
  );

  // return (
  //   <View style={styles.container}>
  //     <FlatList
  //       data={todos}
  //       renderItem={({ item }) => {
  //         console.log("item value : " + item.value);
  //         return (
  //           <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
  //             <Text style={{ fontSize: 20 }}>{item.value}</Text>
  //           </View>
  //         );
  //       }}
  //     ></FlatList>
  //   </View>
  // );

  // return (
  //   <View style={styles.container}>
  //     <ScrollView>
  //       {todos.map((item, index) => {
  //         console.log("value : " + item.value)
  //         return (
  //           <View
  //             key={index}
  //             style={{ paddingVertical: 10, paddingHorizontal: 20 }}
  //           >
  //             <Text style={{ fontSize: 20 }}>{item.value}</Text>
  //           </View>
  //         );
  //       })}
  //     </ScrollView>
  //   </View>
  // );

  // return (
  //   <View style={styles.container}>
  //     <Text style={{ fontSize: 30 }}>List Screen</Text>
  //     <Button title="Push" onPress={() => navigation.push("List")}></Button>
  //     <Button
  //       title="navigate"
  //       onPress={() => navigation.navigate("List")}
  //     ></Button>
  //   </View>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: "center",
    // alignItems: "center"
  }
});

export default ListScreen;
