import React, { useContext } from "react";
import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { AppContext } from "./../context/AppContext";
import Main from "./../components/Home/Main";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const { movies } = useContext(AppContext);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  const truncatedString = (str, num) => {
    if (str?.length > num) {
      return str.substring(0, num) + "...";
    } else {
      return str;
    }
  };
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="p-1">
          <View className="mb-1">
            <Main />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
