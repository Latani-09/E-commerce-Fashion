import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Pressable,Image } from "react-native";
import { Styles } from "../styles";
export default function Home() {
    const [pressedButton, setPressedButton] = useState('');
    const fashion = require('@/assets/images/style 4.jpg');
    const logo = require('@/assets/images/image.png');

    const onPressFunction = (button:string) => {
        setPressedButton(button);
        console.log(`${button}Pressed`);
    }

    return (
        <ImageBackground source={fashion} resizeMode="cover" style={Styles.homeContainer}>
            <View style={Styles.blackShade}>
            <View style={Styles.logoContainer}>
                    <Image source={logo} style={Styles.logoImage} resizeMode="contain"  ></Image>
                </View>
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

            </View>
        </ImageBackground>
    );
}

