import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import AppProvider from "./context/AppContext";
import Loading from "./screens/Loading";
import { LogBox } from "react-native";

import StackNav from "./navigation/StackNavigation";
import RootNavigation from "./navigation/index";
import ThemeContextProvider from "./context/ThemeContext";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  LogBox.ignoreAllLogs();

  return (
    <TailwindProvider>
      <AppProvider>
        <ThemeContextProvider>
          {loading === false ? (
            <View className="flex-1">
              <RootNavigation />
            </View>
          ) : (
            <Loading />
          )}
        </ThemeContextProvider>
      </AppProvider>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
