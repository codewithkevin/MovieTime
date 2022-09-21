import {
  NavigationContainer,
  DefaultTheme,
  NavigationDarkTheme,
  DarkTheme,
} from "@react-navigation/native";
import { SafeAreaView, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from "react";

import { AppContext } from "./../context/AppContext";
import Menu from "./DrawerNav";
import ViewPage from './../views/ViewPage';

const Stack = createNativeStackNavigator();

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    background: "#011928",
    border: "#575c66",
    backgroundAlt: "#575c66",
    borderAlt: "#2E3440",
    text: "#ECEFF4",
  },
};

export default function StackNav() {
  const { isSwitchOn, setIsSwitchOn } = useContext(AppContext);

  const theme = isSwitchOn ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Menu"
          component={Menu}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ViewPage"
          component={ViewPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
