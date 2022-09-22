import React, { useContext, useState } from "react";
import { Text, View, Image, ScrollView, FlatList } from "react-native";
import { AppContext } from "./../../context/AppContext";
import Popular from "./../Category/Popular";
import Comedy from "./../Category/Comedy";
import Trailer from "./../Category/Trailer";
import Upcoming from "./../Category/Upcoming";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function Main() {
  const { movies } = useContext(AppContext);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  const movie1 = movies[Math.floor(Math.random() * movies.length)];
  const movie2 = movies[Math.floor(Math.random() * movies.length)];

  const data = [
    {
      image: `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`,
      text: "movie title",
    },
    {
      image: `https://image.tmdb.org/t/p/original/${movie1?.backdrop_path}`,
    },
  ];

  const [isLoading, setIsLoading] = React.useState(false);

  const toggleIsLoading = () => {
    setIsLoading((current) => !current);
  };

  const navigation = useNavigation();

  return (
    <View className="w-full h-full">
      <View className="flex flex-row p-2">
        <View className="basis-[30%]">
          <MaterialCommunityIcons
            name={"menu"}
            color={"black"}
            size={30}
            onPress={() => navigation.openDrawer()}
          />
        </View>
        <View className="basis-[55%]">
          <Text className="text-[#FB5558] font-bold text-[25px]">
            movietime
          </Text>
        </View>
        <View className="basis-[20%]">
          <View>
            <MaterialCommunityIcons
              name={"cloud-search-outline"}
              color={"black"}
              size={30}
              onPress={() => navigation.openDrawer()}
            />
          </View>
        </View>
      </View>
      <View className="rounded-2xl mt-3">
        <Image
          className="w-full h-[250px] rounded-2xl"
          source={{
            uri: `https://image.tmdb.org/t/p/original/${movie1?.backdrop_path}`,
          }}
          loading="lazy"
        />
      </View>
      <View>
        <View className="mt-10 mb-[20px]">
          <Popular />
          <Trailer />
          <Comedy />
          <Upcoming />
        </View>
      </View>
    </View>
  );
}
