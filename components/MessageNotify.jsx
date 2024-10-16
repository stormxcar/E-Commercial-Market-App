import { StyleSheet, Text, View , Image } from "react-native";
import React from "react";

const MessageNotify = ({ nameFrom, status, time, img }) => {
  return (
    <View className="border-b-[1px] py-3 flex flex-row justify-between items-center">
      <View className="flex flex-row gap-2">
        <View className="p-3 bg-pink-100 rounded-full">
          <Image source={{ uri: img }} className="w-5 h-5 object-cover" />
        </View>
        <View>
          <Text className="text-base font-pregular">{nameFrom}</Text>
          <Text className="text-xs font-pregular">{status}</Text>
        </View>
      </View>
      <View>
        <Text className="font-plight text-sm">{time}</Text>
      </View>
    </View>
  );
};

export default MessageNotify;

const styles = StyleSheet.create({});
