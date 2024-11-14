import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import CardList from "./CardList";
import AntDesign from "@expo/vector-icons/AntDesign";
import Swiper from "react-native-swiper";
import ProductCard from "./ProductCard";

const ProductShowList_2 = () => {
  const dataProductCard = [
    {
      id: 1,
      name: "Smart Phone",
      img: "https://picsum.photos/200",
      price: "$899",
    },
    {
      id: 2,
      name: "Smart Phone",
      img: "https://picsum.photos/200",
      price: "$899",
    },
    {
      id: 3,
      name: "Smart Phone",
      img: "https://picsum.photos/200",
      price: "$789",
    },
    {
      id: 4,
      name: "Smart Phone",
      img: "https://picsum.photos/200",
      price: "$999",
    },
    // Add more products as needed
  ];

  const dataProduct = [
    {
      id: 1,
      img: require("../assets/images/product_shoe.png"),
      name: "Sneaker",
      countReviews: "10",
      price: "100",
    },
    {
      id: 2,
      img: require("../assets/images/product_tablet.png"),
      name: "Tablet",
      countReviews: "10",
      price: "100",
    },
    {
      id: 3,
      img: require("../assets/images/product_cloth.png"),
      name: "Kid cloth",
      countReviews: "10",
      price: "100",
    },
    {
      id: 4,
      img: require("../assets/images/product_fruit.png"),
      name: "Green avocado",
      countReviews: "10",
      price: "100",
    },
  ];

  const [selectedButton, setSelectedButton] = useState("Best sales");

  const handlePress = (button) => {
    setSelectedButton(button);
  };

  const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/301",
    "https://picsum.photos/200/302",
  ];
  return (
    <SafeAreaView className="px-3 py-5">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View className="flex flex-row w-full items-center justify-between mb-3">
            <Text className="font-pmedium text-base">Sale products</Text>
            <TouchableOpacity className="flex flex-row">
              <Text className="font-pregular text-base text-gray-400 text-center">
                See all
              </Text>
              <AntDesign name="right" size={20} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex flex-row justify-between items-centerw-full h-auto">
          <FlatList
            data={dataProduct}
            keyExtractor={(item) => item.id}
            ld
            renderItem={({ item }) => {
              return (
                <ProductCard
                  img={item.img}
                  name={item.name}
                  countReviews={item.countReviews}
                  price={item.price}
                  productId={item.id}
                  containerStyles={"w-[150px]"}
                />
              );
            }}
            className=""
            horizontal // Thêm thuộc tính horizontal để dàn các mục ra hàng ngang
            showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
          />
        </View>

        <View className="flex flex-row w-full justify-between mt-5">
          <ScrollView horizontal showsVerticalScrollIndicator={false}>
            <TouchableOpacity
              className={`rounded-lg px-5 py-2 mr-3 ${
                selectedButton === "Best sales" ? "bg-[#00bdd6]" : "bg-gray-200"
              }`}
              onPress={() => handlePress("Best sales")}
            >
              <Text className="font-pmedium text-base text-center">
                Best sales
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`rounded-lg px-5 py-2 mr-3 ${
                selectedButton === "Best matched"
                  ? "bg-[#00bdd6]"
                  : "bg-gray-200"
              }`}
              onPress={() => handlePress("Best matched")}
            >
              <Text className="font-pmedium text-base text-center">
                Best matched
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`rounded-lg px-5 py-2 ${
                selectedButton === "Popular" ? "bg-[#00bdd6]" : "bg-gray-200"
              }`}
              onPress={() => handlePress("Popular")}
            >
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

        <View className="w-full h-[200px] rounded-lg overflow-hidden">
          <Swiper showsButtons={true} autoplay={true} autoplayTimeout={3}>
            {images.map((uri, index) => (
              <View className="flex-1 justify-center items-center" key={index}>
                <Image
                  source={{ uri }}
                  className="w-[100%] h-[100%]"
                  resizeMode="cover"
                />
              </View>
            ))}
          </Swiper>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductShowList_2;

const styles = StyleSheet.create({});
