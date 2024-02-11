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
import Input, { ReturnKeyTypes, KeyboardTypes } from "../components/Input";
import SafeInputView from "./SafeInputView";

const SignInScreen = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: "padding" })}
    >
      <Pressable
        style={{ flex: 1 }}
        onPress={() => {
          console.log("click");
          Keyboard.dismiss();
        }}
      >
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
          ></Input>
          <Input
            title={"비밀번호"}
            returnKeyType={ReturnKeyTypes.DONE}
            secureTextEntry
          ></Input>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
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
