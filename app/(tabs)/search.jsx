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
      img: require("../../assets/images/product_cloth.png"),
    },
    {
      id: 2,
      name: "Shoes",
      img: require("../../assets/images/product_shoe.png"),
    },
    {
      id: 3,
      name: "Tech",
      img: require("../../assets/images/product_tablet.png"),
    },
    {
      id: 4,
      name: "Musician",
      img: require("../../assets/images/product_cloth.png"),
    },
    {
      id: 5,
      name: "Food",
      img: require("../../assets/images/product_fruit.png"),
    },
  ];

  const dataProduct = [
    {
      id: 1,
      img: require("../../assets/images/product_shoe.png"),
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
        <View className="px-4">
          <Text className="font-psemibold text-md pt-2">
            Trending search category recently
          </Text>
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 4 }}
            >
              <View className="flex flex-row w-full py-3">
                {dataSearchPop.map((item) => (
                  <View
                    className="flex flex-row items-center bg-gray-200 rounded-md p-4 px-5 mr-4 shadow-sm"
                    key={item.id}
                  >
                    <Image
                      source={item.img}
                      className="w-6 h-6 object-cover mr-2 rounded-full"
                    />
                    <Text>{item.name}</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
        <View className="px-2 py-3">
          <TouchableOpacity className="w-full rounded-md bg-[#00bdd6] p-4">
            <Text className="font-pmedium text-base text-white text-center">
              Show product
            </Text>
          </TouchableOpacity>
          <View className="py-4 flex flex-row flex-wrap justify-between">
            {dataProduct.map((item) => (
              <View className=" w-[49%] mb-1 " key={item.id}>
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
