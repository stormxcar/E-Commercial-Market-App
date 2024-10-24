import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const MethodPayment = () => {
  return (
    <View>
      <View className="my-5">
        <Text className="text-center font-pbold">TOTAL</Text>
        <Text className="text-2xl font-pbold text-center">$3,090</Text>
      </View>
      <View className="m-3">
        <View className="border-2 flex-row items-center p-2 rounded-md mb-4">
          <View className="w-[20%] mr-3">
            <Image
              source={{ uri: "https://picsum.photos/200" }}
              className="w-10 h-10 rounded-full"
            />
          </View>

          <View className="flex-row justify-between w-[72%]">
            <View>
              <Text className="font-plight text-base">**** **** **** 1234</Text>
              <Text className="font-pregular text-sm">Mastercard</Text>
            </View>
            <Text>Checked</Text>
          </View>
        </View>

        <View className="border-2 flex-row items-center p-2 rounded-md mb-4">
          <View className="w-[20%] mr-3">
            <Image
              source={{ uri: "https://picsum.photos/200" }}
              className="w-10 h-10 rounded-full"
            />
          </View>

          <View className="flex-row justify-between w-[72%]">
            <View>
              <Text className="font-plight text-base">**** **** **** 1234</Text>
              <Text className="font-pregular text-sm">Mastercard</Text>
            </View>
            <Text>Checked</Text>
          </View>
        </View>

        <View className="border-2 flex-row items-center p-2 rounded-md">
          <View className="w-[20%] mr-3">
            <Image
              source={{ uri: "https://picsum.photos/200" }}
              className="w-10 h-10 rounded-full"
            />
          </View>

          <View className="flex-row justify-between w-[72%]">
            <View>
              <Text className="font-plight text-base">n**67@gmail.com</Text>
              <Text className="font-pregular text-sm">Paypal</Text>
            </View>
            <Text>Checked</Text>
          </View>
        </View>
      </View>

      <View className="px-3">
        <TouchableOpacity className="flex-row items-center justify-center px-4 rounded-md my-3">
        <AntDesign name="plus" size={20} color="#00bdd6" />
          <Text className="text-[#00bdd6] font-pregular text-base text-center">
            Add new card
          </Text>
          
        </TouchableOpacity>
      </View>

      <View className="px-3">
        <Link href="./Payment" asChild>
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
