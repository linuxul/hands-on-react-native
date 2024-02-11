import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import Input, {
  IconNames,
  ReturnKeyTypes,
  KeyboardTypes
} from "../components/Input";
import SafeInputView from "./SafeInputView";
import { useRef, useState } from "react";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

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
        ></Input>
        <Input
          ref={passwordRef}
          title={"비밀번호"}
          returnKeyType={ReturnKeyTypes.DONE}
          secureTextEntry
          value={password}
          onChangeText={password => setPassword(password.trim())}
          iconName={IconNames.PASSWORD}
        ></Input>
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
  }
});

export default SignInScreen;
