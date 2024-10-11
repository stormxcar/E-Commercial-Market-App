import React, { useState } from "react";
import { SafeAreaView, View, TouchableOpacity, Text, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const HeaderShown = ({ title, currentTab }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <SafeAreaView className="flex flex-row items-center justify-between w-full bg-white py-8 px-5">
      <View className="flex flex-row items-center gap-2 py-5">
        <TouchableOpacity>
          <AntDesign name="left" size={30} color="black" />
        </TouchableOpacity>

        <Text className="font-psemibold text-lg">{title}</Text>
      </View>

      {currentTab === "home" && isShow ? (
        <View className="flex flex-row items-center gap-2">
          <TouchableOpacity>
            <AntDesign name="shoppingcart" size={30} color="black" />
          </TouchableOpacity>

          <View className="">
            <Image
              source={{ uri: "https://picsum.photos/200" }}
              className="border-2 w-12 h-12 rounded-full"
              width={30}
              height={30}
              resizeMode="contain"
            />
          </View>
        </View>
      ) : currentTab === "account" ? (
        <View className="flex flex-row items-center gap-2">
          <TouchableOpacity>
            <AntDesign name="setting" size={30} color="black" />
          </TouchableOpacity>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default HeaderShown;