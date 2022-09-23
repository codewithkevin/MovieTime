import { View, Text } from 'react-native'
import React from 'react'

export default function Settings() {
  return (
    <View className="flex items-center">
      <View className="bg-blue-400 static w-full h-[300px] items-center rounded-b-2xl">
        <View className="bg-black w-[50%] h-[50px] absolute rounded-full align-center items-center">

        </View>
      </View>
      <Text>Settings</Text>
    </View>
  );
}