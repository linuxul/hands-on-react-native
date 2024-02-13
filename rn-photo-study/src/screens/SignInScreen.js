import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View, Keyboard } from 'react-native';
import { AuthRoutes } from '../navigations/routes';
import Input, { ReturnKeyTypes, InputTypes } from '../components/Input';
import { useState, useRef, useEffect } from 'react';
import Button from '../components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SafeInputView from '../components/SafeInputView';
import TextButton from '../components/TextButton';
import HR from '../components/HR';
import { StatusBar } from 'expo-status-bar';
import { WHITE } from '../color';

const SignInScreen = () => {
  const navigation = useNavigation();
  const { top, bottom } = useSafeAreaInsets();

  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = () => {
    Keyboard.dismiss();
    if (!disabled && !isLoading) {
      setIsLoading(true);
      console.log(email, password);
      setIsLoading(false);
    }
  };

  return (
    <SafeInputView>
      <StatusBar style="light"></StatusBar>
      <View style={[styles.container, { paddingTop: top }]}>
        <View style={StyleSheet.absoluteFill}>
          <Image
            source={require('../../assets/cover.png')}
            style={{ width: '100%' }}
            resizeMode="cover"
          ></Image>
        </View>
        <View style={[styles.form, { paddingBottom: bottom ? bottom + 10: 40 }]}>
          <Input
            styles={{ container: { marginBottom: 20 } }}
            value={email}
            onChangeText={(text) => setEmail(text.trim())}
            onSubmitEditing={() => passwordRef.current.focus()}
            inputType={InputTypes.EMAIL}
            returnKeyTypes={ReturnKeyTypes.NEXT}
          ></Input>

          <Input
            ref={passwordRef}
            value={password}
            onChangeText={(text) => setPassword(text.trim())}
            onSubmitEditing={onSubmit}
            inputType={InputTypes.PASSWORD}
            returnKeyTypes={ReturnKeyTypes.DONE}
            styles={{ container: { marginBottom: 20 } }}
          ></Input>
          <Button
            title="로그인"
            onPress={onSubmit}
            disabled={disabled}
            isLoading={isLoading}
            styles={{
              container: {
                marginTop: 20
              }
            }}
          ></Button>
          <HR text={'or'} styles={{ container: { marginVertical: 30 } }}></HR>
          <TextButton
            title={'회원가입'}
            onPress={() => navigation.navigate(AuthRoutes.SIGN_IN)}
          ></TextButton>
        </View>
      </View>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingHorizontal: 20
  },
  form: {
    alignItems: 'center',
    backgroundColor: WHITE,
    paddingHorizontal: 20,
    paddingTop: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
});

export default SignInScreen;
