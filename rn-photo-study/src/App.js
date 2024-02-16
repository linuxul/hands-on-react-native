import { StatusBar } from 'expo-status-bar';
import Navigation from './navigations/Navigation';
import { LogBox } from 'react-native';
import { UserProvider } from './contexts/UserContext';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

const App = () => {
  LogBox.ignoreLogs(['AsyncStorage. Auth state will default to memory']);

  return (
    <ActionSheetProvider>
      <UserProvider>
        <StatusBar style="dark"></StatusBar>
        <Navigation></Navigation>
      </UserProvider>
    </ActionSheetProvider>
  );
};

export default App;
