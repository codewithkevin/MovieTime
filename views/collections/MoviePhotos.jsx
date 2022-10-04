import { View, Text } from 'react-native'
import React from 'react'

const MoviePhotos = ({ dtat }) => {
  return (
    <View showsHorizontalScrollIndicator={false} horizontal={true}>
      {dtat.map((item) => {
        return (
          <View>
            <Text>Hello</Text>
          </View>
        );
      })}
    </View>
  );
};

export default MoviePhotos