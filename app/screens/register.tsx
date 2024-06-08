import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import { Styles } from "../styles";
export default function Register() {
  const [pressedButton, setPressedButton] = useState("");
  const [email, onChangeEmail] = useState("");
  const [pwd, onChangePassword] = useState("");
  const logo = require("@/assets/images/logoBlack.png");


  const onPressFunction = (button: string) => {
    setPressedButton(button);
    console.log(`${button}Pressed`);
  };

  return (
    <View style={Styles.colContainer}>
        <Image
          source={logo}
          style={Styles.logoImage}
          resizeMode="contain"
        ></Image>
        <Text style={Styles.welcomeTextStyle}>Sign Up</Text>
        <Text style={Styles.normalTextStyle}>
          Create new account
        </Text>
        <Text style={Styles.inputLabelStyle}>User Name</Text>
        <TextInput
          value={email}
          onChangeText={onChangeEmail}
          style={Styles.inputStyle}
        />
        <Text style={Styles.inputLabelStyle}>Email</Text>
        <TextInput
          value={email}
          onChangeText={onChangeEmail}
          style={Styles.inputStyle}
        />
        <Text style={Styles.inputLabelStyle}>Password</Text>
        <TextInput
          value={pwd}
          onChangeText={onChangePassword}
          style={Styles.inputStyle}
          secureTextEntry={true}
        />
        <Text style={Styles.inputLabelStyle}>Confirm Password</Text>
        <TextInput
          value={pwd}
          onChangeText={onChangePassword}
          style={Styles.inputStyle}
          secureTextEntry={true}
        />
        <Pressable
          onPressIn={() => onPressFunction("login")}
          onPressOut={() => onPressFunction("")}
          style={({ pressed }) => [
            Styles.signupBtn,
            pressedButton === "login" && Styles.pressed,
          ]}
        >
          <Text
            style={[
              Styles.actionsText,
              pressedButton === "login" && Styles.textPressed,
            ]}
          >
            Sign Up
          </Text>
        </Pressable>
      </View>
  );
}

