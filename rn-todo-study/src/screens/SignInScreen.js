import { Alert, Image, Keyboard, StyleSheet, View } from 'react-native';
import Input, {
  IconNames,
  ReturnKeyTypes,
  KeyboardTypes
} from '../components/Input';
import SafeInputView from '../components/SafeInputView';
import { useContext, useEffect, useRef, useState } from 'react';
import Button from '../components/Button';
import { signIn } from '../api/auth';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  SafeAreaInsets,
  useSafeAreaInsets
} from 'react-native-safe-area-context';
import { useUserContext } from '../contexts/UserContext';

const SignInScreen = () => {
  const insets = useSafeAreaInsets();
  const { setUser } = useUserContext();

  console.log(insets);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('always: ', email, password);
  });

  useEffect(() => {
    console.log('first rendering: ', email, password);
  }, []);

  useEffect(() => {
    console.log('only email: ', email, password);
  }, [email]);

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = async () => {
    if (!isLoading && !disabled) {
      try {
        setIsLoading(true);
        Keyboard.dismiss();
        const data = await signIn(email, password);
        console.log(data);
        setUser(data);
      } catch (error) {
        Alert.alert('로그인 실패', error, [
          { text: '확인', onPress: () => setIsLoading(false) }
        ]);

        console.log(error);
      }
      setIsLoading(false);
    }
  };

  return (
    <SafeInputView>
      <View
        style={[
          styles.container,
          { paddingTop: insets.top, paddingBottom: insets.bottom }
        ]}
      >
        <Image
          source={require('../../assets/main.png')}
          style={styles.image}
        ></Image>

        <Input
          title={'이메일'}
          placeholder="your@email.com"
          keyboardType={KeyboardTypes.EMAIL}
          returnKeyType={ReturnKeyTypes.NEXT}
          value={email}
          onChangeText={(email) => setEmail(email.trim())}
          iconName={IconNames.EMAIL}
          onSubmitediting={() => passwordRef.current.focus()}
        ></Input>
        <Input
          ref={passwordRef}
          title={'비밀번호'}
          returnKeyType={ReturnKeyTypes.DONE}
          secureTextEntry
          value={password}
          onChangeText={(password) => setPassword(password.trim())}
          iconName={IconNames.PASSWORD}
          onSubmitEditing={onSubmit}
        ></Input>

        <View style={styles.buttonContainer}>
          <Button
            title="로그인"
            onPress={onSubmit}
            disabled={disabled}
            isLoading={isLoading}
          ></Button>
        </View>
      </View>
    </SafeInputView>
  );
};

SignInScreen.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200
  },
  buttonContainer: {
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 20
  }
});

export default SignInScreen;
