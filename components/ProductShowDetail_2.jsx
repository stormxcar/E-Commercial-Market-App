import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Switch,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import ProductCard from "./ProductCard";

const ProgressBar = ({ percentage, label }) => {
  return (
    <View className="flex-row items-center mb-2">
      <Text className="text-sm font-pregular text-gray-500 w-16">{label}</Text>
      <View className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden ml-2">
        {/* Thanh màu cam thể hiện tỷ lệ phần trăm */}
        <View
          style={{ width: `${percentage}%` }}
          className="h-full bg-orange-500"
        />
      </View>
    </View>
  );
};

const ProductDetail_2 = () => {
  const dataProduct = [
    {
      id: 1,
      img: "https://picsum.photos/200",
      name: "Product1",
      countReviews: "10",
      price: "100",
    },
    {
      id: 2,
      img: "https://picsum.photos/200",
      name: "Product1",
      countReviews: "10",
      price: "100",
    },
    {
      id: 3,
      img: "https://picsum.photos/200",
      name: "Product1",
      countReviews: "10",
      price: "100",
    },
    {
      id: 4,
      img: "https://picsum.photos/200",
      name: "Product1",
      countReviews: "10",
      price: "100",
    },
    {
      id: 5,
      img: "https://picsum.photos/200",
      name: "Product1",
      countReviews: "10",
      price: "100",
    },
  ];

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView>
      <ScrollView className="px-3 py-5 flex flex-col">
        <View className="w-full rounded-lg">
          <View className="w-full h-[200px] mb-3">
            <Image
              source={{ uri: "https://picsum.photos/200" }}
              className="w-full h-full rounded-lg overflow-hidden"
              resizeMode="cover"
            />
          </View>

          <View className="flex flex-row w-full h-16 items-center justify-between my-3 py-3">
            <Image
              source={{ uri: "https://picsum.photos/200" }}
              className="w-[23%] h-[70px] rounded-lg overflow-hidden mr-2"
              width={30}
              height={30}
              resizeMode="cover"
            />
            <Image
              source={{ uri: "https://picsum.photos/200" }}
              className="w-[23%] h-[70px] rounded-lg overflow-hidden mr-2"
              width={30}
              height={30}
              resizeMode="cover"
            />
            <Image
              source={{ uri: "https://picsum.photos/200" }}
              className="w-[23%] h-[70px] rounded-lg overflow-hidden mr-2"
              width={30}
              height={30}
              resizeMode="cover"
            />
            <Image
              source={{ uri: "https://picsum.photos/200" }}
              className="w-[23%] h-[70px] rounded-lg overflow-hidden"
              width={30}
              height={30}
              resizeMode="cover"
            />
          </View>
        </View>

        <View className="flex flex-row my-3 items-center">
          <Text className="text-base font-psemibold mr-3">$2.99</Text>
          <TouchableOpacity className="flex flex-row items-center bg-gray-300 py-2 px-5 rounded-lg">
            <Text className="font-pregular text-xs text-center">
              Buy 1 get 1
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex flex-row justify-between my-3 items-center">
          <View>
            <Text className="text-base font-psemibold">Hoodle Shirt</Text>
            <Text className="text-sm">
              Occaecat est deserat tempourt office
            </Text>
          </View>

          <View className="flex flex-row gap-2 items-center">
            <AntDesign name="star" size={20} color="orange" />
            <Text className="font-pregular">4.5</Text>
          </View>
        </View>

        <View>
          <Text className="text-base font-psemibold my-3">Color</Text>
          <View className="flex flex-row ">
            <TouchableOpacity className="flex flex-row items-center bg-purple-500 p-5 rounded-full mr-3"></TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center bg-red-300 p-5 rounded-full mr-3"></TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center bg-blue-600 p-5 rounded-full"></TouchableOpacity>
          </View>
        </View>

        <View className="flex flex-col w-full my-8 py-3">
          <Text className="text-base font-psemibold mb-3">Size</Text>
          <View className="flex flex-row ">
            <TouchableOpacity className="flex flex-row items-center p-3 rounded-sm mr-1 border-2">
              <Text>XS</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center p-3 rounded-sm mr-1 border-2">
              <Text>S</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center p-3 rounded-sm mr-1 border-2">
              <Text>M</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center p-3 rounded-sm mr-1 border-2">
              <Text>L</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center p-3 rounded-sm mr-1 border-2">
              <Text>XL</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View className="flex flex-row justify-between w-full items-center mb-4">
            <Text className="text-base font-psemibold">Quantity</Text>
          </View>

          <View className="flex flex-row justify-between items-center p-3 border-b-2 pb-5">
            <View className="flex flex-row">
              <View className="flex flex-row justify-between w-full items-center">
                <View className="flex flex-row items-center">
                  <TouchableOpacity className="flex flex-row items-center px-4 py-3 rounded-lg mr-1 bg-gray-300">
                    <Text>-</Text>
                  </TouchableOpacity>
                  <TextInput
                    className="p-2 mr-1 text-center font-psemibold text-base"
                    value="2"
                  />
                  <TouchableOpacity className="flex flex-row items-center px-4 py-3 rounded-lg bg-[#00BDD6] mr-1">
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>

                <View className="flex flex-row items-center mt-2 mb-4">
                  <Text className="text-base font-pregular mr-3">Total</Text>
                  <Text className="text-lg font-pmedium">$4,98</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="pt-4 pb-5 flex flex-row items-center justify-between border-b-2 my-3">
            <Text className="text-base font-psemibold">Size guide</Text>
            <TouchableOpacity className="flex">
              <AntDesign name="right" size={20} color="black" />
            </TouchableOpacity>
          </View>

          <View className="pt-4 pb-5 flex flex-row items-center justify-between border-b-2 my-3">
            <View className="flex flex-row items-center">
              <Text className="text-base font-psemibold">Reviews </Text>
              <Text className="text-base font-psemibold">(99) </Text>
            </View>

            <TouchableOpacity className="flex">
              <AntDesign name="right" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity className="bg-[#00bdd6] flex flex-row items-center justify-center my-4 rounded-sm p-3">
          <Ionicons name="cart-outline" size={24} color="white" />
          <Text className="font-pregular text-base text-white ml-2">
            Add to cart
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetail_2;

const styles = StyleSheet.create({});
