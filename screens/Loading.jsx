import * as React from "react";
import { View, Text } from "react-native";

export default function Loading({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text className="font-bold text-3xl text-[#FB5558] animate-bounce">
        MEME
      </Text>
    </View>
  );
}
