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
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import ProductCard from "./ProductCard";
import { Link } from "expo-router";

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

const ProductDetail = () => {
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

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView>
      <ScrollView className="px-5 py-5 flex flex-col">
        <View className="w-full h-[200px] rounded-lg">
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            className="w-full h-full rounded-lg overflow-hidden"
            width={30}
            height={30}
            resizeMode="cover"
          />
        </View>

        <View className="flex flex-row justify-between my-3 items-center">
          <Text className="text-base font-psemibold">$59</Text>
          <View className="flex flex-row gap-2 items-center">
            <AntDesign name="star" size={24} color="orange" />
            <Text className="font-pregular">4.5</Text>
            <Text className="font-pregular">(99 reviews)</Text>
          </View>
        </View>

        <View>
          <Text className="text-base font-psemibold my-3">Description</Text>
          <Text className="font-pregular text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint
          </Text>
        </View>

        <View className="flex flex-row justify-between flex-wrap w-full my-8 py-3">
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
          <View className="flex flex-row justify-between w-full items-center mb-4">
            <Text className="text-base font-psemibold">Reviews</Text>
            <TouchableOpacity className="flex flex-row items-center">
              <Text className="text-base font-pregular text-gray-500">
                See all
              </Text>
              <AntDesign name="right" size={20} color="black" />
            </TouchableOpacity>
          </View>

          <View className="flex flex-col justify-between bg-gray-200 p-3 rounded-lg">
            <View className="flex flex-row items-center ">
              <View className="flex flex-col">
                <View className="flex flex-row items-center">
                  <Text className="text-base font-pregular pr-2">4.5 / 5</Text>
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

        <View className="">
          <View className="flex flex-row justify-between py-3">
            <Text className="text-base font-psemibold">Relevants products</Text>
            <TouchableOpacity className="flex flex-row">
              <Text className="text-sm font-pregular">See all</Text>
              <AntDesign name="right" size={20} color="black" />
            </TouchableOpacity>
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

          <View className="p-3 border-[1px] rounded-md flex flex-row items-center justify-between my-3">
            <View className="flex flex-row items-center">
              <View className="p-3 bg-[#00BDD6] rounded-lg rounded-lg mr-3">
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
            </View>
          </View>
        </View>

        <View className="flex flex-row justify-between items-center my-4">
          <View className="bg-white border-[1px] rounded-md border-[#00bdd6] p-3 mr-3">
            <Ionicons name="cart-outline" size={24} color="#00bdd6" />
          </View>

          <Link href="./Checkout" asChild>
            <TouchableOpacity className="flex-1">
              <Text className="rounded-sm font-pregular text-base w-full bg-[#00bdd6] text-white text-center p-3">
                Buy now
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
