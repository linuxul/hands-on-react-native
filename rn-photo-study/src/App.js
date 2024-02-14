import { StatusBar } from 'expo-status-bar';
import Navigation from './navigations/Navigation';
import { LogBox } from 'react-native';
import { UserProvider } from './contexts/UserContext';

const App = () => {
  LogBox.ignoreLogs(['AsyncStorage. Auth state will default to memory']);

  return (
    <UserProvider>
      <StatusBar style="dark"></StatusBar>
      <Navigation></Navigation>
    </UserProvider>
  );
};

export default App;
