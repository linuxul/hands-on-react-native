import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { Asset } from 'expo-asset';
import { initFirebase } from '../api/firebase';

const Navigation = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Asset.fromModule(
          require('../../assets/cover.png')
        ).downloadAsync();

        const app = initFirebase()
        console.log('app : ' + JSON.stringify(app))
      } catch (error) {
        console.log('error : ' + error);
      } finally {
        setIsReady(true);
      }
    })();
  }, []);

  const onReady = async () => {
    console.log('onReady');

    if (isReady) {
      await SplashScreen.hideAsync();
    }
  };

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer onReady={onReady}>
      <AuthStack></AuthStack>
    </NavigationContainer>
  );
};

export default Navigation;
