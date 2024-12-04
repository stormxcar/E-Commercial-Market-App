import { StyleSheet, Text, TouchableOpacity, View , Image} from "react-native";
import React from "react";

const VoucherCard = ({ image, title, description,valid, condition }) => {
  return (
    <TouchableOpacity className="flex-row justify-between p-3 bg-white mb-2 shadow-sm w-full">
      <View className="w-[25%]">
        <Image source={image} className="w-20 h-20 object-contain bg-gray-200" />
      </View>
      <View className="ml-3 flex-col w-[75%]">
        <Text className="font-psemibold">{title}</Text>
        <Text className="font-pregular">{description}</Text>
        <View className="flex-row items-center mt-1">
          <Text className="text-xs font-pregular">{valid}</Text>
          <Text className="text-xs font-pmedium ml-2 text-blue-600 " >condition</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VoucherCard;

const styles = StyleSheet.create({});
