import { Image, StyleSheet, Text, View } from "react-native";
import Input from "../components/Input";

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/main.png")}
        style={styles.image}
      ></Image>

      <Input title={"이메일"} placeholder="your@email.com"></Input>
      <Input title={"비밀번호"}></Input>
    </View>
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
