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

const ProductList = () => {
  const [dataProductCard, setDataProductCard] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch data from the specified sheet
  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        API_DATA
      );
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
            <TouchableOpacity className="w-full rounded-md bg-[#00bdd6] p-4">
              <Text className="font-pmedium text-base text-white text-center">
                Show product
              </Text>
            </TouchableOpacity>
            <View className="py-4 flex flex-row flex-wrap justify-between">
              {Array.isArray(dataProductCard) &&
                dataProductCard.map((item) => (
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
                dataProductCard.map((item) => (
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

const styles = StyleSheet.create({
  loading: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    zIndex: 1,
  },
});
