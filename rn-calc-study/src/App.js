import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";

const App = () => {
  console.log("###### start app ######");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Calc App</Text>
      {/* <Button title="button" onPress={() => console.log('Click!!')} style={{ backgroundColor: 'black', color: 'white' }} /> */}
      {/* <Button title="button" onPress={() => console.log('Click!!')} color="purple" backgroundColor="blue" /> */}
      {/* <Button title="button" onPress={() => console.log('Click!!')} color="red" /> */}
      {/* <MyButton>My Button</MyButton> */}
      {/* <Button title="My Button#">My Button</Button> */}
      <Button onPress={() => console.log("click!")} color="purple"></Button>
      <Button title="title" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
    color: "green",
    backgroundColor: "yellow",
    borderWidth: 1,
    borderColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  error: {
    fontSize: 30,
    fontWeight: "700",
    color: "red"
  }
});

export default App;
