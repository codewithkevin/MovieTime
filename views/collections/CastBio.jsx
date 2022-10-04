import { View, Text, SafeAreaView } from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";

export default function CastBio() {
  const navigation = useNavigation();

  //States
  const [bio, setBio] = useState([]);

  //ROutes
  const route = useRoute();

  //routes Calls
  const id = route.params.id;
  const picture = route.params.profile;
  const Ocuupation = route.params.Ocuupation;
  const gender = route.params.gender;

  //
  const details = `https://api.themoviedb.org/3/person/${id}?api_key=34afe6db454cd5e04ddd03b2ca5562a5&language=en-US`;

  //UseEFFECTs
  useEffect(() => {
    get_bio();
  }, []);

  //Functions
  const get_bio = () => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/person/${id}?api_key=34afe6db454cd5e04ddd03b2ca5562a5&language=en-US`
      );
      const data = await response.data;
      setBio(data);
      return data;
    }
    fetchData();
  };

  console.log(bio.biography);

  return (
    <SafeAreaView className="w-full">
      <View className="flex flex-row p-2">
        <View className="basis-[35%]">
          <MaterialCommunityIcons
            name={"arrow-left"}
            color={"black"}
            size={30}
            // style={{ color: isSwitchOn === true ? "white" : "black" }}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View className="basis-[55%]">
          <Text className="text-[#FB5558] font-bold text-[23px]">
            movietime
          </Text>
        </View>
        <View className="basis-[20%]">
          <View>
            <MaterialCommunityIcons
              name={"dots-vertical"}
              color={"black"}
              size={30}
              //   style={{ color: isSwitchOn === true ? "white" : "black" }}
              //   onPress={() => navigation.openDrawer()}
            />
          </View>
        </View>
      </View>
      <View className="flex flex-row">

      </View>
    </SafeAreaView>
  );
}
