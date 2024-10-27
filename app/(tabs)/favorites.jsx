import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ProductCard from "../../components/ProductCard";
import AntDesign from "@expo/vector-icons/AntDesign";

const Favorites = () => {
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
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="px-3 py-2">
          <View className="flex flex-row items-center justify-between pb-3">
            <Text className="text-base font-psemibold text-gray-600">
              Recommended products
            </Text>
            <TouchableOpacity className="flex flex-row items-center">
              <Text className="font-pregular text-gray-400">see more</Text>
              <AntDesign name="right" size={16} color="black" />
            </TouchableOpacity>
          </View>

          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex flex-row w-full ">
                {dataProduct.map((item) => (
                  <ProductCard
                    containerStyles="w-[25%]"
                    key={item.id}
                    img={item.img}
                    name={item.name}
                    countReviews={item.countReviews}
                    price={item.price}
                    productId={item.id}
                  />
                ))}
              </View>
            </ScrollView>
          </View>
        </View>

        <View className="px-3 mt-2">
          <TouchableOpacity className="w-full p-3 rounded-md bg-white border-[1px] mb-2">
            <Text className="text-base font-psemibold text-center">Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity className=" flex flex-row items-center justify-center p-3 rounded-md bg-[#00bdd6]">
            <AntDesign name="left" size={20} color="white" />
            <Text className="text-base font-psemibold text-center text-white ml-2">
              Continue shopping
            </Text>
          </TouchableOpacity>
        </View>

        <View className="px-3 pt-8 pb-3 flex flex-row justify-between items-center w-full">
          <Text className="text-base font-psemibold text-gray-600">Your favorites</Text>
          <TouchableOpacity className="flex flex-row ">
            <Text className="font-pregular text-sm text-gray-400">See all</Text>
            <AntDesign name="right" size={22} color="gray" />
          </TouchableOpacity>
        </View>
        <View className="px-3">
          <View>
            {dataProduct.map((item) => (
              <ProductCard
                containerStyles="w-full mb-4"
                key={item.id}
                img={item.img}
                name={item.name}
                countReviews={item.countReviews}
                price={item.price}
                productId={item.id}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorites;

const styles = StyleSheet.create({});
