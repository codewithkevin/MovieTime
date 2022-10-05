import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import CastImages from "./CastImages";

export default function CastBio() {
  const navigation = useNavigation();

  //States
  const [bio, setBio] = useState([]);
  const [images, setImages] = useState([]);

  //ROutes
  const route = useRoute();

  //routes Calls
  const id = route.params.id;
  const picture = route.params.profile;
  const Ocuupation = route.params.Ocuupation;
  const gender = route.params.gender;
  const name = route.params.name;

  //
  const details = `https://api.themoviedb.org/3/person/${id}?api_key=34afe6db454cd5e04ddd03b2ca5562a5&language=en-US`;

  //   const images = `https://api.themoviedb.org/3/person/${id}/images?api_key=34afe6db454cd5e04ddd03b2ca5562a5`;

  //UseEFFECTs
  useEffect(() => {
    get_bio();
  }, []);

  useEffect(() => {
    get_images();
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

  const get_images = () => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/person/${id}/images?api_key=34afe6db454cd5e04ddd03b2ca5562a5`
      );
      const data = await response.data;
      setImages(data.profiles);
      return data;
    }
    fetchData();
  };

  console.log(bio.biography);

  return (
    <SafeAreaView>
      <ScrollView className="w-full h-full">
        <View className="flex flex-row p-2 shadow-2xl">
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
        <View className="ml-1">
          <View className="flex flex-row space-x-3">
            <Image
              className="w-[170px] h-[170px] rounded-full"
              source={{
                uri: picture,
              }}
              loading="lazy"
            />

            <View className="mt-1">
              <View>
                <Text className="font-bold text-xl">{name}</Text>
                <Text className="text-gray-400">{Ocuupation}</Text>

                <View className="mt-10">
                  <Text className="font-bold mb-2">
                    Birthday:{" "}
                    <Text className="font-normal text-gray-400">
                      {bio.birthday}
                    </Text>
                  </Text>
                  <Text className="font-bold mb-2">
                    Place:{" "}
                    <Text className="font-normal text-gray-400">
                      {bio.place_of_birth}
                    </Text>
                  </Text>
                  <Text className="font-bold">
                    Popularity:{" "}
                    <Text className="font-normal text-gray-400">
                      {bio.popularity}{" "}
                    </Text>{" "}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View className="ml-2 mt-10">
            <Text className="font-bold w-full text-lg basis-1/2">PHOTO</Text>

            <View>
              <CastImages images={images} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
