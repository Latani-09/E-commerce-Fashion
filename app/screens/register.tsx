import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Pressable,Image } from "react-native";

export default function Register() {
    const [pressedButton, setPressedButton] = useState('');
    const fashion = require('@/assets/images/style 4.jpg');
    const logo = require('@/assets/images/image.png');

    const onPressFunction = (button:string) => {
        setPressedButton(button);
        console.log(`${button}Pressed`);
    }

    return (
        <ImageBackground source={fashion} resizeMode="cover" style={Styles.colContainer}>
            <View style={Styles.blackShade}>

                <View style={Styles.actionContainer}>
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
                    <Pressable
                        onPressIn={() => onPressFunction('signup')}
                        onPressOut={()=>onPressFunction('')}
                        style={({ pressed }) => [
                            Styles.actions,
                            ( pressedButton === 'signup') && Styles.pressed
                        ]}
                    >
                        <Text style={[
                            Styles.actionsText,
                            pressedButton === 'signup' && Styles.textPressed
                        ]}>
                            SignUp
                        </Text>
                    </Pressable>
                </View>
                <View style={Styles.logoContainer}>
                    <Image source={logo} style={Styles.logoImage} resizeMode="contain"  ></Image>
                </View>
            </View>
        </ImageBackground>
    );
}

const Styles = StyleSheet.create({
    colContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    blackShade: {
        flex: 1,
        flexDirection: 'column-reverse',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignItems: 'center',
        width: '100%',
        height:'100%'
    },
    actions: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 50,
        padding: 10,
        margin: 5,
        alignItems: 'center',
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
    textPressed: {
        color: 'black',
    },
    actionContainer: {
        width: '90%',
        marginBottom:35
    },
    logoContainer:{
       marginBottom:100

    },
    logoImage:{
        width:150,
        height:150
    }
});
