import { useNavigation } from '@react-navigation/native';
import { Image, Keyboard, StyleSheet, Text, View } from 'react-native';
import TextButton from '../components/TextButton';
import Input, { ReturnKeyTypes, InputTypes } from '../components/Input'
import { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SafeInputView from '../components/SafeInputView';
// import HR from '../components/HR'

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextButton title={'로그인'} onPress={navigation.goBack}></TextButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SignUpScreen;
