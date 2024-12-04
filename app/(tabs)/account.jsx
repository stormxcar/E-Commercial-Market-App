import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, router } from "expo-router";
import Modal from "react-native-modal";
import Timeline from "react-native-timeline-flatlist";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_DATA } from "../../constants/data";

const Account = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const data = [
    {
      time: "09:00",
      title: "Order Placed",
      description: "Your order has been placed.",
    },
    {
      time: "12:00",
      title: "Order Confirmed",
      description: "Your order has been confirmed.",
    },
    {
      time: "15:00",
      title: "Order Shipped",
      description: "Your order has been shipped.",
    },
    {
      time: "18:00",
      title: "Out for Delivery",
      description: "Your order is out for delivery.",
    },
    {
      time: "20:00",
      title: "Delivered",
      description: "Your order has been delivered.",
    },
  ];
  const renderCircle = (rowData, sectionID, rowID) => {
    return (
      <MaterialCommunityIcons
        name="checkbox-marked-circle-outline"
        size={20}
        color="#00BDD6"
      />
    );
  };
  const renderDetail = (rowData, sectionID, rowID) => {
    return (
      <View className="flex-1 p-3 bg-[#f0f0f0] rounded-md">
        <Text className="font-pbold mb-2">{rowData.title}</Text>
        <Text className="font-pregular text-gray">{rowData.description}</Text>
      </View>
    );
  };

  const dataCategory = [
    {
      id: 1,
      img: "https://picsum.photos/200",
      categoryName: "Orders / History",
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
      categoryName: "Buy back",
    },
    {
      id: 5,
      img: "https://picsum.photos/200",
      categoryName: "E-voucher",
    },
    // {
    //   id: 6,
    //   img: "https://picsum.photos/200",
    //   categoryName: "Member",
    // },
  ];

  const recentOrders = [
    {
      id: 1,
      img: "https://picsum.photos/200",
      name: "Headphone",
      price: "$100",
      status: "Delivery",
      date: "July 10, 2024",
    },
    {
      id: 2,
      img: "https://picsum.photos/200",
      name: "Headphone",
      price: "$100",
      status: "Delivery",
      date: "July 10, 2024",
    },
    {
      id: 3,
      img: "https://picsum.photos/200",
      name: "Headphone",
      price: "$100",
      status: "Delivery",
      date: "July 10, 2024",
    },
  ];

  const [refreshing, setRefreshing] = useState(false);
  const [countShipping, setCountShipping] = useState(0);

  const onRefresh = async () => {
    setRefreshing(true);
    await getData();
    setRefreshing(false);
  };

  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem("user_id");
        setUserId(storedUserId); // Cập nhật userId vào state
      } catch (error) {
        console.error("Error checking user_id:", error);
      }
    };

    checkLogin();
  }, []);

  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await fetch(API_DATA);
        const data = await response.json();

        const user = data.account.find((user) => user.user_id == userId); // Sửa đổi điều kiện tìm kiếm

        // console.log('====================================');
        // console.log("data user found: ",user);
        // console.log('====================================');

        setUserName(user?.user_name || ""); // Lấy user_name thay vì name
      } catch (error) {
        console.error("Error fetching user name:", error);
      }
    };
    fetchUserName();
  }, [userId]);

  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        showsVerticalScrollIndicator={true}
        className="w-full h-full"
        refreshControl={<RefreshControl refreshing={refreshing} />}
        onRefresh={onRefresh}
      >
        {/* Header Component */}
        {userId ? (
          <View className="px-3 pt-5 py-4 flex flex-row w-full items-center gap-3">
            <Image
              source={{ uri: "https://picsum.photos/200" }}
              className="w-10 h-10 rounded-full"
            />
            <View>
              <Link href="/details/UpdateProfile" asChild>
                <TouchableOpacity>
                  <Text className="text-base font-psemibold">{userName}</Text>
                </TouchableOpacity>
              </Link>
              <Text className="text-base font-pregular text-[#00bdd6]">
                Welcome back!
              </Text>
            </View>
          </View>
        ) : (
          <View className="px-3 pt-5 py-4 flex flex-row w-full items-center bg-[#00BDD6]">
            <Link href="/log_in" asChild>
              <TouchableOpacity>
                <Text className="text-white font-pbold">
                  You must be logged in
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        )}

        {/* Category Grid */}
        <View className="flex flex-wrap flex-row justify-between px-3 w-full mt-3">
          {dataCategory.map((item) => {
            let href = "#";
            if (item.categoryName === "Buy back") {
              href = "/details/BuyBack";
            } else if (item.categoryName === "Shipping") {
              href = "/details/Shipping";
            } else if (item.categoryName === "Orders / History") {
              href = "/details/Ordered";
            } else if (item.categoryName === "E-voucher") {
              href = "/details/EVoucher";
            }

            return (
              <React.Fragment key={item.id}>
                {item.categoryName === "Payment Methods" ? (
                  <TouchableOpacity
                    className="flex flex-col items-center justify-center p-3 w-[100px] border-[1px] border-gray-300 mb-3 mr-3 rounded-lg"
                    onPress={toggleModal}
                  >
                    <View className="bg-purple-200 rounded-full flex items-center justify-center p-4 mb-3">
                      <Image
                        className="w-7 h-7 m-2"
                        source={{ uri: item.img }}
                        resizeMode="cover"
                      />
                    </View>
                    <Text className="text-base font-psemibold">
                      {item.categoryName}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <Link key={item.id} href={href} asChild>
                    <TouchableOpacity className="flex flex-col items-center justify-center p-3 w-[100px] border-[1px] border-gray-300 mb-3 mr-3 rounded-lg">
                      <View className="bg-purple-200 rounded-full flex items-center justify-center p-4 mb-3">
                        <Image
                          className="w-7 h-7 m-2"
                          source={{ uri: item.img }}
                          resizeMode="cover"
                        />
                      </View>
                      <Text className="font-pmedium">{item.categoryName}</Text>
                      {item.categoryName === "Shipping" && (
                        <View
                          className={`${
                            countShipping.length > 0 ? "bg-[#00BDD6] " : null
                          } rounded-full flex items-center justify-center p-2 absolute top-[-20px] right-[-20px] w-10 h-10`}
                        >
                          <Text className="font-pregular text-xs text-center flex-wrap text-white">
                            {countShipping.length > 0 ? countShipping : null}
                          </Text>
                        </View>
                      )}
                    </TouchableOpacity>
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </View>

        <Modal
          isVisible={isModalVisible}
          onBackdropPress={toggleModal}
          className="m-0 justify-end"
        >
          {!userId ? (
            <View className="p-5 bg-white rounded-md">
              <Text className="text-center font-psemibold text-lg">
                Please login to see your payment method
              </Text>
              {/* <TouchableOpacity onPress={() => router.push("/log_in")}>
                <Text className="text-center font-psemibold text-lg text-[#00BDD6]">
                  Login now
                </Text>
              </TouchableOpacity> */}
            </View>
          ) : (
            <View className="bg-white rounded-t-3xl h-auto p-4 w-full items-center">
              <View className="w-full flex justify-between items-center flex-row">
                <Text className="w-full text-base font-psemibold border-b-[1px] border-gray-300 py-3">
                  Your Payment methods
                </Text>
              </View>
              <View className="w-full mt-4">
                <View className="flex flex-row items-center mb-2">
                  <Text className="text-base font-pregular flex-1">Paypal</Text>
                  <Text className="flex-1 text-sm font-pregular text-gray-500">
                    added
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
          )}
        </Modal>

        {/* Recent Orders */}

        <View className="px-3 py-3">
          <Text className="text-base font-psemibold">Recent Orders</Text>
          <View>
            {userId ? (
              <>
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
                        <Text className="text-base font-pmedium">
                          {order.name}
                        </Text>
                        <Text className="font-thin">{order.status}</Text>
                      </View>
                    </View>
                    <View>
                      <Text className="text-base font-pmedium">
                        {order.date}
                      </Text>
                    </View>
                  </View>
                ))}
              </>
            ) : (
              <Text>Please login to see your recent orders</Text>
            )}
          </View>

          {/* Buttons */}
          <View className="py-5 flex flex-row w-full justify-between"></View>

          {/* Summary */}
          {/* <View className="flex flex-col items-center">
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
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;
