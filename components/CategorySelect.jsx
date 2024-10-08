import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const CategorySelect = ({ img, categoryName }) => {
  return (
    <TouchableOpacity className="flex flex-col items-center justify-center pr-3 gap-3">
      <View className="bg-purple-300 rounded-full w-[100px] h-[100px] flex items-center justify-center p-4">
        <Image
          className="w-[50px] h-[50px]"
          source={{ uri: img }}
          resizeMode="contain"
        />
      </View>

      <Text className="font-pregular text-base">{categoryName}</Text>
    </TouchableOpacity>
  );
};

export default CategorySelect;

const styles = StyleSheet.create({});
