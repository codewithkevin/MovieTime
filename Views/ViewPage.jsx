import React, { useContext, useState, useEffect } from "react";
// import axios from "axios";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Video,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { AppContext } from ".././context/AppContext";
import Popular from "./../components/Category/Popular";

export default function ViewPage() {
  const route = useRoute();
  // const { movies, trialler, comedy, upcoming, isSwitchOn } =
  //   useContext(AppContext);
  const { isSwitchOn } = useContext(AppContext);

  //UseRoute is deprecated in favor of useNavigation
  const id = route.params.id;
  const name = route.params.name;
  const background = route.params.background;
  const vote = route.params.vote;
  const date = route.params.date;
  const popularity = route.params.popularity;
  const language = route.params.language;
  const overview = route.params.overview;
  const poster = route.params.poster;

  const navigation = useNavigation();

  const [value, setvalue] = useState([]);

  const truncatedString = (str, num) => {
    if (str?.length > num) {
      return str.substring(0, num) + "...";
    } else {
      return str;
    }
  };

  // const picture = `https://api.themoviedb.org/3/movie/${id}/images?api_key=34afe6db454cd5e04ddd03b2ca5562a5`;

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get(
  //       `https://api.themoviedb.org/3/movie/${id}/images?api_key=34afe6db454cd5e04ddd03b2ca5562a5`
  //     );

  //     const data = await response.data;
  //     // console.log(data.backdrops[0].file_path);
  //     return data;
  //   }

  //   setvalue((value) => {
  //     value = fetchData();
  //     console.log(value);
  //   });
  // }, []);

  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        key={id}
        className="static h-full w-full"
      >
        <View key={id}>
          <Image
            className="w-[450px] h-[250px] rounded-b-[100px]"
            source={{
              uri: background,
            }}
          />
          <View className="flex flex-row">
            <View className="flex-none w-14 h-14">
              <Image
                className="absolute flex-none left-0 ml-5 w-[150px] mt-[-60px] h-[200px] rounded-2xl"
                source={{
                  uri: poster,
                }}
                loading="lazy"
              />
            </View>
            <View className="flex-initial ml-[120px] mt-5 w-54">
              <Text
                style={{ color: isSwitchOn === true ? "white" : "black" }}
                className="font-bold  text-center text-lg basis-1/2"
              >
                {name}
              </Text>
              <View className="mt-2 mb-4 ml-10">
                <Text
                  style={{
                    color: isSwitchOn === true ? "white" : "black",
                  }}
                >
                  Watch Time:2hrs 30 min
                </Text>
                <Text
                  style={{
                    color: isSwitchOn === true ? "white" : "black",
                  }}
                >
                  Rating:{vote}
                </Text>
              </View>
              <View className="flex flex-row space-x-1">
                <Text className="bg-blue-800 text-white p-2 rounded">
                  Action
                </Text>
                <Text className="bg-blue-800 hover:bg-blue-700 text-white p-2 rounded">
                  Drama
                </Text>
                <Text className="bg-blue-800 hover:bg-blue-700 text-white  p-2 rounded">
                  Adventure
                </Text>
              </View>
            </View>
          </View>
          <View className="p-5 mt-3">
            <Text
              style={{ color: isSwitchOn === true ? "white" : "black" }}
              className="font-bold text-xl mt-5"
            >
              ABOUT
            </Text>
            <Text
              style={{ color: isSwitchOn === true ? "white" : "black" }}
              className="font-md text-lg"
            >
              Release date: <Text className="font-light">{date}</Text>
            </Text>
            <Text
              style={{ color: isSwitchOn === true ? "white" : "black" }}
              className="font-md text-lg"
            >
              Popularity: <Text className="font-light">{popularity}</Text>
            </Text>
            <Text
              style={{ color: isSwitchOn === true ? "white" : "black" }}
              className="font-md text-lg"
            >
              Language: <Text className="font-light">{language}</Text>
            </Text>
          </View>
          <View className="ml-5">
            <Text
              style={{ color: isSwitchOn === true ? "white" : "black" }}
              className="font-bold text-lg"
            >
              OVERVIEW
            </Text>
            <Text
              style={{ color: isSwitchOn === true ? "white" : "black" }}
              className="font-light"
            >
              {overview}
            </Text>
          </View>
          <View className="ml-5 mt-3 -scroll-mb-3.5">
            <Text
              style={{ color: isSwitchOn === true ? "white" : "black" }}
              className="font-bold text-lg ml-1"
            >
              CAST
            </Text>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              <View className="fles flex-row space-x-5">
                <Image
                  className="w-[100px] h-[100px] rounded-full"
                  source={{
                    uri: `https://d31wcbk3iidrjq.cloudfront.net/o_-jrOudQ_avatar-mW86BWWsj.jpg?h=900&w=750%27`,
                  }}
                />
                <Image
                  className="w-[100px] h-[100px] rounded-full"
                  source={{
                    uri: `https://www.tvguide.com/a/img/resize/65d292bddc2eed17070e31ad5e73a70717f1bf4a/catalog/provider/10/9/10-33ACE945-90AC-4BD3-964B-81EA3E071D2E.png?auto=webp&fit=crop&height=300&width=200`,
                  }}
                />
                <Image
                  className="w-[100px] h-[100px] rounded-full"
                  source={{
                    uri: `https://www.tvguide.com/a/img/resize/274629d98dc6608018f6cd870b2d25b669e84a36/catalog/provider/10/9/10-ECC06291-864C-4CCF-B500-C02AA09F48C9.png?auto=webp&fit=crop&height=300&width=200`,
                  }}
                />
                <Image
                  className="w-[100px] h-[100px] rounded-full"
                  source={{
                    uri: `https://www.tvguide.com/a/img/resize/9c0c38c085b35cb90454a8baf5d17dec13979d56/catalog/provider/10/9/10-13D84D2E-C6BE-4F98-89C4-F5F4BD410F71.png?auto=webp&fit=crop&height=300&width=200`,
                  }}
                />
              </View>
            </ScrollView>
          </View>

          <View className="p-5">
            <Popular />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
