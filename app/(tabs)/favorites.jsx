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
        <View className="px-5 py-5">
          <Text className="text-base font-pmedium pb-3">
            Recommended products
          </Text>
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

        <View className="px-5">
          <TouchableOpacity className="w-full p-3 rounded-md bg-white border-[1px] mb-3">
            <Text className="text-base font-psemibold text-center">Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-full p-3 rounded-md bg-[#00bdd6]">
            <Text className="text-base font-psemibold text-center text-white">
              Continue shopping
            </Text>
          </TouchableOpacity>
        </View>

        <View className="px-5 pt-8 pb-5 flex flex-row justify-between items-center w-full">
          <Text className="text-base font-pmedium">Your favorites</Text>
          <TouchableOpacity className="flex flex-row ">
            <Text>See all</Text>
            <AntDesign name="right" size={22} color="black" />
          </TouchableOpacity>
        </View>
        <View className="px-5">
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
