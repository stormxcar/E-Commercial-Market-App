import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const CardCheckout = ({name,img,status,price,quantity}) => {
  return (
    <View className="border-2 w-full p-3 flex-row mb-2">
      <View className="w-[30%] ">
        <Image
          source={{ uri: img }}
          className="w-20 h-20 object-cover mr-3 bg-gray-200"
        />
      </View>
      <View className="flex-col w-[70%] ">
        <View className="flex-row justify-between mb-6">
          <View>
            <Text className="text-base font-pmedium">{name}</Text>
            <Text className="text-sm font-pregular">{status}</Text>
          </View>
          <View>
            <AntDesign name="right" size={20} color="black" />
          </View>
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-pmedium">${price}</Text>
          <Text className="text-base font-pmedium">x{quantity}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardCheckout;

const styles = StyleSheet.create({});
