import { View, TextInput, TouchableOpacity, Alert } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, useRouter } from "expo-router";

const SearchBox = ({
  setSearchQuery,
  onFocus,
}) => {
  return (
    <View className="px-3 py-6 items-center flex flex-row justify-between w-full bg-cyan-300">
      <View className="bg-gray-100 flex-1 flex-row border-[1px] rounded-sm">
        <View className="m-2">
          <AntDesign name="search1" size={24} color="black" />
        </View>
        <TextInput
          className="text-black font-pregular text-base"
          placeholder="Search"
          textAlignVertical="center"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="lightgray"
          textContentType="none"
          underlineColorAndroid="transparent"
          paddingVertical={0}
          onFocus={onFocus}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
      
    </View>
  );
};

export default SearchBox;
