import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import CardList from "./CardList";
import AntDesign from "@expo/vector-icons/AntDesign";

const ProductList_2 = () => {
  const dataProductCard = [
    {
      id: 1,
      name: "Product 1",
      img: "https://picsum.photos/200",
      price: "$100",
    },
    {
      id: 2,
      name: "Product 2",
      img: "https://picsum.photos/200",
      price: "$200",
    },
    {
      id: 3,
      name: "Product 3",
      img: "https://picsum.photos/200",
      price: "$300",
    },
    {
      id: 4,
      name: "Product 4",
      img: "https://picsum.photos/200",
      price: "$400",
    },
    // Add more products as needed
  ];

  return (
    <SafeAreaView className="px-5 py-5">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View className="flex flex-row w-full items-center justify-between mb-3">
            <Text className="font-pregular text-base">Categories</Text>
            <TouchableOpacity className="flex flex-row">
              <Text className="font-pmedium text-base text-gray text-center">
                See all
              </Text>
              <AntDesign name="right" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex flex-row justify-between items-centerw-full h-[100px]">
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            className="w-[30%] h-[100px] rounded-lg overflow-hidden mr-3"
            width={30}
            height={30}
            resizeMode="cover"
          />
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            className="w-[30%] h-[100px] rounded-lg overflow-hidden mr-3"
            width={30}
            height={30}
            resizeMode="cover"
          />
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            className="w-[30%] h-[100px] rounded-lg overflow-hidden"
            width={30}
            height={30}
            resizeMode="cover"
          />
        </View>

        <View className="flex flex-row w-full justify-between mt-5">
          <ScrollView horizontal showsVerticalScrollIndicator={false}>
            <TouchableOpacity className=" rounded-lg bg-[#00bdd6] px-5 py-2">
              <Text className="font-pmedium text-base text-center">
                Best sales
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="rounded-lg px-5 py-2">
              <Text className="font-pmedium text-base text-center">
                Best matched
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="rounded-lg px-5 py-2">
              <Text className="font-pmedium text-base text-center">
                Popular
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View>
          <View>
            <View className="py-4 flex flex-row flex-wrap justify-between">
              {dataProductCard.map((item) => (
                <View className="w-full mb-2" key={item.id}>
                  <CardList
                    containerStyles={"w-full flex flex-row items-center"}
                    imageStyles={"w-[100px] h-[100px]"}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                  />
                </View>
              ))}
            </View>
          </View>
        </View>

        <View className="w-full h-[200px] rounded-lg">
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            className="w-full h-full rounded-lg overflow-hidden"
            width={30}
            height={30}
            resizeMode="cover"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductList_2;

const styles = StyleSheet.create({});
