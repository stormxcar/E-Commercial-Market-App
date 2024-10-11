import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const CategorySelect = ({ img, categoryName, containerStyles }) => {
  return (
    <TouchableOpacity
      className={`flex flex-col items-center justify-center pr-3 gap-3 ${containerStyles}`}
    >
      <View className="bg-purple-100 rounded-full flex items-center justify-center p-4 ">
        <Image
          className="w-10 h-10 m-2"
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
