import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const UseStateTest = () => {
  const [result, setResult] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{result}</Text>

      <Button title="+" onPress={() => setResult((prev) => prev + 1)}></Button>
      <Button title="-" onPress={() => setResult((prev) => prev - 1)}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 30
  }
});

export default UseStateTest;
