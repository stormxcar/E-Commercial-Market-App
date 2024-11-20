import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import Swiper from "react-native-swiper";
import { API_DATA } from "../constants/data";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const ProductList = () => {
  const [dataProductCard, setDataProductCard] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch data from the specified sheet
  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_DATA);
      const data = await res.json();
      setDataProductCard(data.product || []);
    } catch (error) {
      console.log(error);
      setDataProductCard([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when the component mounts or when `sheetName` changes
  useEffect(() => {
    getData();
  }, []);

  // Refresh data when the user pulls down to refresh
  const onRefresh = async () => {
    setRefreshing(true);
    setLoading(true);
    await getData(sheetName);
    setRefreshing(false);
    setLoading(false);
  };

  const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/301",
    "https://picsum.photos/200/302",
  ];

  const [visibleProducts, setVisibleProducts] = useState(6); // Initial number of products to display

  const handleSeeMore = () => {
    setVisibleProducts((prev) => prev + 2);
  };

  return (
    <SafeAreaView className="px-3 py-5">
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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

        <View className="w-full py-5">
          <View className="">
            {/* <TouchableOpacity className="w-full rounded-md bg-[#00bdd6] p-4">
              <Text className="font-pmedium text-base text-white text-center">
                Show product
              </Text>
            </TouchableOpacity> */}
            <View className="flex flex-row items-center justify-between">
              <Text className="text-base font-psemibold">Sales product</Text>
              <Link
                href={{
                  pathname: "../details/FilterProduct",
                  params: { name: "Filter" },
                }}
                asChild
              >
                <TouchableOpacity className="p-[8px] rounded-sm">
                  <Ionicons name="filter" size={24} color="#00bdd6" />
                </TouchableOpacity>
              </Link>
            </View>

            <View className="py-4 flex flex-row flex-wrap justify-between">
              {Array.isArray(dataProductCard) &&
                dataProductCard.slice(0, visibleProducts).map((item) => (
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
              {loading && (
                <View style={styles.loading}>
                  <ActivityIndicator size="large" color="#00bdd6" />
                </View>
              )}
            </View>
          </View>

          <View className="flex-row justify-center">
            {visibleProducts < dataProductCard.length && (
              <TouchableOpacity
                onPress={handleSeeMore}
                className="p-3 rounded-lg bg-[#00bdd6] w-[50%]"
              >
                <Text className="text-base text-white font-pmedium text-center">
                  See more
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View>
          <View>
            <Text className="text-base font-pmedium mt-3">
              Relevant products
            </Text>
            <View className="py-4 flex flex-row flex-wrap justify-between">
              {loading && (
                <View style={styles.loading}>
                  <ActivityIndicator size="large" color="#00bdd6" />
                </View>
              )}
              {Array.isArray(dataProductCard) &&
                dataProductCard.slice(0, visibleProducts).map((item) => (
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
              <View className="flex-row items-center justify-center w-full">
                {visibleProducts < dataProductCard.length && (
                  <TouchableOpacity
                    onPress={handleSeeMore}
                    className="p-3 rounded-lg bg-[#00bdd6] w-[50%]"
                  >
                    <Text className="text-base text-white font-pmedium text-center">
                      See more
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  loading: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    zIndex: 1,
  },
});
