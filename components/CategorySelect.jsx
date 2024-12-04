import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const CategorySelect = ({
  id,
  img,
  categoryName,
  containerStyles,
  containerStylesImg,
  discount
}) => {
  return (
    <Link
      href={{ pathname: "details/ProductList_2", params: { categoryName, id ,discount} }}
      asChild
    >
      <TouchableOpacity
        className={`flex flex-col items-center justify-center pr-3  ${containerStyles}`}
      >
        <View
          className={`${containerStylesImg} flex items-center justify-center p-2 mb-2`}
        >
          <Image
            className="w-10 h-10 m-2"
            source={{ uri: img }}
            resizeMode="contain"
          />
        </View>

        <Text className="font-pregular text-xs break-words">
          {categoryName}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default CategorySelect;

const styles = StyleSheet.create({});
