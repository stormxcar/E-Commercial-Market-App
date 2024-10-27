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

const ProductList = () => {
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
    <SafeAreaView className="px-3 py-5">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="w-full h-[200px] rounded-lg">
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            className="w-full h-full rounded-lg overflow-hidden"
            width={30}
            height={30}
            resizeMode="cover"
          />
        </View>

        <View className="w-full py-5">
          <View className="">
            <TouchableOpacity className="w-full rounded-md bg-[#00bdd6] p-4">
              <Text className="font-pmedium text-base text-white text-center">
                Show product
              </Text>
            </TouchableOpacity>
            <View className="py-4 flex flex-row flex-wrap justify-between">
              {dataProductCard.map((item) => (
                <View className="w-[47%] m-1" key={item.id}>
                  <CardList
                    containerStyles={"w-full"}
                    imageStyles={"w-full h-[150px]"}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                  />
                </View>
              ))}
            </View>
          </View>
          <View>
            <TouchableOpacity className="p-3 rounded-lg bg-gray-200">
              <Text className="text-base font-pmedium text-center">
                See all
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View>
            <Text className="text-base font-pmedium mt-3">Relevant products</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
