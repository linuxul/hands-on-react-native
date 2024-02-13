import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import { PRIMARY, WHITE } from '../colors';

const Stack = createNativeStackNavigator();

const AuthStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerShown: false
      }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
