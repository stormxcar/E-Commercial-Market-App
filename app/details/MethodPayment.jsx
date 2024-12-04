import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRoute, useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { API_DATA } from "../../constants/data";

const MethodPayment = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { totalPrice, title, items } = route.params;

  console.log('====================================');
  console.log(items);
  console.log('====================================');

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const updateOrderStatus = async (newStatus) => {
    try {
      const response = await fetch(API_DATA, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "update_status",
          new_status: newStatus, // Trạng thái mới ("shipping", "completed", ...)
        }),
      });
  
      if (!response.ok) throw new Error("Lỗi khi cập nhật trạng thái.");
  
      const result = await response.json();
      if (result.result === "success") {
        Alert.alert("Cập nhật trạng thái thành công!");
      } else {
        Alert.alert("Lỗi:", result.message || "Không rõ lý do.");
      }
    } catch (error) {
      console.error("Lỗi:", error);
      Alert.alert("Không thể cập nhật trạng thái đơn hàng.", error.message);
    }
  };
  const handleCheckout = () => {
    updateOrderStatus("shipping");
  };
  
  

  useEffect(()=> {
    if(title) {
      navigation.setOptions({ title: title });
    }
  }, [title]);



  return (
    <View>
      <View className="my-5">
        <Text className="text-center font-pbold">TOTAL</Text>
        <Text className="text-2xl font-pbold text-center">${totalPrice}</Text>
      </View>
      <View className="m-3">
        <View className="border-2 border-green-500 flex-row items-center p-2 rounded-md mb-4 bg-gray-200 shadow-sm">
          <View className="w-[10%] mr-3">
            <Image
              source={{ uri: "https://picsum.photos/200" }}
              className="w-10 h-10 rounded-full"
            />
          </View>
          <View className="flex-row items-center justify-between w-[80%] ">
            <View>
              <Text className="font-plight text-base">Received order</Text>
            </View>
            <Text className="text-green-500 font-pmedium">Checked</Text>
          </View>
        </View>
        <View className="border-2 flex-row items-center p-2 rounded-md mb-4">
          <View className="w-[10%] mr-3">
            <Image
              source={{ uri: "https://picsum.photos/200" }}
              className="w-10 h-10 rounded-full"
            />
          </View>

          <View className="flex-row justify-between w-[80%]">
            <View>
              <Text className="font-plight text-base">**** **** **** 1234</Text>
              <Text className="font-pregular text-sm">Mastercard</Text>
            </View>
            <Text>Check</Text>
          </View>
        </View>

        <View className="border-2 flex-row items-center p-2 rounded-md">
          <View className="w-[10%] mr-3">
            <Image
              source={{ uri: "https://picsum.photos/200" }}
              className="w-10 h-10 rounded-full"
            />
          </View>

          <View className="flex-row justify-between w-[80%]">
            <View>
              <Text className="font-plight text-base">n**67@gmail.com</Text>
              <Text className="font-pregular text-sm">Paypal</Text>
            </View>
            <Text>Check</Text>
          </View>
        </View>
      </View>

      <View className="px-3">
        <TouchableOpacity
          className="flex-row items-center justify-center px-4 rounded-md my-3"
          onPress={toggleModal}
        >
          <AntDesign name="plus" size={20} color="#00bdd6" />
          <Text className="text-[#00bdd6] font-pregular text-base text-center">
            Add new method
          </Text>
        </TouchableOpacity>

        <Modal
          isVisible={isModalVisible}
          onBackdropPress={toggleModal}
          className="m-0 justify-end"
          animationIn="slideInUp"
          animationOut="slideOutDown"
        >
          <View className="bg-white rounded-t-3xl h-auto p-4 w-full items-center">
            <View className="w-full flex justify-between items-center flex-row">
              <Text className="w-full text-base font-psemibold border-b-[1px] border-gray-300 py-3">
                Add new payment method
              </Text>
            </View>
            <View className="w-full mt-4">
              <View className="flex flex-row items-center mb-2">
                <Text className="text-base font-pregular flex-1">Momo</Text>
                <Text className="flex-1 text-sm font-pregular text-gray-500">
                  unlink
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

      <View className="px-3">
        <Link onPress={handleCheckout}
        href={{ pathname: "./Payment", params: { totalPrice , title:'Payment'} }} asChild>
          <TouchableOpacity className="bg-[#00bdd6] flex-row items-center justify-center p-4 rounded-md my-3">
            <Text className="text-white font-pregular text-base text-center">
              Pay now
            </Text>
            <AntDesign name="right" size={20} color="white" />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default MethodPayment;

const styles = StyleSheet.create({});
