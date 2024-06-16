import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import { CheckBox ,Icon} from "@rneui/themed";
import { Styles } from "../styles";
import { normalizeText } from "react-native-elements/dist/helpers";
export default function Register() {
  const [pressedButton, setPressedButton] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [isEmailValid,setIsEmailValid]=useState(false);
  const [isUserNameValid,setIsUserNameValid]=useState(false);
  const [isPwdValid,setIsPwdValid]=useState(false);
  const [isConfirmPwdValid,setIsConfirmPwdValid]=useState(false);
  const logoBlack = require("@/assets/images/logo3Black.png");
  const notChecked = require("@/assets/images/circle.png");
  const checked = require("@/assets/images/checkedCircle.png");
  const visibilityIcon = require("@/assets/images/visibility.png");
  const [agreeTerms,setAgreeTerms]=useState(false);
  const visibilityOffIcon = require("@/assets/images/visibility_off.png");

  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
  
  const toggleShowPassword = () => { 
      setShowPassword(!showPassword); 
  }; 
  const toggleShowConfirmPassword = () => { 
    setShowConfirmPassword(!showConfirmPassword); 
}; 

  const onPressFunction = (button: string) => {
    setPressedButton(button);
    console.log(`${button}Pressed`);
  };
  function ValidateEmail(input:string) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) {  
      return true;
    } else {
      return false;
    }
  }
  function ValidatePwd(input:string) {
    var validPwd= /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[.@!#$%&'*+/=?^_`{|}~-])/;
    return input.length>7 && validPwd.test(input);
  }
  const onChangeEmail=(text:string)=>{
    setEmail(text);
    if (ValidateEmail(text)){
      setIsEmailValid(true)
    }
    else{
      setIsEmailValid(false);
    }  
  }
  const onChangeUserName=(text:string)=>{
    setUserName(text);
    if (text.length>7){
      setIsUserNameValid(true)
    }
    else{
      setIsUserNameValid(false);
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
    const onChangeConfirmPassword=(text:string)=>{
      setConfirmPwd(text);
    }
  
  return (
    <View style={Styles.colContainer}>
      <View style={Styles.logoContainer}>
        <Image
          source={logoBlack}
          style={Styles.logoImage}
          resizeMode="contain"
        ></Image>
        </View>
        <View style={Styles.actionContainer}>
        <Text style={Styles.welcomeTextStyle}>Sign Up</Text>
        <Text style={Styles.normalTextStyle}>
          Create a new account
        </Text>
        <Text style={Styles.inputLabelStyle}>User Name</Text>
        <View style={Styles.inputContainerStyle}>
        <TextInput
          value={userName}
          onChangeText={(text)=>onChangeUserName(text)}
          style={Styles.inputStyle}
        />
         {isUserNameValid?<Image
            source={checked}
            style={Styles.validationIndicatorStyle}
          ></Image>:<Image
          source={notChecked}
          style={Styles.validationIndicatorStyle}
        ></Image>}
        </View>
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
          secureTextEntry={!showPassword}
        />
        
        <Pressable onPress={toggleShowPassword}>
        {showPassword?<Image
            source={visibilityIcon}
            style={Styles.validationIndicatorStyle}
          ></Image>:<Image
          source={visibilityOffIcon}
          style={Styles.validationIndicatorStyle}
        ></Image>}
        </Pressable>
        </View>
        <Text style={Styles.inputLabelStyle}>Confirm Password</Text>
        <View style={Styles.inputContainerStyle}>
        <TextInput
          value={confirmPwd}
          onChangeText={(text)=>onChangeConfirmPassword(text)}
          style={Styles.inputStyle}
          secureTextEntry={!showConfirmPassword}
        />

        <Pressable onPress={toggleShowConfirmPassword}>
        {showConfirmPassword?<Image
            source={visibilityIcon}
            style={Styles.validationIndicatorStyle}
          ></Image>:<Image
          source={visibilityOffIcon}
          style={Styles.validationIndicatorStyle}
        ></Image>}
        </Pressable>
        </View>
        <CheckBox
          
          checked={agreeTerms}
          onPress={()=>setAgreeTerms(!agreeTerms)}
          title="By creating an account you have to agree with our Terms And Conditions"
          textStyle={{color:'rgba(0,0,0,0.5)',fontWeight:'400'}}
          containerStyle={{backgroundColor:'none',borderWidth:0,justifyContent:'flex-end'}}
          wrapperStyle={{}}
          size={15}
         
          
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
      </View>
  );
}

