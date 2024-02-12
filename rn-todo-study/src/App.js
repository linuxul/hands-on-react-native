import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignInScreen from "./screens/SignInScreen";
import TestAvoid from "./screens/TestAvoid";
import { WHITE } from "./colors";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./navigations/AuthStack";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="dark"></StatusBar>
      <AuthStack></AuthStack>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE
  }
});

export default App;
