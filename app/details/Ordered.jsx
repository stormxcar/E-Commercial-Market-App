import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import CardCheckout from "../../components/CardCheckout";
import Modal from "react-native-modal";
import Timeline from "react-native-timeline-flatlist";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const Ordered = () => {
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

  return (
    <SafeAreaView>
      <ScrollView className="p-2">
        {!userId ? (
          <View className="p-3 bg-white rounded-md">
            <Text className="text-center font-psemibold text-lg">
              Please login to see your order history
            </Text>
            <TouchableOpacity onPress={() => router.push('/log_in')}>
              <Text className="text-center font-psemibold text-lg text-[#00BDD6]">Login now</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View className="p-3 bg-white rounded-md">
            <CardCheckout
              name={"sports sneaker 1"}
              price={100}
              quantity={1}
              // img={"https://via"}
              status={"Delivering"}
            />
            <View className="w-full justify-end items-end ">
              <TouchableOpacity
                className="flex-1 p-2 rounded-lg border-2 w-[30%] border-[#00BDD6]"
                onPress={toggleModal}
              >
                <Text className="text-center font-pregular text-[#00bdd6]">
                  Feedback
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Ordered;

const styles = StyleSheet.create({});
