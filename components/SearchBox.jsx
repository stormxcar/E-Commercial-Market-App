import {
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, useRouter } from "expo-router";

const SearchBox = ({onFocus}) => {
  const router = useRouter();
  return (
    <View className="bg-white px-3 py-4 items-center flex flex-row justify-between w-full relative ">
      <View className=" bg-gray-100 flex-1 flex-row items-center border-[1px] rounded-sm p-2 mr-2">
        <AntDesign className="mr-2" name="search1" size={24} color="black" />
        <TextInput
          className="flex-1 pl-2 text-black font-pregular text-base"
          placeholder="Search"
          onFocus={onFocus}
        />
      </View>
      <Link  href={{pathname: "../details/FilterProduct", params: {name : "Filter"} }} asChild>
        <TouchableOpacity className="border-[1px] p-[9px] rounded-sm">
          <Ionicons name="filter" size={24} color="black" />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default SearchBox;
