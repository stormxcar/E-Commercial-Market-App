import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const HeaderShown = ({ title }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <SafeAreaView className="flex flex-row items-center justify-between w-full bg-white pt-6 py-3 px-4">
      <View className="flex flex-row items-center py-5">
        <TouchableOpacity>
          <AntDesign name="left" size={30} color="black" />
        </TouchableOpacity>

        <Text className="font-psemibold text-lg">{title}</Text>
      </View>

      <View className="flex flex-row items-center gap-2">
        <TouchableOpacity>
          <AntDesign name="shoppingcart" size={30} color="black" />
        </TouchableOpacity>

        <View>
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            className="border-2 w-10 h-10 rounded-full"
            width={30}
            height={30}
            resizeMode="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderShown;
