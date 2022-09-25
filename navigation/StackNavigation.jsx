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
import ViewDetails from './../views/ViewScreen';

const Stack = createNativeStackNavigator();

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    background: "#011928",
    border: "#575c66",
    backgroundAlt: "#575c66",
    borderAlt: "#2E3440",
    text: "white",
  },
};

export default function StackNav() {
  const { isSwitchOn, setIsSwitchOn } = useContext(AppContext);

  const theme = isSwitchOn ? CustomDarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          options={{ headerShown: false }}
          name="MenuList"
          component={Menu}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ViewPage"
          component={ViewDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
