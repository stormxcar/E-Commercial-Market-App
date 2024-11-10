import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { CheckBox } from "react-native-elements";

const CartProduct = ({ name, img, status, price, quantity }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View className="flex-row items-center px-3 mb-3">
      <CheckBox checked={isChecked} onPress={() => setIsChecked(!isChecked)} />
      <View>
        <View className="flex flex-row items-center">
          <View className="border-2 p-4 w-[100px] h-[100px] mr-4">
            <Image
              source={{ uri: img }}
              className="w-full h-full object-cover"
            />
          </View>

          <View className="">
            <Text className="text-base font-psemibold">{name}</Text>
            <Text className="text-green-400 font-pregular text-xs">
              {status}
            </Text>
            <View className="flex-row items-center justify-between my-3 mt-5">
              <Text>${price}</Text>
              <View className="flex-row items-center justify-end items-end">
                <TouchableOpacity className="border-2 w-10 h-10 rounded-full flex items-center justify-center">
                  <Text className="text-xl">-</Text>
                </TouchableOpacity>
                <Text className="border-2 w-10 h-10 text-center text-lg">{quantity}</Text>
                <TouchableOpacity className="border-2 w-10 h-10 rounded-full flex items-center justify-center">
                  <Text className="text-xl">+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartProduct;

const styles = StyleSheet.create({});
