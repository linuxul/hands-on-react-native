import { StatusBar } from 'expo-status-bar';
import Navigation from './navigations/Navigation';
import { LogBox } from 'react-native';

const App = () => {

  LogBox.ignoreLogs([
    'AsyncStorage. Auth state will default to memory'
  ])

  return (
    <>
      <StatusBar style="dark"></StatusBar>
      <Navigation></Navigation>
    </>
  );
};

export default App;
