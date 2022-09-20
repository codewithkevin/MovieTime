import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import AppProvider from "./context/AppContext";


import StackNav from './navigation/StackNavigation';

export default function App() {
  return (
    <TailwindProvider>
      <AppProvider>
       <StackNav />
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
