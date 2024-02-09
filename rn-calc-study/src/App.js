import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  console.log('start app');
  console.log(true && 'React Native');
  console.log(false && 'React Native');
  console.log('React Native' && true);
  console.log('React Native' && false);
  console.log('jsseo' && 'React Native');
  console.log('' && 'React Native');
  console.log('React Native' && {});
  console.log({} && 'React Native');
  console.log(null && 'React Native');
  console.log(0 && 'React Native');

  const isError = false;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Calc App</Text>
      <Text style={styles.text}>StyleSheet</Text>
      <Text style={styles.error}>Error</Text>
      <Text style={[styles.text, styles.error]}>Style Text, Error</Text>
      <Text style={[styles.error, styles.text]}>Style Text, Error</Text>
      <Text style={[styles.text, isError && styles.error]}>Error && 연산자</Text>
      {/* <Text
        style={{
          fontSize: 30,
          fontWeight: '700',
          color: 'green',
          backgroundColor: 'yellow',
          borderWidth: 1,
          borderColor: 'blue',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        Calc App!!
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    color: 'green',
    backgroundColor: 'yellow',
    borderWidth: 1,
    borderColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  error: {
    fontSize: 30,
    fontWeight: '700',
    color: 'red',
  }
});

export default App;
