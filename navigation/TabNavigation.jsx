import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useContext } from "react";

//Screens
import Favorite from './../screens/Favorite';
import Settings from './../screens/Settings';
import HomeScreen from './../screens/HomeScreen';
import { AppContext } from './../context/AppContext';

const Tab = createBottomTabNavigator();

export default function Bottom() {
    const { isSwitchOn } = useContext(AppContext);

  return (
    <Tab.Navigator
      // tabBarOptions={{
      //   activeTintColor: "#e3ccb0",
      // }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ tabBarIcon: makeIconRender("home"), headerShown: false }}
      />
      <Tab.Screen
        name="favorite"
        component={Favorite}
        options={{
          tabBarIcon: makeIconRender("robot-love-outline"),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarIcon: makeIconRender("movie-settings"),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function makeIconRender(name, color) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}
