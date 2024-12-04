import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
// import CustomButton from "./CustomButton";
import { Link } from "expo-router";

const CategoryCard = ({
  id,
  name,
  discount,
  img,
  CustomButton,
  containerStyles,
  onPress,
  price,
  priceInit,
  displayType
}) => {
  return (
    <View className={`flex-1 ${containerStyles} `}>
      <Link
      href={{
        pathname: `../details/ProductDetail_${displayType}`,
        params: { id, img, name, price, displayType ,discount},
      }}
      asChild
    >
        <TouchableOpacity
          onPress={onPress}
          className="rounded-lg w-full shadow-xl border-[1px] border-gray-100"
        >
          <ImageBackground
            source={{ uri: img }}
            className="w-full h-[200px] rounded-t-lg object-contain overflow-hidden shadow-2xl"
          >
            {/* {name ? (
              <Text className="font-psemibold text-[#00BDD6] text-base pt-10 px-5">
                {name}
              </Text>
            ) : null} */}
            {discount ? (
              <View className="bg-cyan-100 absolute top-0 right-0 w-[100px] p-1">
                <Text className="font-pbold text-red-600 text-base px-5">
                  {discount}
                </Text>
              </View>
            ) : null}
            {CustomButton ? (
              <View className="mt-2 px-5">
                <CustomButton />
              </View>
            ) : null}
            {!name && !discount && !CustomButton ? (
              <View className="h-full w-full" />
            ) : null}
          </ImageBackground>
          <View className="flex-row items-center justify-between">
            <View className=" bg-white p-2 flex-1 rounded-bl-lg flex-row justify-center">
              <Text className="text-sm line-through font-pmedium text-gray-400 mr-3">
                $120
              </Text>
              <Text className="text-center font-pbold text-base text-[#00BDD6]">
                ${price}
              </Text>
            </View>
            <View className="flex-1 rounded-b-lg">
              <Link href="../details/ProductDetail_2" asChild>
                <TouchableOpacity className="bg-[#00BDD6] p-2 rounded-br-lg">
                  <Text className="text-white font-pmedium text-base text-center">
                    Buy now
                  </Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({});
