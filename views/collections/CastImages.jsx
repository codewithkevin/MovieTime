import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

export default function CastImages({ images }) {
  return (
    <ScrollView
      className="flex flex-1"
      showsHorizontalScrollIndicator={false}
      vertical={false}
      horizontal={true}
    >
      {images.map((item) => {
        const image = `https://image.tmdb.org/t/p/original/${item?.file_path}`;
        return (
          <View className="flex mt-5 mx-4 justify-between">
            <Image
              className="w-[250px] h-[180px] rounded-2xl"
              source={{
                uri: image,
              }}
              loading="lazy"
            />
          </View>
        );
      })}
    </ScrollView>
  );
}
