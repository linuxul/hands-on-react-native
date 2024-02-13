import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WHITE } from '../color';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { AuthRoutes } from './routes';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerShown: false
      }}
    >
      <Stack.Screen
        name={AuthRoutes.SIGN_IN}
        component={SignInScreen}
      ></Stack.Screen>
      <Stack.Screen
        name={AuthRoutes.SIGN_UP}
        component={SignUpScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
