import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import AppProvider from "./context/AppContext";
import Loading from "./screens/Loading";

import StackNav from "./navigation/StackNavigation";
import RootNavigation from "./navigation/index";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <TailwindProvider>
      <AppProvider>
        {loading === false ? (
          <View className="flex-1">
            <RootNavigation />
          </View>
        ) : (
          <Loading />
        )}
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
