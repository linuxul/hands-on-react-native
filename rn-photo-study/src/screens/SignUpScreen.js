import { useNavigation } from '@react-navigation/native';
import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TextButton from '../components/TextButton';
import Input, { ReturnKeyTypes, InputTypes } from '../components/Input';
import { useReducer, useRef } from 'react';
import Button from '../components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SafeInputView from '../components/SafeInputView';
import HR from '../components/HR';
import { StatusBar } from 'expo-status-bar';
import { WHITE } from '../color';
import {
  authFormReducer,
  AuthFormTypes,
  initAuthForm
} from '../reducers/authFromReducer';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const { top, bottom } = useSafeAreaInsets();

  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [form, dispatch] = useReducer(authFormReducer, initAuthForm);

  // useEffect(() => {
  //   setDisabled(!email || !password || password !== passwordConfirm);
  // }, [email, password, passwordConfirm]);

  const updateForm = (payload) => {
    const newForm = { ...form, ...payload };
    const disabled =
      !newForm.email ||
      !newForm.password ||
      newForm.password !== newForm.passwordConfirm;

    dispatch({
      type: AuthFormTypes.UPDATE_FORM,
      payload: { disabled, ...payload }
    });
  };

  const onSubmit = () => {
    Keyboard.dismiss();
    if (!form.disabled && !form.isLoading) {
      dispatch({ type: AuthFormTypes.TOGGLE_LOADING });
      console.log(email, password);
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
            inputType={InputTypes.EMAIL}
            returnKeyTypes={ReturnKeyTypes.NEXT}
            onSubmitEditing={() => passwordRef.current.focus()}
          ></Input>

          <Input
            ref={passwordRef}
            value={form.password}
            onChangeText={(text) => updateForm({ password: text.trim() })}
            inputType={InputTypes.PASSWORD}
            returnKeyTypes={ReturnKeyTypes.NEXT}
            onSubmitEditing={() => passwordConfirmRef.current.focus()}
            styles={{ container: { marginBottom: 20 } }}
          ></Input>
          <Input
            ref={passwordConfirmRef}
            value={form.passwordConfirm}
            onChangeText={(text) =>
              updateForm({ passwordConfirm: text.trim() })
            }
            inputType={InputTypes.PASSWORD_CONFIRM}
            returnKeyTypes={ReturnKeyTypes.DONE}
            onSubmitEditing={onSubmit}
            styles={{ container: { marginBottom: 20 } }}
          ></Input>
          <Button
            title="회원가입"
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
          <TextButton title={'로그인'} onPress={navigation.goBack}></TextButton>
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

export default SignUpScreen;
