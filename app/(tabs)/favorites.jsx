import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import { API_DATA } from "../../constants/data";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const [productList, setProductList] = useState([]);

  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const onRefresh = async () => {
    setRefreshing(true);
    await getData();
    setRefreshing(false);
  };

  const [userId, setUserId] = useState(null);

  const getData = async () => {
    try {
      const storedUserId = await AsyncStorage.getItem("user_id");
      setUserId(storedUserId);

      if (storedUserId) {
        const response = await fetch(API_DATA);
        const data = await response.json();

        // Get user's favorite products
        const userFavorites = data.productUser.filter(
          (item) => item.user_id === parseInt(storedUserId)
        );

        // Get full product details for favorites
        const productResponse = await fetch(API_DATA);
        const productData = await productResponse.json();

        // Map favorite products with full details
        const favoritesWithDetails = userFavorites.map((favorite) => {
          const productDetails = productData.product.find(
            (product) => product.id === favorite.product_id
          );
          return {
            ...favorite,
            ...productDetails,
          };
        });

        setProductList(favoritesWithDetails);
      }
    } catch (error) {
      console.error("Error fetching favorites:", error);
      Alert.alert("Error", "Could not load favorite products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // const CheckLogin = async () => {
  //   try {
  //     // Lấy user_id từ AsyncStorage
  //     userId = await AsyncStorage.getItem("user_id");

  //     if (userId) {
  //       // Nếu user_id có, gọi API hoặc lấy dữ liệu từ bảng product_user
  //       const response = await fetch(API_DATA);
  //       const data = await response.json();

  //       // Giả sử data.product_user là dữ liệu lấy từ bảng product_user
  //       const productByUser = data.productUser.filter(
  //         (item) => item.user_id === parseInt(userId)
  //       );

  //       setProductList(productByUser);

  //       // Lấy thông tin chi tiết sản phẩm từ bảng products
  //       const productResponse = await fetch(API_DATA); // API trả về thông tin sản phẩm
  //       const productData = await productResponse.json();
  //       // console.log("====================================");
  //       // console.log(productData.product);
  //       // console.log("====================================");
  //       setProductList(productData.product);

  //       // setLoading(false);
  //     } else {
  //       Alert.alert("Thông báo", "Bạn cần đăng nhập");
  //       // Điều hướng tới trang đăng nhập
  //       router.push("/log_in");
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     console.error("Error fetching cart data:", error);
  //     Alert.alert("Lỗi", "Không thể lấy dữ liệu giỏ hàng.");
  //   }
  // };

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} />}
        showsVerticalScrollIndicator={false}
        onRefresh={onRefresh}
      >
        <View className="px-3 py-2">
          <View className="flex flex-row items-center justify-between pb-3">
            <Text className="text-base font-psemibold text-gray-600">
              Recommended products
            </Text>
            <Link href="/details/ProductList" asChild>
              <TouchableOpacity className="flex flex-row items-center">
                <Text className="font-pregular text-gray-400">see all</Text>
                <AntDesign name="right" size={16} color="black" />
              </TouchableOpacity>
            </Link>
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
          <Link href="/details/ProductList" asChild>
            <TouchableOpacity className=" flex flex-row items-center justify-center p-3 rounded-md bg-[#00bdd6]">
              <AntDesign name="left" size={20} color="white" />
              <Text className="text-base font-psemibold text-center text-white ml-2">
                Continue shopping
              </Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View className="px-3 pt-8 pb-3 flex flex-row justify-between items-center w-full">
          <Text className="text-base font-psemibold text-gray-600">
            Your favorites
          </Text>
          {/* <TouchableOpacity className="flex flex-row ">
            <Text className="font-pregular text-sm text-gray-400">See all</Text>
            <AntDesign name="right" size={22} color="gray" />
          </TouchableOpacity> */}
        </View>
        <View className="px-3">
          {loading ? (
            <ActivityIndicator size="large" color="#00bdd6" />
          ) : !userId ? (
            <View className="items-center justify-center py-4">
              <Text className="text-base font-pregular text-gray-500 mb-3">
                You must login to see your favorites
              </Text>
              <Link href="/log_in" asChild>
                <TouchableOpacity className="bg-[#00bdd6] px-6 py-2 rounded-md">
                  <Text className="text-white font-psemibold">Login now</Text>
                </TouchableOpacity>
              </Link>
            </View>
          ) : (
            <View>
              {productList.map((item) => (
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
              <View className="justify-center items-center mb-3">
                <TouchableOpacity className="bg-[#00bdd6] p-3 rounded-md w-[50%] ">
                  <Text className="font-pregular text-white text-center">
                    See more
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorites;

const styles = StyleSheet.create({});
