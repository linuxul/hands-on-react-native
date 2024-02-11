import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignInScreen from "./screens/SignInScreen";
import TestAvoid from "./screens/TestAvoid";
import { WHITE } from "./colors";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark"></StatusBar>
      <SignInScreen></SignInScreen>
      {/* <TestAvoid /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE
  }
});

export default App;
