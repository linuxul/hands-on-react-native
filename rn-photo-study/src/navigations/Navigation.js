import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { Asset } from 'expo-asset';
import { initFirebase } from '../api/firebase';
import { useUserState } from '../contexts/UserContext';
import MainStack from './MainStack';
import { onAuthStateChanged } from '../api/auth';
import HomeScreen from '../screens/HomeScreen';
import ContentTab from './ContentTab';

const ImageAssets = [
  require('../../assets/cover.png'),
  require('../../assets/home-clock.png'),
  require('../../assets/home-map.png'),
  require('../../assets/icon.png'),
];

const Navigation = () => {
  const [user, setUser] = useUserState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();

        await Promise.all(
          ImageAssets.map((image) => Asset.fromModule(image).downloadAsync())
        );

        initFirebase();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      } finally {
        setIsReady(true);
      }
    })();
  }, []);

  const onReady = async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  };

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer onReady={onReady}>
      <MainStack />
    </NavigationContainer>
  );
};

export default Navigation;
