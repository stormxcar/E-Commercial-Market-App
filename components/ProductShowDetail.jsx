import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Switch,
  Dimensions,
  Alert,
} from "react-native";
import React, { useState, forwardRef, useEffect, useRef } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import ProductCard from "./ProductCard";
import { Link, router } from "expo-router";
import Toast from "react-native-toast-message";
import Modal from "react-native-modal";
import { API_DATA } from "../constants/data";
import { v4 as uuidv4 } from "uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import Share from "react-native-share";

const { height } = Dimensions.get("window");
// Tạo component ProgressBar riêng với forwardRef
const ProgressBar = ({ percentage, label }) => {
  return (
    <View className="flex-row items-center mb-2">
      <Text className="text-sm font-pregular text-gray-500 w-16">{label}</Text>
      <View className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden ml-2">
        <View
          style={{ width: `${percentage}%` }}
          className="h-full bg-orange-500"
        />
      </View>
    </View>
  );
};

// Tạo component Toast mới sử dụng React.forwardRef
const ForwardedToast = forwardRef((props, ref) => (
  <Toast {...props} ref={ref} />
));

const ProductDetail = (product) => {
  const [loading, setLoading] = useState(false);
  const [dataCart, setDataCart] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  // console.log("====================================");
  // console.log("product", product);
  // console.log("====================================");

  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_DATA);
      const data = await res.json();
      // Lọc ra dữ liệu của sheet 'inbox' từ JSON trả về
      setDataCart(data.cart || []);
      // console.log(data.cart);
    } catch (error) {
      console.error(error);
      setDataCart([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // setLoading(true);
    getData();
    // setLoading(false);
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    Toast.show({
      type: "success",
      text1: "Cảm ơn bạn đã quan tâm về sản phẩm của chúng tôi.",
      text2: "Mọi cập nhật mới nhất về đơn hàng sẽ được thông báo đến bạn.",
    });
  };
  console.log("====================================");
  console.log("product", product);
  console.log("====================================");

  const handleAddToCart = async (product) => {
    try {
      const userId = await AsyncStorage.getItem("user_id");

      if (!userId) {
        Alert.alert("Notification", "Please login to continue shopping", [
          { text: "Cancel", style: "cancel" },
          { text: "Login", onPress: () => router.push("/log_in") },
        ]);
        return;
      }

      // Log để debug
      // console.log("Sending data:", {
      //   action: "add",
      //   product_id: product.product?.id || product.id,
      //   user_id: userId,
      // });

      const response = await fetch(API_DATA, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "add",
          product_id: product.product?.id || product.id,
          user_id: parseInt(userId),
        }),
      });

      const result = await response.json();
      console.log("Response from server:", result);

      if (response.ok) {
        Alert.alert("Success", "Product added to cart successfully!");
      } else {
        throw new Error(result.message || "Failed to add product!");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      Alert.alert("Error", error.message);
    }
  };

  // check product added in cart or not
  // const checkProductInCart = async (id) => {
  //   try {
  //     const response = await fetch(API_DATA);
  //     if (!response.ok) {
  //       console.error("API trả về lỗi:", response.status, response.statusText);
  //       return false;
  //     }

  //     const data = await response.json();
  //     const data_cart = data.cart;

  //     console.log("data cart:", data_cart);

  //     // Kiểm tra dữ liệu trả về có phải là mảng không
  //     if (!Array.isArray(data_cart)) {
  //       console.error("Dữ liệu trả về không phải là mảng:", data_cart);
  //       return false;
  //     }

  //     // Tìm kiếm sản phẩm trong dữ liệu
  //     const product = data_cart.find((item) => item.id === id);
  //     return product ? true : false;
  //   } catch (error) {
  //     console.error("Lỗi khi gọi API:", error);
  //     return false;
  //   }
  // };

  const [selectedImage, setSelectedImage] = useState(
    "https://picsum.photos/200"
  );

  const images = [
    "https://picsum.photos/200",
    "https://picsum.photos/201",
    "https://picsum.photos/202",
    "https://picsum.photos/203",
    "https://picsum.photos/204",
    "https://picsum.photos/205",
    "https://picsum.photos/206",
  ];

  // const handleShare = async () => {
  //   const shareOptions = {
  //     message: "Check out this product!",
  //     // url: product.img;
  //   };
  //   try {
  //     const ShareResponse = await Share.open(shareOptions);
  //   } catch (error) {
  //     console.error("Error sharing:", error);
  //   }
  // };

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  // Tính tổng tiền
  const totalPrice = quantity * (product?.price || 0);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const getUserId = async () => {
      const storedUserId = await AsyncStorage.getItem("user_id");
      setUserId(storedUserId);
    };
    getUserId();
  }, []);

 

  // Hàm xử lý khi thêm vào giỏ hàng
  const handleBuyNow = async () => {
    // if (!selectedColor || !selectedSize) {
    //   Alert.alert("Thông báo", "Vui lòng chọn màu sắc và kích thước");
    //   return;
    // }

    // const selectedItems = [{
    //   id: product?.id || '',
    //   product: {
    //     name: product.name || '',
    //     price: product?.price || 0,
    //     img: product?.img || '',
    //     // color: selectedColor || '',
    //     // size: selectedSize || '',
    //     // quantity: quantity || 1,
    //     status: product?.status || ''
    //   }
    // }];

    const storedUserId = await AsyncStorage.getItem("user_id");

    // console.log('====================================');
    // console.log('storedUserId', storedUserId);
    // console.log('====================================');

    setUserId(storedUserId);
    if (!userId) {
      Alert.alert("Notification", "Please login to continue shopping", [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Login",
          onPress: () => router.push("/log_in"),
        },
      ]);
      return;
    }

    try {
      // const jsonString = JSON.stringify(selectedItems);

      // console.log('====================================');
      // console.log('jsonString', jsonString);
      // console.log('====================================');

      router.push({
        pathname: "/details/Checkout",
        params: {
          selectedItems: JSON.stringify(product),
          totalPrice: totalPrice,
          title: "Checkout",
        },
      });
    } catch (error) {
      console.error("Error stringifying data:", error);
      Alert.alert("Lỗi", "Không thể xử lý thông tin sản phẩm");
    }
  };

  console.log('====================================');
  console.log("storedUserId", userId);
  console.log('====================================');

  return (
    <SafeAreaView className="flex-1 ">
      <View className="flex-1">
        <ScrollView
          className="px-3 py-5 flex flex-col"
          style={{ height: height - 80 }}
        >
          <View className="w-full h-[200px] rounded-lg shadow-sm p-1 mb-3">
            <Image
              source={{ uri: selectedImage }}
              className="w-full h-full rounded-lg overflow-hidden"
              resizeMode="cover"
            />
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex flex-row w-full mb-2"
          >
            {images.map((image, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedImage(image)}
              >
                <Image
                  source={{ uri: image }}
                  className="w-[70px] h-[70px] rounded-lg overflow-hidden mr-2"
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View className="flex flex-row justify-between my-3 items-center">
            <View className="flex flex-row items-center gap-2">
              <Text className="text-base font-psemibold line-through text-gray-400">
                {product.price}
              </Text>
              <Text className="text-base font-psemibold">${product.price}</Text>
              <Text className="text-base font-psemibold text-[#00BDD6]">
                -10%
              </Text>
            </View>

            <View className="flex flex-row gap-2 items-center">
              <AntDesign name="star" size={24} color="orange" />
              <Text className="font-pregular">4.5</Text>
              <Text className="font-pregular">(99 reviews)</Text>
            </View>
          </View>

          <View className="w-full py-3 px-1 flex-row justify-between border-b-[1px] border-gray-300">
            <View className="flex flex-row items-center">
              <TouchableOpacity
                className=""
                // onPress={handleShare}
              >
                <Ionicons name="share-outline" size={24} color="#00bdd6" />
              </TouchableOpacity>
              {/* <Text className="text-base font-pmedium text-[#00BDD6] mr-2">(Share)</Text> */}
              {/* <View className="flex flex-row items-center gap-2">
                <AntDesign name="twitter" size={24} color="#1DA1F2" />
                <AntDesign name="message1" size={24} color="blue" />
                <AntDesign name="facebook-square" size={24} color="#1877F2" />
                <AntDesign name="instagram" size={24} color="#E1306C" />
              </View> */}
            </View>
            <View className="flex flex-row items-center">
              <AntDesign name="heart" size={24} color="red" />
              <View className="ml-2 flex-row">
                <Text className="font-pregular">Liked</Text>
                <Text className="font-pregular">(99)</Text>
              </View>
            </View>
          </View>

          <View>
            <Text className="text-base font-psemibold my-3">Description</Text>
            <Text className="font-pregular text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint
            </Text>
          </View>

          <View className="flex flex-row justify-between flex-wrap w-full mt-8 py-3">
            <View className="flex flex-row items-center gap-2 w-[50%]">
              <AntDesign name="creditcard" size={24} color="#00BDD6" />
              <Text className="text-base font-pregular">Payment</Text>
            </View>
            <View className="flex flex-row items-center gap-2 w-[50%]">
              <AntDesign name="creditcard" size={24} color="#00BDD6" />
              <Text className="text-base font-pregular">Payment</Text>
            </View>
            <View className="flex flex-row items-center gap-2 w-[50%]">
              <AntDesign name="creditcard" size={24} color="#00BDD6" />
              <Text className="text-base font-pregular">Payment</Text>
            </View>
            <View className="flex flex-row items-center gap-2 w-[50%]">
              <AntDesign name="creditcard" size={24} color="#00BDD6" />
              <Text className="text-base font-pregular">Payment</Text>
            </View>
          </View>

          <View>
            <TouchableOpacity
              className="flex flex-row justify-between items-center mb-3 border-b-[1px] border-gray-300 py-3"
              onPress={toggleModal}
            >
              <Text className="text-base font-psemibold my-3">
                Product details
              </Text>
              <AntDesign name="right" size={20} color="gray" />
            </TouchableOpacity>

            <Modal
              isVisible={isModalVisible}
              onBackdropPress={toggleModal}
              className="m-0 justify-end"
            >
              <View className="bg-white rounded-t-3xl h-auto p-4 w-full items-center">
                <View className="w-full flex justify-between items-center flex-row">
                  <Text className="w-full text-base font-psemibold border-b-[1px] border-gray-300 py-3">
                    Product Details
                  </Text>
                </View>
                <View className="w-full mt-4">
                  <View className="flex flex-row items-center mb-2">
                    <Text className="text-base font-pregular flex-1">
                      Stock
                    </Text>
                    <Text className="flex-1 text-sm font-pregular text-gray-500">
                      2938
                    </Text>
                  </View>
                  <View className="flex flex-row items-center mb-2">
                    <Text className="text-base font-pregular flex-1">
                      Brand
                    </Text>
                    <Text className="flex-1 text-sm font-pregular text-gray-500">
                      Sido Tech VN
                    </Text>
                  </View>
                  <View className="flex flex-row items-center mb-2">
                    <Text className="text-base font-pregular flex-1">
                      Warranty
                    </Text>
                    <Text className="flex-1 text-sm font-pregular text-gray-500">
                      12 months
                    </Text>
                  </View>
                  <View className="flex flex-row items-center mb-2">
                    <Text className="text-base font-pregular flex-1">
                      Status
                    </Text>
                    <Text className="flex-1 text-sm font-pregular text-gray-500">
                      Refund after 30 days
                    </Text>
                  </View>

                  <View className="flex flex-row items-center mb-2">
                    <Text className="text-base font-pregular flex-1">
                      Type warranty
                    </Text>
                    <Text className="flex-1 text-sm font-pregular text-gray-500">
                      1-1 exchange
                    </Text>
                  </View>
                  <View className="flex flex-row items-center mb-2">
                    <Text className="text-base font-pregular flex-1">
                      Ship from
                    </Text>
                    <Text className="flex-1 text-sm font-pregular text-gray-500">
                      Ho Chi Minh City
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={toggleModal}
                  className="bg-[#00BDD6] p-2 rounded-lg mt-3"
                >
                  <Text className="text-sm font-pregular text-white">Done</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>

          <View className="flex flex-row justify-between items-center mb-5">
            <View className="flex flex-row items-center">
              <View className="border-2 rounded-full w-10 h-10 border-[#00BDD6] mr-2">
                <Image
                  source={{ uri: "https://picsum.photos/200" }}
                  className="w-full h-full rounded-full object-cover"
                />
              </View>
              <View>
                <Text className="text-base font-psemibold">SidoTech</Text>
                <Text className="text-sm font-pregular text-gray-400">
                  Online 2 minutes ago
                </Text>
              </View>
            </View>

            <View>
              <TouchableOpacity className="flex flex-row items-center border-2 border-[#00BDD6] p-2 rounded-lg">
                <Text className="text-sm font-pregular text-[#00BDD6]">
                  Visit shop
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View className="flex flex-row justify-between w-full items-center mb-4">
              <View className="flex flex-row items-center">
                <Text className="text-base font-psemibold">Reviews</Text>
                <Text className="text-base font-psemibold">(99)</Text>
              </View>

              <Link
                href={{
                  pathname: "/details/Reviews",
                  params: { title: "Reviews" },
                }}
                asChild
              >
                <TouchableOpacity className="flex flex-row items-center">
                  <Text className="text-base font-pregular text-gray-500">
                    See all
                  </Text>
                  <AntDesign name="right" size={20} color="black" />
                </TouchableOpacity>
              </Link>
            </View>

            <View className="flex flex-col justify-between bg-gray-200 p-3 rounded-lg">
              <View className="flex flex-row items-center ">
                <View className="flex flex-col">
                  <View className="flex flex-row items-center">
                    <Text className="text-base font-pregular pr-2">
                      4.5 / 5
                    </Text>
                    <Text className="text-sm font-pregular text-gray-400 my-3">
                      (99 reviews)
                    </Text>
                  </View>
                  <View className="flex flex-row mt-2 mb-4">
                    <AntDesign name="star" size={20} color="orange" />
                    <AntDesign name="star" size={20} color="orange" />
                    <AntDesign name="star" size={20} color="orange" />
                    <AntDesign name="star" size={20} color="orange" />
                    <AntDesign name="star" size={20} color="orange" />
                  </View>
                </View>
              </View>

              <View>
                <ProgressBar percentage={80} label="5 stars" />
                <ProgressBar percentage={60} label="4 stars" />
                <ProgressBar percentage={40} label="3 stars" />
                <ProgressBar percentage={20} label="2 stars" />
                <ProgressBar percentage={10} label="1 star" />
              </View>
            </View>

            <View className="pt-4 pb-5 flex flex-col">
              <View className="flex flex-row w-full justify-between items-center border-b-[1px] py-3 border-gray-200 ">
                <View className="flex-row items-center flex-1">
                  <Image
                    source={{ uri: "https://picsum.photos/200" }}
                    className="border-2 w-10 h-10 rounded-full mr-3"
                    width={40}
                    height={40}
                    resizeMode="contain"
                  />
                  <View className="flex-1">
                    <Text className="text-base font-semibold">Joijjd</Text>
                    <Text className="text-sm font-pregular break-words mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing...
                    </Text>
                  </View>
                </View>
                <Text className="text-sm font-pregular ml-3">A day ago</Text>
              </View>

              <View className="flex flex-row w-full justify-between items-center border-b-[1px] py-3 border-gray-200 ">
                <View className="flex-row items-center flex-1">
                  <Image
                    source={{ uri: "https://picsum.photos/200" }}
                    className="border-2 w-10 h-10 rounded-full mr-3"
                    width={40}
                    height={40}
                    resizeMode="contain"
                  />
                  <View className="flex-1">
                    <Text className="text-base font-semibold">Joijjd</Text>
                    <Text className="text-sm font-pregular break-words mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing...
                    </Text>
                  </View>
                </View>
                <Text className="text-sm font-pregular ml-3">A day ago</Text>
              </View>
            </View>
          </View>

          <View className="w-full h-[75vh]">
            <View className="flex flex-row justify-between py-3">
              <Text className="text-base font-psemibold">
                Relevants products
              </Text>
              <Link href="/details/ProductList" asChild>
                <TouchableOpacity className="flex flex-row">
                  <Text className="text-sm font-pregular">See all</Text>
                  <AntDesign name="right" size={20} color="black" />
                </TouchableOpacity>
              </Link>
            </View>
            <View>
              <FlatList
                data={dataProduct}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return (
                    <ProductCard
                      img={item.img}
                      name={item.name}
                      countReviews={item.countReviews}
                      price={item.price}
                      productId={item.id}
                    />
                  );
                }}
                horizontal // Thêm thuộc tính horizontal để dàn các mục ra hàng ngang
                showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
                className="mb-5"
              />
            </View>

            <View className="p-3 mb-[220px] border-[1px] rounded-md flex flex-row items-center justify-between">
              <View className="flex flex-row items-center">
                <View className="p-3 bg-[#00BDD6] rounded-lg mr-3">
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    color="white"
                  />
                </View>

                <Text className="font-pregular text-sm">Notifications</Text>
              </View>
              <View>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isEnabled ? "#00BDD6" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
                <ForwardedToast ref={(ref) => Toast.setRef(ref)} />
              </View>
            </View>
          </View>
        </ScrollView>

        <View className="absolute bottom-0 left-0 right-0 w-full h-[80px] flex-1 bg-gray-100">
          <View className="flex flex-row justify-between items-center my-4 px-3">
            <Link href="/details/ChatScreen" asChild>
              <TouchableOpacity className="bg-white border-[1px] rounded-md border-[#00bdd6] p-3 mr-3">
                <AntDesign name="message1" size={22} color="#00bdd6" />
              </TouchableOpacity>
            </Link>

            {userId ? (
              <Link
                href={{ pathname: "/details/Cart", params: { title: "Cart" } }}
                asChild
              >
                <TouchableOpacity
                  className="bg-white border-[1px] rounded-md border-[#00bdd6] p-3 mr-3"
                  onPress={() => handleAddToCart(product)}
                >
                  <Ionicons name="cart-outline" size={24} color="#00bdd6" />
                </TouchableOpacity>
              </Link>
            ) : null}

            {/* <Link
              href={{
                pathname: "/details/Checkout",
                params: {
                  selectedItems: JSON.stringify(selectedItems),
                  totalPrice,
                  title: "Checkout",
                },
              }}
              asChild
            > */}
            <TouchableOpacity onPress={handleBuyNow} className="flex-1">
              <Text className="rounded-sm font-pregular text-base w-full bg-[#00bdd6] text-white text-center p-3">
                Buy now
              </Text>
            </TouchableOpacity>
            {/* </Link> */}
          </View>
        </View>
      </View>
      <ForwardedToast ref={(ref) => Toast.setRef(ref)} position="bottom" />
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
