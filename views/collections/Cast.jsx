import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

const Cast = ({ cast }) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      className="mb-10"
    >
      {cast.map((item) => {
        const image = `https://image.tmdb.org/t/p/original/${item?.profile_path}`;
        return (
          <View className="flex mx-4 justify-between">
            <Image
              className="w-[100px] h-[100px] rounded-full"
              source={{
                uri: image,
              }}
              loading="lazy"
            />
            <Text className="mt-1 text-center">{item.name}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Cast;
