import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WHITE } from "./colors";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./navigations/AuthStack";
import MainStack from "./navigations/MainStack";
import { useState } from "react";
import UserContext from "./contexts/UserContext";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <StatusBar style="dark"></StatusBar>
        {user ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </UserContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE
  }
});

export default App;
