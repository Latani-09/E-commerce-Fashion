import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "@/hooks/useColorScheme";
import Login from "@/app/screens/login";
import Register from "@/app/screens/register";
import Home from "@/app/screens/home";
import { StyleSheet } from "react-native";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const Stack = createNativeStackNavigator();

  const state = {
    routes: [
      { name: "home" },
      {
        name: "login",
      },
      { name: "register" },
    ],
  };
  const linking = {
    prefixes: [""],
  };
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer
      independent={true}
      linking={linking}
      fallback={<Text>Loading...</Text>}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Styles=StyleSheet.create({navContainer:{
backgroundColor:'whitr                   '
}

})