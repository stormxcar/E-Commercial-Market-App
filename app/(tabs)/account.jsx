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

  const recentOrders = [
    {
      id: 1,
      img: "https://picsum.photos/200",
      name: "Headphone",
      price: "$100",
      status:"Delivery",
      date:"July 10, 2024"
    },
    {
      id: 2,
      img: "https://picsum.photos/200",
      name: "Headphone",
      price: "$100",
      status:"Delivery",
      date:"July 10, 2024"
    },
    {
      id: 3,
      img: "https://picsum.photos/200",
      name: "Headphone",
      price: "$100",
      status:"Delivery",
      date:"July 10, 2024"
    },
  ];
  return (
    <SafeAreaView className="flex-1">
      <ScrollView showsVerticalScrollIndicator={true} className="w-full h-full">
        {/* Header Component */}
        <View className="px-3 pt-5 py-4 flex flex-row w-full items-center gap-3">
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            className="w-10 h-10 rounded-full"
          />
          <View>
            <Text className="text-base font-psemibold">Nguyen Kha</Text>
            <Text className="text-base font-pregular text-[#00bdd6]">Welcome back!</Text>
          </View>
        </View>

        {/* Category Grid */}
        <View className="flex flex-wrap flex-row justify-between px-3 w-full">
          {dataCategory.map((item) => (
            <TouchableOpacity
              key={item.id}
              className="flex flex-col items-center justify-center p-3 w-[100px] border-[1px] border-gray-300 mb-3 mr-3 rounded-lg"
            >
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
          ))}
        </View>

        {/* Recent Orders */}
        <View className="px-3 py-3">
          <Text className="text-base font-psemibold">Recent Orders</Text>
          <View>
            {recentOrders.map((order, index) => (
              <View
                key={index}
                className="flex flex-row w-full justify-between items-center py-4 border-b-[1px]"
              >
                <View className="flex flex-row items-center">
                  <Image
                    source={{ uri: order.img }}
                    className="w-8 h-8 object-cover p-3 mr-3 bg-gray-300 rounded-full"
                  />
                  <View>
                    <Text className="text-base font-pmedium">{order.name}</Text>
                    <Text className="font-thin">{order.status}</Text>
                  </View>
                </View>
                <View>
                  <Text className="text-base font-pmedium">{order.date}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Buttons */}
          <View className="py-5 flex flex-row w-full justify-between">
            <TouchableOpacity className="flex-1 border-2 mr-3 border-black bg-white p-3 rounded-lg">
              <Text className="text-base text-center font-psemibold text-black">
                Return item
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 p-3 rounded-lg bg-[#00BDD6]">
              <Text className="text-base text-center font-psemibold text-white">
                Track Order
              </Text>
            </TouchableOpacity>
          </View>

          {/* Summary */}
          <View className="flex flex-col items-center">
            <View className="flex flex-row items-center justify-between mb-6 w-full">
              <Text className="font-psemibold text-base">Summary</Text>
              <TouchableOpacity className="flex flex-row items-center p-2 border-[1px] border-gray-300 rounded-md">
                <Text className="font-pregular">View Details</Text>
                <AntDesign name="right" size={22} color="black" />
              </TouchableOpacity>
            </View>
            <View className="flex flex-row justify-between w-full px-3 pb-3">
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;
