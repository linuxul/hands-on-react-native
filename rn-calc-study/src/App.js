import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button, { ButtonTypes } from "./components/Button";
import React, { useState } from "react";

const App = () => {
  console.log("###### start app ######");

  const [result, setResult] = useState(0);
  console.log("rendering: ", result);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.resultContainer}>
        <Text style={styles.text}>{result}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text>Button</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center"
  },
  text: {
    fontSize: 60,
    fontWeight: "700",
    color: "#ffffff",
    paddingBottom: 30,
    paddingRight: 30,
  },
  resultContainer: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "#a5b4fc"
  }
});

export default App;
