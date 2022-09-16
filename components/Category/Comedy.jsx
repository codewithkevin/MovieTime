import React, { useContext } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { AppContext } from ".././../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Comcard from './cards/Comcard';

export default function comedy() {
  const { comedy, isSwitchOn } = useContext(AppContext);
  const navigation = useNavigation();
  const truncatedString = (str, num) => {
    if (str?.length > num) {
      return str.substring(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <View className="ml-[5px] mb-8">
      <View className="flex flex-row justify-between mb-5">
        <Text
          style={{ color: isSwitchOn === true ? "white" : "black" }}
          className="font-bold  text text-xl"
        >
          Comedy
        </Text>
        <Text
          style={{ color: isSwitchOn === true ? "white" : "black" }}
          onPress={() => navigation.navigate("Mostpopular")}
          className="text-md text-blue-400"
        >
          <Ionicons
            name={"arrow-forward-outline"}
            size="25"
            color={"#77C8B2"}
          />
        </Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {comedy.map((movie) => {
          return <Comcard key={movie.id} theme={isSwitchOn} movie={movie} />;
        })}
      </ScrollView>
    </View>
  );
}
