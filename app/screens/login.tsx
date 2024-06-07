import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable,TextInput } from "react-native";

export default function Login() {
    const [pressedButton, setPressedButton] = useState('');
    const [text,setText]=useState('')
    const fbIcon = require('@/assets/images/fbWhite.png');
    const gIcon = require('@/assets/images/googleicon.png');
    const appleIcon = require('@/assets/images/appleIcon.png');
    
    
    const onPressFunction = (button:string) => {
        setPressedButton(button);
        console.log(`${button}Pressed`);
    }

    return (
                <View style={Styles.actionContainer}>
                    <Text>User name</Text>
                    <TextInput value={text} style={Styles.inputStyle}/>
                    <Text>Password</Text>
                    <TextInput style={Styles.inputStyle}/>
                    <Pressable
                        onPressIn={() => onPressFunction('login')}
                        onPressOut={()=>onPressFunction('')}
                        style={({ pressed }) => [
                            Styles.actions,
                           (  pressedButton === 'login' )&& Styles.pressed
                        ]}
                    >
                        <Text style={[
                            Styles.actionsText,
                            pressedButton === 'login' && Styles.textPressed
                        ]}>
                            Login
                        </Text>
                    </Pressable>
                    <Text style={Styles.dividerText}>or</Text>
                    <View style={Styles.alterLogin}>
                    <Pressable
                        onPressIn={() => onPressFunction('loginfb')}
                        onPressOut={()=>onPressFunction('')}
                        style={({ pressed }) => [
                            Styles.actionfb,
                            ( pressedButton === 'loginfb') && Styles.pressed
                        ]}
                    >
                        <Image source={fbIcon} resizeMode="contain" style={Styles.iconStyle}></Image>

                        <Text style={[
                            Styles.loginfbText,
                            pressedButton === 'loginfb' && Styles.textPressed
                        ]}>
                            Continue with Facebook
                        </Text>
                    </Pressable>
                    <Pressable
                        onPressIn={() => onPressFunction('logingoogle')}
                        onPressOut={()=>onPressFunction('')}
                        style={({ pressed }) => [
                            Styles.actionsWhite,
                            ( pressedButton === 'logingoogle') && Styles.pressed
                        ]}
                    >
                        <Image source={gIcon} resizeMode="contain" style={Styles.iconStyle}></Image>
                       
                        <Text style={[
                            Styles.loginwhiteText,
                            pressedButton === 'logingoogle' && Styles.textPressed
                        ]}>
                            Continue with Google
                        </Text>
                    </Pressable>
                    <Pressable
                        onPressIn={() => onPressFunction('loginapple')}
                        onPressOut={()=>onPressFunction('')}
                        style={({ pressed }) => [
                            Styles.actionsWhite,
                            ( pressedButton === 'loginapple') && Styles.pressed
                        ]}
                    >
                        <Image source={appleIcon} resizeMode="contain" style={Styles.iconStyle}></Image>
                        <Text style={[
                            Styles.loginwhiteText,
                            pressedButton === 'loginapple' && Styles.textPressed
                        ]}>
                            Continue with Apple
                        </Text>
                    </Pressable>
                    </View>
                </View>
   
    );
}

const Styles = StyleSheet.create({
    colContainer: {
        flex: 1,
        flexDirection: 'column-reverse',
        alignItems: 'center',
        width: '100%',
        height: '100%',
  
    
    },
   
    actions: {
        flex:0 ,
        flexBasis:'auto',
        flexDirection:'row',
        justifyContent:'center',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 50,
        padding: 10,
        margin: 5,
        alignItems: 'center',
        backgroundColor:'black'
        
    },

    actionsWhite:{
        flex:0 ,
        flexBasis:'auto',
        flexDirection:'row',
        justifyContent:'flex-start',
        borderWidth: 2,
        borderRadius: 50,
        padding: 10,
        margin: 5,
        paddingLeft:50,
        alignItems: 'center',
        backgroundColor:'white',
        borderColor: 'gray',
        
    },
    actionfb:{
        flex:0 ,
        flexBasis:'auto',
        flexDirection:'row',
        justifyContent:'flex-start',
        borderWidth: 2,
        borderRadius: 50,
        padding: 10,
        margin: 5,
        paddingLeft:50,
        alignItems: 'center',
        backgroundColor:'rgb(66, 103, 178)',
        borderColor:'rgb(66, 103, 178)'
    },
    pressed: {
        backgroundColor: 'rgb(255, 255, 255)',
       
    },
    actionsText: {
        textAlign: 'center',
        color: 'white',
        fontSize:16,
        fontWeight:'bold'
    },

    loginwhiteText :{
        textAlign: 'center',
        color: 'gray',
        fontSize:16,
        fontWeight:'bold'
    },
    loginfbText:{
        textAlign: 'center',
        color: 'white',
        fontSize:16,
        fontWeight:'bold'
    },
    iconStyle:{
        width:20,
        height:20,
        marginRight:10

    },
    textPressed: {
        color: 'black',
    },
    actionContainer: {
        flex:1,
        alignSelf:'center',
        justifyContent:'flex-end',
        width: '90%',
        marginBottom:35,
    },
    alterLogin:{
        borderTopWidth:2,
        borderTopColor:'gray',
        paddingTop:10,
        marginTop:10
    },
    dividerText:{marginBottom:-18,textAlign:'center',backgroundColor:'white',zIndex:10,marginHorizontal:'auto'},
    inputStyle:{
        borderRadius:5,
        borderColor:'grey',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});
