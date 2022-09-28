import { SafeAreaView, View } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  NavigationDarkTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from "react";

import HomeScreen from "./../screens/HomeScreen";
import SignInScreen from "./../screens/SignInScreen";
import SignUpScreen from "./../screens/SingUpScreen";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="singin"
          component={SignInScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="singup"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
