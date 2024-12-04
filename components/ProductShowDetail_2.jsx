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
  Animated,
  TextInput,
  Alert,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import ProductCard from "./ProductCard";
import Collapsible from "react-native-collapsible";
import { Link, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProgressBar = ({ percentage, label }) => {
  return (
    <View className="flex-row items-center mb-2">
      <Text className="text-sm font-pregular text-gray-500 w-16">{label}</Text>
      <View className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden ml-2">
        {/* Thanh màu cam thể hiện tỷ lệ phần trăm */}
        <View
          style={{ width: `${percentage}%` }}
          className="h-full bg-orange-500"
        />
      </View>
    </View>
  );
};

const ProductDetail_2 = (product) => {
  // const dataProduct = [
  //   {
  //     id: 1,
  //     img: "https://picsum.photos/200",
  //     name: "Product1",
  //     countReviews: "10",
  //     price: "100",
  //   },
  //   {
  //     id: 2,
  //     img: "https://picsum.photos/200",
  //     name: "Product1",
  //     countReviews: "10",
  //     price: "100",
  //   },
  //   {
  //     id: 3,
  //     img: "https://picsum.photos/200",
  //     name: "Product1",
  //     countReviews: "10",
  //     price: "100",
  //   },
  //   {
  //     id: 4,
  //     img: "https://picsum.photos/200",
  //     name: "Product1",
  //     countReviews: "10",
  //     price: "100",
  //   },
  //   {
  //     id: 5,
  //     img: "https://picsum.photos/200",
  //     name: "Product1",
  //     countReviews: "10",
  //     price: "100",
  //   },
  // ];

  // const [isEnabled, setIsEnabled] = useState(false);

  // const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [sections, setSections] = useState({ 1: false, 2: false });
  const rotateAnim1 = useRef(new Animated.Value(0)).current;
  const rotateAnim2 = useRef(new Animated.Value(0)).current;

  const toggleSection = (section) => {
    setSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));

    if (section === 1) {
      Animated.timing(rotateAnim1, {
        toValue: sections[1] ? 0 : 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else if (section === 2) {
      Animated.timing(rotateAnim2, {
        toValue: sections[2] ? 0 : 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const rotate1 = rotateAnim1.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });

  const rotate2 = rotateAnim2.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });

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

  const [selectedColor, setSelectedColor] = useState(null);

  const colors = [
    { color: "purple", bgColor: "bg-purple-500" },
    { color: "red", bgColor: "bg-red-300" },
    { color: "blue", bgColor: "bg-blue-600" },
  ];

  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["XS", "S", "M", "L", "XL"];

  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const [userId, setUserId] = useState(null);

  const handleBuyNow = async (product) => {
    const userId = await AsyncStorage.getItem("user_id");

    if (!userId) {
      Alert.alert("Notification", "Please login to continue shopping", [
        { text: "Cancel", style: "cancel" },
        { text: "Login", onPress: () => router.push("/log_in") },
      ]);
      return;
    }
  };

  return (
    <SafeAreaView className="max-w-[100vh]">
      <ScrollView className="px-3 py-5 mb-10 flex flex-col">
        <View className="w-full border-b-[1px] border-gray-300 pb-2 mb-2">
          <View className="w-full h-[200px] mb-2">
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
        </View>

        <View className="flex flex-row my-3 items-center">
          <Text className="text-base font-psemibold mr-3">$2.99</Text>
          <TouchableOpacity className="flex flex-row items-center bg-gray-300 py-2 px-5 rounded-lg">
            <Text className="font-pregular text-xs text-center">
              Buy 1 get 1
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex flex-row justify-between my-3 items-center">
          <View>
            <Text className="text-base font-psemibold">Hoodle Shirt</Text>
            <Text className="text-sm">
              Occaecat est deserat tempourt office
            </Text>
          </View>

          <View className="flex flex-row gap-2 items-center">
            <AntDesign name="star" size={20} color="orange" />
            <Text className="font-pregular">4.5</Text>
          </View>
        </View>

        <View>
          <Text className="text-base font-psemibold my-3">Color (*)</Text>
          <View className="flex flex-row items-center">
            {colors.map((item, index) => (
              <TouchableOpacity
                key={index}
                className={`w-14 h-14 items-center justify-center rounded-[100%] ${
                  selectedColor === item.color
                    ? "border-4 border-[#00BDD6] "
                    : ""
                }`}
                onPress={() => setSelectedColor(item.color)}
              >
                <View
                  className={`flex flex-row w-11 h-11 items-center rounded-full m-2 ${item.bgColor}`}
                ></View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="flex flex-col w-full my-8 py-3">
          <Text className="text-base font-psemibold mb-3">Size (*)</Text>
          <View className="flex flex-row">
            {sizes.map((size, index) => (
              <TouchableOpacity
                key={index}
                className={`flex flex-row items-center p-3 rounded-sm mr-1 border-2 ${
                  selectedSize === size ? "bg-[#00BDD6]" : ""
                }`}
                onPress={() => setSelectedSize(size)}
              >
                <Text
                  className={`font-psemibold text-base ${
                    selectedSize === size ? "text-white" : ""
                  }`}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View>
          {/* <View className="flex flex-row justify-between w-full items-center mb-4">
            <Text className="text-base font-psemibold">Quantity</Text>
          </View>

          <View className="flex flex-row justify-between items-center p-3 border-b-2 pb-5">
            <View className="flex flex-row">
              <View className="flex flex-row justify-between w-full items-center">
                <View className="flex flex-row items-center">
                  <TouchableOpacity
                    className="flex flex-row items-center px-4 py-3 rounded-lg mr-1 bg-gray-300"
                    onPress={decreaseQuantity}
                  >
                    <Text>-</Text>
                  </TouchableOpacity>
                  <TextInput
                    className="p-2 mr-1 text-center font-psemibold text-base"
                    value={String(quantity)}
                    editable={false}
                  />
                  <TouchableOpacity
                    className="flex flex-row items-center px-4 py-3 rounded-lg bg-[#00BDD6] mr-1"
                    onPress={increaseQuantity}
                  >
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
                <View className="flex flex-row items-center mt-2 mb-4">
                  <Text className="text-base font-pregular mr-3">Total</Text>
                  <Text className="text-lg font-pmedium">$4,98</Text>
                </View>
              </View>
            </View>
          </View> */}

          <View className="pt-4 pb-5 flex flex-row items-center justify-between border-b-2 my-3">
            <Text className="text-base font-psemibold">Size guide</Text>
            <TouchableOpacity className="flex" onPress={() => toggleSection(1)}>
              <Animated.View style={{ transform: [{ rotate: rotate1 }] }}>
                <AntDesign name="right" size={20} color="black" />
              </Animated.View>
            </TouchableOpacity>
          </View>
          <Collapsible collapsed={!sections[1]}>
            <View className="p-4 bg-gray-200">
              <Text className="text-base">
                Here is the size guide content...
              </Text>
            </View>
          </Collapsible>

          <View className="pt-4 pb-5 flex flex-row items-center justify-between border-b-2 my-3">
            <View className="flex flex-row items-center">
              <Text className="text-base font-psemibold">Reviews</Text>
              <Text className="text-base font-psemibold">(99)</Text>
            </View>

            <TouchableOpacity className="flex" onPress={() => toggleSection(2)}>
              <Animated.View style={{ transform: [{ rotate: rotate2 }] }}>
                <AntDesign name="right" size={20} color="black" />
              </Animated.View>
            </TouchableOpacity>
          </View>
          <Collapsible collapsed={!sections[2]}>
            <View className="p-4 bg-gray-200">
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

              <View className="items-end">
                <TouchableOpacity className="flex items-center flex-row">
                  <Text className="font-psemibold text-base text-gray-400">
                    See all
                  </Text>
                  <AntDesign name="right" size={20} color="gray" />
                </TouchableOpacity>
              </View>
            </View>
          </Collapsible>
        </View>
        <View className="flex flex-row w-full items-center justify-between">
         
          <TouchableOpacity
            onPress={handleBuyNow}
            className="bg-[#00bdd6] flex flex-row items-center justify-center my-4 rounded-sm p-3 flex-1"
          >
            {/* <Ionicons name="cart-outline" size={24} color="white" /> */}
            <Text className="font-pmedium text-base text-white ml-2">
              Buy now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetail_2;

const styles = StyleSheet.create({});
