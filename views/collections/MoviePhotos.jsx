import { View, Text, Image } from "react-native";
import React from "react";

const MoviePhotos = ({ dtat }) => {
  //Option One
  //   Object.values(dtat).map((x) => console.log(x.aspect_ratio));

  return (
    <View
      showsHorizontalScrollIndicator={false}
      vertical={false}
      horizontal={true}
    >
      <Text className="font-bold text text-xl">IMAGES</Text>
      <View>
        {dtat.map((item) => {
          const image = `https://image.tmdb.org/t/p/original/${item?.file_path}`;

          return (
            <View>
              <Image
                className="w-[150px] flex h-[200px] rounded-2xl"
                source={{
                  uri: image,
                }}
                loading="lazy"
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default MoviePhotos;
