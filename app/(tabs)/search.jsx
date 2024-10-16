import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import SearchBox from "../../components/SearchBox";
import ProductCard from "../../components/ProductCard";

const Search = () => {
  const dataSearchPop = [
    {
      id: 1,
      name: "Clothing",
      img: "https://picsum.photos/200",
    },
    {
      id: 2,
      name: "Shoes",
      img: "https://picsum.photos/200",
    },
    {
      id: 3,
      name: "Tech",
      img: "https://picsum.photos/200",
    },
    {
      id: 4,
      name: "Musician",
      img: "https://picsum.photos/200",
    },
  ];

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
        <SearchBox />
        <View className="px-5">
          <Text className="font-psemibold text-md py-2">
            Trending search category recently
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex flex-row w-full p-2">
              {dataSearchPop.map((item) => (
                <View
                  className="flex flex-row items-center bg-gray-300 rounded-md p-2 px-5 mr-4"
                  key={item.id}
                >
                  <Image
                    source={{ uri: item.img }}
                    className="w-6 h-6 object-cover mr-2 bg-pink-600 rounded-full"
                  />
                  <Text>{item.name}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <View className="px-5 py-3">
          <TouchableOpacity className="w-full rounded-md bg-[#00bdd6] p-4">
            <Text className="font-pmedium text-base text-white text-center">
              Show product
            </Text>
          </TouchableOpacity>
          <View className="py-4 flex flex-row flex-wrap justify-between">
            {dataProduct.map((item) => (
              <View className=" w-[46%] m-2 " key={item.id}>
                <ProductCard
                  containerStyles={"w-full"}
                  img={item.img}
                  name={item.name}
                  countReviews={item.countReviews}
                  price={item.price}
                  productId={item.id}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
