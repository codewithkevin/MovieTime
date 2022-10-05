import { NavigationContainer } from "@react-navigation/native";
import {
  Button,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./../firebse";
import { useAuthentication } from "./../hooks/useAuthentication";
import { ThemeContext } from "./../context/ThemeContext";

export default function Favorite({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const { isSwitchOn } = useContext(ThemeContext);

  const { user } = useAuthentication();
  const user_name = user?.email;

  useEffect(() => {
    handle();
  }, []);

  const handle = () => {
    const favcollection = collection(db, "collections");
    getDocs(favcollection)
      .then((response) => {
        const movs = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        const get_account = response.docs.map((doc) => ({
          data: doc.data(),
        }));
        setAccounts(get_account);
        setMovies(movs);
      })
      .catch((error) => console.log(error.message));
  };

  const getAccount = movies.map((elem) => ({
    user_account: elem.data.account,
  }));

  console.log(getAccount);

  const truncatedString = (str, num) => {
    if (str?.length > num) {
      return str.substring(0, num) + "...";
    } else {
      return str;
    }
  };
  // const image = `https://image.tmdb.org/t/p/original/${item?.poster_path}`;

  return (
    <SafeAreaView className="flex p-3 mb-[200px] w-full h-full">
      <FlatList
        data={movies}
        renderItem={({ item }) =>
          user_name == item.data.account ? (
            <View className="flex p-3 space-x-4 justify-evenly">
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ViewPage", {
                    id: item.id,
                    name: item.title,
                    background: `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
                    vote: item?.vote_average,
                    date: item?.release_date,
                    popularity: item?.popularity,
                    language: item?.original_language,
                    overview: item?.overview,
                    poster: `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
                  })
                }
              >
                <Image
                  className="w-[170px] h-[190px] rounded-2xl"
                  source={{ uri: item.data.Image }}
                  loading="lazy"
                />
              </TouchableOpacity>
              <Text style={{ color: isSwitchOn === true ? "white" : "black" }}>
                {truncatedString(item.data.name, 15)}
              </Text>
            </View>
          ) : null
        }
        numColumns={2.5}
      />
    </SafeAreaView>
  );
}
