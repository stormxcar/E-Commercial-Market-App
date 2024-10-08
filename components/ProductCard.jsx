import { StyleSheet, Text, View ,Image} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const ProductCard = ({ img, name, countReviews, price }) => {
  return (
    <View className="bg-gray-200 w-[150px] py-3 px-4 mr-3 rounded-lg">
      <Image source={{ uri: img }} className="w-full h-[150px] object-cover text-center" />
      <Text className="py-2 text-base font-psemibold">{name}</Text>
      <View className="flex flex-row w-full justify-between items-center">
        <View className="flex flex-row items-center gap-2 justify-center">
          <AntDesign name="star" size={24} color="yellow" />
          <Text className="text-base font-pregular">{countReviews}</Text>
        </View>
        <Text className="text-base font-pregular">${price}</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
