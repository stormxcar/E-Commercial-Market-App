import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const Payment = () => {
  return (
    <View>
      <View className="py-5">
        <Text className="text-center font-pbold text-xl py-4 text-green-400">
          Order placed successfully
        </Text>
        <Text className="text-center font-pregular py-3">
          Commo et ui ui jdjnndnnnd
        </Text>
      </View>

      <View className="bg-gray-200 p-5 mx-3 rounded-lg">
        <View className="flex-row items-center justify-between w-full py-4">
          <Text className="text-center font-pregular ">Subtotal</Text>
          <Text className="text-center font-pregular ">$2,800</Text>
        </View>
        <View className="flex-row items-center justify-between w-full py-4">
          <Text className="text-center font-pregular ">Tax(10%)</Text>
          <Text className="text-center font-pregular ">$2,800</Text>
        </View>
        <View className="flex-row items-center justify-between w-full py-4">
          <Text className="text-center font-pregular ">Fees</Text>
          <Text className="text-center font-pregular ">$2,800</Text>
        </View>
        <View className="flex-row items-center justify-between w-full py-4">
          <Text className="text-center font-pregular p">ard</Text>
          <Text className="text-center font-pregular ">$2,800</Text>
        </View>
        <View className="flex-row items-center justify-between w-full py-4">
          <Text className="text-center font-pregular ">Total</Text>
          <View className="flex-row items-center">
            <Text className="bg-green-300 p-2 mr-2 rounded-lg">Sussess</Text>
            <Text className="text-center font-psemibold text-green-800 text-2xl">
              $2,800
            </Text>
          </View>
        </View>
      </View>

      <View className="py-4 px-5">
        <Text className="text-center font-pregular">
          How was your experiencre?
        </Text>

        <TouchableOpacity className="bg-[#00bdd6] flex-row items-center justify-center p-4 rounded-md my-3">
          <Text className="text-white font-pregular text-base text-center">
            Back to Home
          </Text>
          <AntDesign name="right" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({});
