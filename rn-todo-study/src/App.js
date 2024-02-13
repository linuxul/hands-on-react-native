import 'react-native-get-random-values'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WHITE } from "./colors";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./navigations/AuthStack";
import MainStack from "./navigations/MainStack";
import { useState } from "react";
import UserContext, { UserProvider } from "./contexts/UserContext";
import Navigation from "./navigations/Navigation";


const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserProvider>
      <StatusBar style="dark">
      </StatusBar>
      <Navigation></Navigation>
    </UserProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE
  }
});

export default App;
