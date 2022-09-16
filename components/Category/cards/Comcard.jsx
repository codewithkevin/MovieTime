import React, { useContext } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./../../../firebse";

export default function Comcard({ movie, theme }) {
  const [color, setColor] = React.useState(false);

  const image = `https://image.tmdb.org/t/p/original/${movie?.poster_path}`;

  const toggleIsLoading = async () => {
    setColor((current) => !current);
    if (color === false) {
      try {
        const docRef = await addDoc(collection(db, "collections"), {
          id: movie.id,
          Image: image,
          name: movie.title,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      alert("Removed");
    }
  };

  const truncatedString = (str, num) => {
    if (str?.length > num) {
      return str.substring(0, num) + "...";
    } else {
      return str;
    }
  };
  const navigation = useNavigation();

  return (
    <View key={movie.id} className="mx-4">
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ViewPage", {
            id: movie.id,
            name: movie.title,
            background: image,
            vote: movie?.vote_average,
            date: movie?.release_date,
            popularity: movie?.popularity,
            language: movie?.original_language,
            overview: movie?.overview,
            poster: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
          })
        }
      >
        <Image
          className="w-[150px] h-[190px] rounded-2xl"
          source={{ uri: image }}
          loading="lazy"
        />
      </TouchableOpacity>
      <View className="flex flex-row space-x-2">
        <MaterialCommunityIcons
          name={"cards-heart"}
          color={color ? "red" : "gray"}
          size={27}
          onPress={toggleIsLoading}
        />
        <Text
          style={{ color: theme === true ? "white" : "black" }}
          className="mt-1"
        >
          {truncatedString(movie?.title, 10)}
        </Text>
      </View>
    </View>
  );
}
