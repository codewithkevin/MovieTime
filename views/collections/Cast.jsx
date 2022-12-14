import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Cast = ({ cast }) => {
  const navigation = useNavigation();

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      className="mb-10"
    >
      {cast.map((item) => {
        const image = `https://image.tmdb.org/t/p/original/${item?.profile_path}`;
        const profile_id = item.id;
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Bio", {
                id: profile_id,
                profile: image,
                Ocuupation: item.known_for_department,
                gender: item.gender,
                name: item.name,
              })
            }
            className="flex mx-4 justify-between"
          >
            <Image
              className="w-[100px] h-[100px] rounded-full"
              source={{
                uri: image,
              }}
              loading="lazy"
            />
            <Text className="mt-1 text-center">{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Cast;
