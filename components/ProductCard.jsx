import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";

const ProductCard = ({
  id,
  img,
  name,
  countReviews,
  price,
  containerStyles,
  status,
}) => {
  return (
    <Link
      href={{
        pathname: "details/productDetail",
        params: { id, img, name, countReviews, price, status },
      }}
      asChild
    >
      <TouchableOpacity
        className={`bg-gray-200 ${containerStyles} py-3 mr-2 rounded-lg`}
      >
        <View className="w-full h-[150px] p-3">
          <Image source={{uri:img}} className="w-full h-full object-contain" />
        </View>

        <Text className="py-2 text-base font-psemibold px-3">{name}</Text>
        <View className="flex flex-row w-full px-3">
          <View className="flex flex-row items-center justify-center">
            <AntDesign name="star" size={15} color="orange" />
            <AntDesign name="star" size={15} color="orange" />
            <AntDesign name="star" size={15} color="orange" />
            <AntDesign name="star" size={15} color="orange" />
            <AntDesign name="star" size={15} color="orange" />
          </View>
          <Text className="text-base font-pregular ml-1">({countReviews})</Text>
        </View>
        <View className="flex flex-row px-3 py-2">
          <Text className="text-sm line-through font-pregular text-gray-400 mr-3">
            $120
          </Text>
          <Text className="text-base font-pregular">${price}</Text>
          <Text className="text-sm font-pregular text-white ml-3 px-2 bg-cyan-400">
            -20%
          </Text>
        </View>
        <Text className="py-2 text-sm font-pregular px-3">Sold out: 2999</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
