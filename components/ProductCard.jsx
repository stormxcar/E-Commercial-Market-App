import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";

const ProductCard = ({ img, name, countReviews, price, containerStyles }) => {
  return (
    <Link href={{pathname: "details/productDetail", params: {name} }} asChild>
      <TouchableOpacity
        className={`bg-gray-200 ${containerStyles} py-3 mr-2 rounded-lg`}
      >
        <View className="w-full h-[150px] p-3">
          <Image
            source={img}
            className="w-full h-full object-contain"
          />
        </View>

        <Text className="py-2 text-base font-psemibold px-3">{name}</Text>
        <View className="flex flex-row w-full justify-between items-center px-3">
          <View className="flex flex-row items-center justify-center">
            <AntDesign name="star" size={15} color="orange" />
            <Text className="text-base font-pregular ml-1">{countReviews}</Text>
          </View>
          <Text className="text-base font-pregular">${price}</Text>
        </View>
        <Text className="py-2 text-sm font-pregular px-3">Sold out: 2999</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
