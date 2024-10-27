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
import { Link } from "expo-router";

const CategoryCard = ({
  categoryName,
  discount,
  img,
  CustomButton,
  containerStyles,
  onPress,
}) => {
  return (
    <View className={`flex-1 ${containerStyles} `}>
      <Link href="../details/ProductDetail_2" asChild>
        <TouchableOpacity onPress={onPress} className="rounded-lg w-full shadow-xl">
          <ImageBackground
            source={{ uri: img }}
            className="w-full h-[200px] rounded-lg object-cover overflow-hidden shadow-2xl"
          >
            {categoryName ? (
              <Text className="font-pregular text-[#00BDD6] text-base pt-10 px-5">
                {categoryName}
              </Text>
            ) : null}
            {discount ? (
              <Text className="font-pregular text-[#00BDD6] text-base px-5">
                {discount}
              </Text>
            ) : null}
            {CustomButton ? (
              <View className="mt-2 px-5">
                <CustomButton />
              </View>
            ) : null}
            {!categoryName && !discount && !CustomButton ? (
              <View className="h-full w-full" />
            ) : null}
          </ImageBackground>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({});
