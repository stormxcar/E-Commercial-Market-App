import { StyleSheet, Text, View , Image, TouchableOpacity } from "react-native";
import React from "react";

const MessageNotify = ({ nameFrom, status, time, img }) => {
  return (
    <TouchableOpacity className="border-b-[1px] py-3 flex flex-row justify-between items-center">
      <View className="flex flex-row gap-2">
        <View className="p-3 bg-pink-100 rounded-full">
          <Image source={{ uri: img }} className="w-5 h-5 object-cover" />
        </View>
        <View>
          <Text className="text-base font-psemibold">{nameFrom}</Text>
          <Text className="text-xs font-psemibold">{status}</Text>
        </View>
      </View>
      <View>
        <Text className="font-plight text-sm">{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MessageNotify;

const styles = StyleSheet.create({});
