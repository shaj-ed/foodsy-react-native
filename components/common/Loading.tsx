import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

const Loading = () => {
  return (
    <View className="flex-col items-center mt-10">
      <ActivityIndicator />
      <Text className="text-lg">Loading..</Text>
    </View>
  );
};

export default Loading;
