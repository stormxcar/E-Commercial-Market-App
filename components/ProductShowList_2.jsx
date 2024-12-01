import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import React, { useState } from "react";
import CardList from "./CardList";
import AntDesign from "@expo/vector-icons/AntDesign";
import Swiper from "react-native-swiper";
import ProductCard from "./ProductCard";
import { Link } from "expo-router";
import { API_DATA } from "../constants/data";
import { v4 as uuidv4 } from "uuid";


const ProductShowList_2 = ({ searchQuery }) => {
  // const dataProductCard = [
  //   {
  //     id: 1,
  //     name: "Iphone",
  //     img: "https://picsum.photos/200",
  //     price: "$899",
  //   },
  //   {
  //     id: 2,
  //     name: "Smart Watch",
  //     img: "https://picsum.photos/200",
  //     price: "$899",
  //   },
  //   {
  //     id: 3,
  //     name: "Tablet",
  //     img: "https://picsum.photos/200",
  //     price: "$789",
  //   },
  //   {
  //     id: 4,
  //     name: "Headphone",
  //     img: "https://picsum.photos/200",
  //     price: "$999",
  //   },
  //   // Add more products as needed
  // ];
  const dataProductCard = [
    {
      id: 1,
      name: "Iphone",
      img: "https://picsum.photos/200",
      price: 899,
      sales: 50,
      matched: 80,
      popular: 90,
    },
    {
      id: 2,
      name: "Smart Watch",
      img: "https://picsum.photos/200",
      price: 899,
      sales: 30,
      matched: 70,
      popular: 85,
    },
    {
      id: 3,
      name: "Tablet",
      img: "https://picsum.photos/200",
      price: 789,
      sales: 70,
      matched: 90,
      popular: 95,
    },
    {
      id: 4,
      name: "Headphone",
      img: "https://picsum.photos/200",
      price: 999,
      sales: 90,
      matched: 60,
      popular: 80,
    },
    // Add more products as needed
  ];

  const dataProduct = [
    {
      id: 1,
      img: "https://picsum.photos/200",
      name: "Sneaker",
      countReviews: "10",
      price: "100",
    },
    {
      id: 2,
      img: "https://picsum.photos/200",
      name: "Tablet",
      countReviews: "10",
      price: "100",
    },
    {
      id: 3,
      img: "https://picsum.photos/200",
      name: "Kid cloth",
      countReviews: "10",
      price: "100",
    },
    {
      id: 4,
      img: "https://picsum.photos/200",
      name: "Green avocado",
      countReviews: "10",
      price: "100",
    },
  ];

  const [selectedButton, setSelectedButton] = useState("Best sales");
  const [isPriceAscending, setIsPriceAscending] = useState(true);

  // const filteredProducts = dataProduct.filter((product) =>
  //   product.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const handlePress = (button) => {
    if (button === "Price") {
      setIsPriceAscending(!isPriceAscending);
    }
    setSelectedButton(button);
  };

  const getFilteredProductsBySale = () => {
    return dataProduct.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  const getDataProductBySale = getFilteredProductsBySale();

  const getFilteredProductsBySelection = () => {
    let filteredProducts = dataProductCard.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    switch (selectedButton) {
      case "Best sales":
        return filteredProducts.sort((a, b) => b.sales - a.sales);
      case "Best matched":
        return filteredProducts.sort((a, b) => b.matched - a.matched);
      case "Popular":
        return filteredProducts.sort((a, b) => b.popular - a.popular);
      case "Price":
        return filteredProducts.sort((a, b) =>
          isPriceAscending ? a.price - b.price : b.price - a.price
        );
      default:
        return filteredProducts;
    }
  };

  const getDataProductBySelection = getFilteredProductsBySelection();

  const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/301",
    "https://picsum.photos/200/302",
  ];

  const [visibleProducts, setVisibleProducts] = useState(2); // Initial number of products to display

  const handleSeeMore = () => {
    setVisibleProducts((prev) => prev + 2); // Increase the number of visible products by 2
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

  return (
    <SafeAreaView className="px-3 py-5">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View className="flex flex-row w-full items-center justify-between mb-3">
            <Text className="font-pmedium text-base">Sale products</Text>
            <Link href="details/ProductList" asChild>
              <TouchableOpacity className="flex flex-row">
                <Text className="font-pregular text-base text-gray-400 text-center">
                  See all
                </Text>
                <AntDesign name="right" size={20} color="gray" />
              </TouchableOpacity>
            </Link>
          </View>
        </View>
        <View className="flex flex-row justify-between items-centerw-full h-auto">
          <FlatList
            data={getDataProductBySale}
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
              className={`rounded-lg px-5 py-2 mr-3 ${
                selectedButton === "Popular" ? "bg-[#00bdd6]" : "bg-gray-200"
              }`}
              onPress={() => handlePress("Popular")}
            >
              <Text className="font-pmedium text-base text-center">
                Popular
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className={`rounded-lg px-5 py-2 ${
                selectedButton === "Price" ? "bg-[#00bdd6]" : "bg-gray-200"
              }`}
              onPress={() => handlePress("Price")}
            >
              <Text className="font-pmedium text-base text-center">Price</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View>
          <View>
            <View className="py-4 flex flex-row flex-wrap justify-between">
              {getDataProductBySelection
                .slice(0, visibleProducts)
                .map((item) => (
                  <View className="w-full mb-2" key={item.id}>
                    <CardList
                      containerStyles={"w-full flex flex-row items-center"}
                      imageStyles={"w-[100px] h-[100px]"}
                      img={item.img}
                      name={item.name}
                      price={item.price}
                      product={item}
                      handleAddToCart={handleAddToCart}
                    />
                  </View>
                ))}
            </View>

            <View className="mb-3 w-full items-center justify-center">
              {visibleProducts < getDataProductBySelection.length && (
                <TouchableOpacity
                  className="bg-[#00BDD6] w-[40%] rounded-sm"
                  onPress={handleSeeMore}
                >
                  <Text className="font-pmedium text-base text-center text-white p-2">
                    See more
                  </Text>
                </TouchableOpacity>
              )}
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
