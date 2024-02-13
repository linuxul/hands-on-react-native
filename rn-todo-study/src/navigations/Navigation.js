import { useContext } from 'react';
import { useUserContext } from '../contexts/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

const Navigation = () => {
  const { user } = useUserContext();

  return (
    <NavigationContainer>
      {user ? <MainStack></MainStack> : <AuthStack></AuthStack>}
    </NavigationContainer>
  );
};

export default Navigation;
