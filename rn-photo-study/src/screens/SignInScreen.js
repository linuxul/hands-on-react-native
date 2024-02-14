import { useFocusEffect, useNavigation } from '@react-navigation/native';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Keyboard,
  ScrollView,
  Alert
} from 'react-native';
import { AuthRoutes } from '../navigations/routes';
import Input, { ReturnKeyTypes, InputTypes } from '../components/Input';
import { useCallback, useReducer, useRef } from 'react';
import Button from '../components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SafeInputView from '../components/SafeInputView';
import TextButton from '../components/TextButton';
import HR from '../components/HR';
import { StatusBar } from 'expo-status-bar';
import { WHITE } from '../color';
import {
  authFormReducer,
  AuthFormTypes,
  initAuthForm
} from '../reducers/authFromReducer';
import { getAuthErrorMessages, signIn } from '../api/auth';

const SignInScreen = () => {
  const navigation = useNavigation();
  const { top, bottom } = useSafeAreaInsets();

  const passwordRef = useRef();

  const [form, dispatch] = useReducer(authFormReducer, initAuthForm);

  useFocusEffect(
    useCallback(() => {
      return () => dispatch({ type: AuthFormTypes.RESET });
    }, [])
  );

  const updateForm = (payload) => {
    const newForm = { ...form, ...payload };
    const disabled = !newForm.email || !newForm.password;

    dispatch({
      type: AuthFormTypes.UPDATE_FORM,
      payload: { disabled, ...payload }
    });
  };

  const onSubmit = async () => {
    Keyboard.dismiss();
    if (!form.disabled && !form.isLoading) {
      dispatch({ type: AuthFormTypes.TOGGLE_LOADING });
      try {
        const user = await signIn(form);
        console.log('user : ' + JSON.stringify(user));
      } catch (error) {
        const message = getAuthErrorMessages(error.code);
        Alert.alert('로그인 실패', message);
      }
      dispatch({ type: AuthFormTypes.TOGGLE_LOADING });
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

        <ScrollView
          style={[styles.form, { paddingBottom: bottom ? bottom + 10 : 40 }]}
          contentContainerStyle={{ alignItems: 'center' }}
          bounces={false}
          keyboardShouldPersistTaps="always"
        >
          <Input
            styles={{ container: { marginBottom: 20 } }}
            value={form.email}
            onChangeText={(text) => updateForm({ email: text.trim() })}
            onSubmitEditing={() => passwordRef.current.focus()}
            inputType={InputTypes.EMAIL}
            returnKeyTypes={ReturnKeyTypes.NEXT}
          ></Input>

          <Input
            ref={passwordRef}
            value={form.password}
            onChangeText={(text) => updateForm({ password: text.trim() })}
            onSubmitEditing={onSubmit}
            inputType={InputTypes.PASSWORD}
            returnKeyTypes={ReturnKeyTypes.DONE}
            styles={{ container: { marginBottom: 20 } }}
          ></Input>
          <Button
            title="로그인"
            onPress={onSubmit}
            disabled={form.disabled}
            isLoading={form.isLoading}
            styles={{
              container: {
                marginTop: 20
              }
            }}
          ></Button>
          <HR text={'or'} styles={{ container: { marginVertical: 30 } }}></HR>
          <TextButton
            title={'회원가입'}
            onPress={() => {
              console.log('register');
              navigation.navigate(AuthRoutes.SIGN_UP);
            }}
          ></TextButton>
        </ScrollView>
      </View>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  form: {
    flexGrow: 0,
    backgroundColor: WHITE,
    paddingHorizontal: 20,
    paddingTop: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
});

export default SignInScreen;
