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
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import Swiper from "react-native-swiper";
import { API_DATA } from "../constants/data";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { v4 as uuidv4 } from "uuid";

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

  const [images, setImages] = useState([]); // Khởi tạo mảng ảnh trống

  const getSaleProductImages = () => {
    return dataProductCard
      .filter((product) => product.discount > 50)
      .map((product) => {
        // More robust null and undefined checks
        if (product?.img && typeof product.img === "string") {
          try {
            const parsedImages = JSON.parse(product.img);
            return Array.isArray(parsedImages) && parsedImages.length > 0
              ? parsedImages[0]
              : null;
          } catch (e) {
            // Handle JSON parsing errors more gracefully
            console.error("Error parsing image JSON:", e, product.img);
            return product.img; // Return original string if parsing fails
          }
        }
        return null;
      })
      .filter((img) => img !== null && img !== undefined); // Filter out null and undefined values
  };

  useEffect(() => {
    // Cập nhật danh sách ảnh sau khi dataProductCard thay đổi
    if (dataProductCard.length > 0) {
      setImages(getSaleProductImages());
    }
  }, [dataProductCard]);

  const [visibleProducts, setVisibleProducts] = useState(6); // Initial number of products to display

  const handleSeeMore = () => {
    setVisibleProducts((prev) => prev + 2);
  };

  const handleAddToCart = async (product) => {
    try {
      const imgUrl =
        typeof product.img === "string" ? product.img : product.img.uri;

      // Fetch giỏ hàng hiện tại
      const response_1 = await fetch(API_DATA);
      const result = await response_1.json();
      const data_cart = result.cart || []; // Giả sử API trả về `cart`

      // Kiểm tra sản phẩm có trong giỏ chưa
      const existingProduct = data_cart.find(
        (item) => item.name === product.name
      );

      if (existingProduct) {
        // Nếu đã có, cập nhật số lượng
        const response = await fetch(`${API_DATA}/${existingProduct.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...existingProduct,
            quantity: existingProduct.quantity + 1, // Tăng số lượng
          }),
        });

        if (response.ok) {
          Alert.alert(
            "Thông báo",
            "Đã cập nhật số lượng sản phẩm trong giỏ hàng!"
          );
        } else {
          throw new Error("Cập nhật sản phẩm thất bại!");
        }
      } else {
        // Nếu chưa có, thêm mới sản phẩm
        const response = await fetch(API_DATA, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "add",
            id: uuidv4(), // Tạo ID duy nhất
            name: product.name,
            status: product.status,
            price: product.price,
            quantity: 1,
            img: imgUrl,
            status: product.status,
          }),
        });

        console.log("====================================");
        console.log(product.status);
        console.log("====================================");

        if (response.ok) {
          Alert.alert("Thành công", "Sản phẩm đã được thêm vào giỏ hàng!");
        } else {
          throw new Error("Thêm sản phẩm thất bại!");
        }
      }
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
      Alert.alert("Lỗi", error.message);
    }
  };

  // console.log('====================================');
  // console.log("data product card:",dataProductCard);
  // console.log('====================================');

  return (
    <SafeAreaView className="px-3 py-5">
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View className="w-full h-[200px] rounded-lg overflow-hidden">
          <Swiper showsButtons={true} autoplay={true} autoplayTimeout={4}>
            {images.length > 0 ? (
              images.map((uri, index) => (
                <View
                  className="flex-1 justify-center items-center"
                  key={index}
                >
                  {uri ? ( // Check if uri is not null or undefined before rendering
                    <Image
                      source={{ uri }}
                      className="w-[100%] h-[100%]"
                      resizeMode="cover"
                    />
                  ) : (
                    <Text>Sale product no available</Text> // Or a placeholder image
                  )}
                </View>
              ))
            ) : (
              <Text>No sale images available</Text> // Or a placeholder component
            )}
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
              {/* <Link
                href={{
                  pathname: "../details/FilterProduct",
                  params: { name: "Filter" },
                }}
                asChild
              >
                <TouchableOpacity className="p-[8px] rounded-sm">
                  <Ionicons name="filter" size={24} color="#00bdd6" />
                </TouchableOpacity>
              </Link> */}
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
                      product={item}
                      ratingNumbers={item.number_count_rating}
                      discount={item.discount}
                      displayType={item.display}
                      handleAddToCart={handleAddToCart}
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
                      discount={item.discount}
                      ratingNumbers={item.number_count_rating}
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
