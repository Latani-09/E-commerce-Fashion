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
export default function Login() {
  const [pressedButton, setPressedButton] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isEmailValid,setIsEmailValid]=useState(false);
  const [isPwdValid,setIsPwdValid]=useState(false);

  const logo = require("@/assets/images/logoBlack.png");
  const fbIcon = require("@/assets/images/fbWhite.png");
  const gIcon = require("@/assets/images/googleicon.png");
  const appleIcon = require("@/assets/images/appleIcon.png");
  const notChecked = require("@/assets/images/circle.png");
  const checked = require("@/assets/images/checkedCircle.png");

   function ValidateEmail(input:string) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) {  
      return true;
    } else {
      return false;
    }
  }
  function ValidatePwd(input:string) {
    var validPwd = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[.@!#$%&'+/=?^_`{|}~-])[a-zA-Z0-9.@!#$%&'+/=?^_`{|}~-]{8,}$/;

    if (input.length>=8 &&input.match(validPwd)) {  
      return true;
    } else {
      return false;
    }
  }
  const onPressFunction = (button: string) => {
    setPressedButton(button);
    console.log(`${button}Pressed`);
  };
  const onChangeEmail=(text:string)=>{
    setEmail(text);
    if (ValidateEmail(text)){
      setIsEmailValid(true)
    }
    else{
      setIsEmailValid(false);
    }  
  }
  const onChangePassword=(text:string)=>{
    setPwd(text);
    if (ValidatePwd(text)){
      setIsPwdValid(true)
    }
    else{
      setIsPwdValid(false);
    }
    
  }
  return (
    <View style={Styles.colContainer}>
        <Image
          source={logo}
          style={Styles.logoImage}
          resizeMode="contain"
          resizeMethod="scale"
        ></Image>
        <Text style={Styles.welcomeTextStyle}>Welcome!</Text>
        <Text style={Styles.normalTextStyle}>
          please login or sign up to continue our app
        </Text>
      <View style={Styles.actionContainer}>
        <Text style={Styles.inputLabelStyle}>Email</Text>
        <View style={Styles.inputContainerStyle}>
          <TextInput
            value={email}
            onChangeText={(text)=>onChangeEmail(text)}
            style={Styles.inputStyle}
            
          />
          {isEmailValid?<Image
            source={checked}
            style={Styles.validationIndicatorStyle}
          ></Image>:<Image
          source={notChecked}
          style={Styles.validationIndicatorStyle}
        ></Image>}
        </View>
        <Text style={Styles.inputLabelStyle}>Password</Text>
        <View style={Styles.inputContainerStyle}>
          <TextInput
            value={pwd}
            onChangeText={(text)=>onChangePassword(text)}
            style={Styles.inputStyle}
            secureTextEntry={true}
          />
          {isPwdValid?<Image
            source={checked}
            style={Styles.validationIndicatorStyle}
          ></Image>:<Image
          source={notChecked}
          style={Styles.validationIndicatorStyle}
        ></Image>}
        </View>
        <Pressable
          onPressIn={() => onPressFunction("login")}
          onPressOut={() => onPressFunction("")}
          style={({ pressed }) => [
            Styles.loginActions,
            pressedButton === "login" && Styles.pressed,
          ]}
        >
          <Text
            style={[
              Styles.actionsText,
              pressedButton === "login" && Styles.textPressed,
            ]}
          >
            Login
          </Text>
        </Pressable>
        <Text style={Styles.dividerText}>or</Text>
        <View style={Styles.alterLogin}>
          <Pressable
            onPressIn={() => onPressFunction("loginfb")}
            onPressOut={() => onPressFunction("")}
            style={({ pressed }) => [
              Styles.actionfb,
              pressedButton === "loginfb" && Styles.pressed,
            ]}
          >
            <Image
              source={fbIcon}
              resizeMode="contain"
              style={Styles.iconStyle}
            ></Image>

            <Text
              style={[
                Styles.loginfbText,
                pressedButton === "loginfb" && Styles.textPressed,
              ]}
            >
              Continue with <Text style={{ fontWeight: "bold" }}>Facebook</Text>
            </Text>
          </Pressable>
          <Pressable
            onPressIn={() => onPressFunction("logingoogle")}
            onPressOut={() => onPressFunction("")}
            style={({ pressed }) => [
              Styles.actionsWhite,
              pressedButton === "logingoogle" && Styles.pressed,
            ]}
          >
            <Image
              source={gIcon}
              resizeMode="contain"
              style={Styles.iconStyle}
            ></Image>

            <Text
              style={[
                Styles.loginwhiteText,
                pressedButton === "logingoogle" && Styles.textPressed,
              ]}
            >
              Continue with <Text style={{ fontWeight: "bold" }}> Google</Text>
            </Text>
          </Pressable>
          <Pressable
            onPressIn={() => onPressFunction("loginapple")}
            onPressOut={() => onPressFunction("")}
            style={({ pressed }) => [
              Styles.actionsWhite,
              pressedButton === "loginapple" && Styles.pressed,
            ]}
          >
            <Image
              source={appleIcon}
              resizeMode="contain"
              style={Styles.iconStyle}
            ></Image>
            <Text
              style={[
                Styles.loginwhiteText,
                pressedButton === "loginapple" && Styles.textPressed,
              ]}
            >
              Continue with <Text style={{ fontWeight: "bold" }}>Apple</Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
