import { Image, Keyboard, StyleSheet, View } from "react-native";
import Input, {
  IconNames,
  ReturnKeyTypes,
  KeyboardTypes
} from "../components/Input";
import SafeInputView from "./SafeInputView";
import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { signIn } from "../api/auth";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    console.log("always: ", email, password);
  });

  useEffect(() => {
    console.log("first rendering: ", email, password);
  }, []);

  useEffect(() => {
    console.log("only email: ", email, password);
  }, [email]);

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = () => {
    Keyboard.dismiss();
    console.log(email, password);
    signIn(email, password)
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  return (
    <SafeInputView>
      <View style={styles.container}>
        <Image
          source={require("../../assets/main.png")}
          style={styles.image}
        ></Image>

        <Input
          title={"이메일"}
          placeholder="your@email.com"
          keyboardType={KeyboardTypes.EMAIL}
          returnKeyType={ReturnKeyTypes.NEXT}
          value={email}
          onChangeText={email => setEmail(email.trim())}
          iconName={IconNames.EMAIL}
          onSubmitediting={() => passwordRef.current.focus()}
        ></Input>
        <Input
          ref={passwordRef}
          title={"비밀번호"}
          returnKeyType={ReturnKeyTypes.DONE}
          secureTextEntry
          value={password}
          onChangeText={password => setPassword(password.trim())}
          iconName={IconNames.PASSWORD}
          onSubmitEditing={onSubmit}
        ></Input>

        <View style={styles.buttonContainer}>
          <Button
            title="로그인"
            onPress={onSubmit}
            disabled={disabled}
          ></Button>
        </View>
      </View>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 200,
    height: 200
  },
  buttonContainer: {
    width: "100%",
    marginTop: 30,
    paddingHorizontal: 20
  }
});

export default SignInScreen;
