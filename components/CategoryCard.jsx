import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import CustomButton from "./CustomButton";

const CategoryCard = ({ categoryName, discount, img, CustomButton, containerStyles }) => {
  return (
    <View className={`flex-1 ${containerStyles} `}>
      <TouchableOpacity className="rounded-lg w-full">
        <ImageBackground source={{ uri: img }} className="w-full h-[200px] rounded-lg object-cover overflow-hidden ">
          {categoryName ? <Text className="font-pregular text-[#00BDD6] text-base">{categoryName}</Text> : null}
          {discount ? <Text className="font-pregular text-[#00BDD6] text-base" >{discount}</Text> : null}
          {CustomButton ? (
            <View className="mt-2">
              <CustomButton />
            </View>
          ) : null}
          {!categoryName && !discount && !CustomButton ? (
            <View className="h-full w-full" />
          ) : null}
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({});
