import { Button, StyleSheet, Text, View } from "react-native";

const ListScreen = ({ navigation }) => {
  console.log(navigation);
  // console.log("rendering ListScreen: ", route.params);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>List Screen</Text>
      <Button title="Push" onPress={() => navigation.push("List")}></Button>
      <Button
        title="navigate"
        onPress={() => navigation.navigate("List")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ListScreen;
