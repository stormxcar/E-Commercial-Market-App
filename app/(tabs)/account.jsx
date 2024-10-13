import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const Account = () => {
  const dataCategory = [
    {
      id: 1,
      img: "https://picsum.photos/200",
      categoryName: "Orders",
    },
    {
      id: 2,
      img: "https://picsum.photos/200",
      categoryName: "Shipping",
    },
    {
      id: 3,
      img: "https://picsum.photos/200",
      categoryName: "Payment Methods",
    },
    {
      id: 4,
      img: "https://picsum.photos/200",
      categoryName: "My feedback",
    },
    {
      id: 5,
      img: "https://picsum.photos/200",
      categoryName: "E-voucher",
    },
    {
      id: 6,
      img: "https://picsum.photos/200",
      categoryName: "Member",
    },
  ];
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 pb-4">
        <View className="px-5 pt-5 py-2 flex flex-row w-full items-center gap-3">
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            className="w-10 h-10 rounded-full"
          />
          <View>
            <Text className="text-base font-pmedium">Nguyen Kha</Text>
            <Text className="text-base font-pregular">Welcome back!</Text>
          </View>
        </View>

        <View className="p-5 w-full flex flex-row justify-between flex-wrap">
          <FlatList
            data={dataCategory}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity className="flex flex-col items-center justify-center p-3 w-[97px] border-[1px] border-gray-300 mb-3 mr-3 rounded-lg">
                <View className="bg-purple-200 rounded-full flex items-center justify-center p-4 mb-3">
                  <Image
                    className="w-7 h-7 m-2"
                    source={{ uri: item.img }}
                    resizeMode="cover"
                  />
                </View>
                <Text className="font-pregular text-xs text-center flex-wrap">
                  {item.categoryName}
                </Text>
              </TouchableOpacity>
            )}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{ justifyContent: "space-between" }}
          />
        </View>

        <View className="px-5 flex flex-col">
          <Text className="text-base font-psemibold">Recent Orders</Text>
          <View>
            <View className="flex flex-row w-full justify-between items-center py-4 border-b-[1px]">
              <View className="flex flex-row items-center">
                <Image
                  source={{ uri: "https://picsum.photos/200" }}
                  className="w-5 h-5 object-cover p-3 mr-3"
                />
                <View>
                  <Text className="text-base font-pmedium">Order ID</Text>
                  <Text className="font-thin">Order Status</Text>
                </View>
              </View>
              <View>
                <Text className="text-base font-pmedium">July 10, 2021</Text>
              </View>
            </View>

            <View className="flex flex-row w-full justify-between items-center py-4 border-b-[1px]">
              <View className="flex flex-row items-center">
                <Image
                  source={{ uri: "https://picsum.photos/200" }}
                  className="w-5 h-5 object-cover p-3 mr-3"
                />
                <View>
                  <Text className="text-base font-pmedium">Order ID</Text>
                  <Text className="font-thin">Order Status</Text>
                </View>
              </View>
              <View>
                <Text className="text-base font-pmedium">July 10, 2021</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="px-5 py-5 flex flex-row w-full justify-between">
          <TouchableOpacity className=" flex-1 border-2 mr-3 border-black bg-white p-3 rounded-lg">
            <Text className="text-base text-center font-psemibold text-black">
              Return item
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className=" flex-1 p-3 rounded-lg bg-[#00BDD6]">
            <Text className="text-base text-center font-psemibold text-white">
              Track Order
            </Text>
          </TouchableOpacity>
        </View>

        <View className="px-5 py-4 flex flex-col items-center">
          <View className="flex flex-row items-center justify-between mb-6 w-full">
            <Text className="font-psemibold text-base">Summary</Text>
            <TouchableOpacity className="flex flex-row items-center p-2 border-[1px] border-gray-300 rounded-md">
              <Text className="font-pregular">View Details</Text>
              <AntDesign name="right" size={22} color="black" />
            </TouchableOpacity>
          </View>
          <View className="flex flex-row justify-between w-full px-3">
            <View className="flex-1 mr-6 w-full border-[1px] p-3 flex flex-col gap-3 border-gray-300">
              <Text className="text-base font-pmedium">Total Orders</Text>
              <Text className="text-base font-pblack">2</Text>
              <Text className="font-pregular">+10%</Text>
            </View>
            <View className="flex-1 w-full border-[1px] p-3 flex flex-col gap-3 border-gray-300">
              <Text className="text-base font-pmedium">Total Spent</Text>
              <Text className="text-base font-pblack">$200</Text>
              <Text className="font-pregular">-2%</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;
