import { StatusBar } from 'expo-status-bar';
import Navigation from './navigations/Navigation';
import UseStateTest from './UseStateTest';
import ReducerTest from './ReducerTest';

const App = () => {
  return (
    <>
      <StatusBar style="dark"></StatusBar>
      <Navigation></Navigation>
      {/* <ReducerTest></ReducerTest> */}
    </>
  );
};

export default App;
