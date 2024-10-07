import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchBox = () => {
  return (
    <View className="bg-white px-5 py-4 items-center flex flex-row justify-between w-full gap-2 relative">
      <View className=" bg-gray-100 flex-1 flex-row items-center border-2 rounded-sm p-2">
        <AntDesign className="mr-2" name="search1" size={24} color="black" />
        <TextInput
          className=" flex-1 pl-2 text-black font-pregular text-base"
          placeholder="Search"
        />
      </View>
      <TouchableOpacity className="border-2 p-2 rounded-sm">
        <Ionicons name="filter" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBox;
