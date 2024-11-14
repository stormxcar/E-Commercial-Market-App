import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  RefreshControl,
  ActivityIndicator
} from "react-native";
import React, { useState } from "react";
import SearchBox from "../../components/SearchBox";
import ProductCard from "../../components/ProductCard";
import CategorySelect from "../../components/CategorySelect";

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
  const dataCategory = [
    {
      id: 1,
      img: require("../../assets/images/category_phone.png"),
      categoryName: "Electronics",
      discount: "10%",
    },
    {
      id: 2,
      img: require("../../assets/images/category_shoe.png"),
      categoryName: "Fashion",
      discount: "20%",
    },
    {
      id: 3,
      img: require("../../assets/images/category_beauty.png"),
      categoryName: "Beauty",
      discount: "30%",
    },
    {
      id: 4,
      img: require("../../assets/images/category_fruit.png"),
      categoryName: "Fresh Fruits",
      discount: "40%",
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

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await getData();
    setRefreshing(false);
  };
  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} />}
        showsVerticalScrollIndicator={false}
        onRefresh={onRefresh}
      >
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
                {dataCategory.map((item) => (
                  <CategorySelect
                    key={item.id}
                    img={item.img}
                    categoryName={item.categoryName}
                    containerStyles={(className = "w-[150px]")}
                    containerStylesImg={
                      (className =
                        "w-full rounded-sm shadow-sm border-[1px] border-gray-200")
                    }
                  />
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
