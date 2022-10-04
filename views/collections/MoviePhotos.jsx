import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const MoviePhotos = ({ dtat }) => {
  //Option One
  //   Object.values(dtat).map((x) => console.log(x.aspect_ratio));

  return (
    <ScrollView
      className="flex flex-1"
      showsHorizontalScrollIndicator={false}
      vertical={false}
      horizontal={true}
    >
      {dtat.map((item) => {
        const image = `https://image.tmdb.org/t/p/original/${item?.file_path}`;

        return (
          <View className="flex mx-4 justify-between">
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
};

export default MoviePhotos;
