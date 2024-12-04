import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { CheckBox } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { API_DATA } from "../constants/data";

const CartProduct = ({
  id,
  name,
  img,
  status,
  price,
  quantity: initialQuantity,
  isSelected,
  onSelect,
  onDelete,
  onUpdateTotal,
}) => {

  const handleCheckboxChange = () => {
    onSelect(!isSelected);
  };
  const [quantity, setQuantity] = useState(initialQuantity);

  const itemTotal = price * quantity;

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    // Cập nhật tổng tiền lên component cha
    onUpdateTotal(id, price * newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      // Cập nhật tổng tiền lên component cha
      onUpdateTotal(id, price * newQuantity);
    }
  };

  const handleDelete = async () => {
    try {
      console.log("Deleting product with ID:", id); // Debug log

      const response = await fetch(API_DATA, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "delete",
          id: id  // Sử dụng id từ props
        }),
      });

      const result = await response.json();
      if (result.result === "success") {
        Alert.alert("Success", "Product removed from cart");
        onDelete && onDelete(id); // Gọi callback khi xóa thành công
      } else {
        throw new Error(result.message || "Failed to remove product");
      }
    } catch (error) {
      console.error("Error removing product:", error);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View className="flex-row items-center mb-3 bg-gray-200 w-full justify-between">
      <View className="w-[15%]">
      <CheckBox 
          checked={isSelected}
          onPress={handleCheckboxChange}
        />
      </View>

      <View className="flex-1 justify-between flex-row">
        <View className="flex flex-row items-center ">
          <View className="border-2 p-4 w-[100px] h-[100px] mr-4">
            <Image
              source={{ uri: img }}
              className="w-full h-full object-cover"
            />
          </View>

          <View className="">
            <View className="flex-row items-center justify-between">
              <Text className="text-base font-psemibold">{name}</Text>
              <TouchableOpacity
                onPress={handleDelete}
                className="border-2 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <AntDesign name="delete" size={24} color="black" />
              </TouchableOpacity>
            </View>

            <Text className="text-green-400 font-pregular text-xs">
              {status}
            </Text>
            <View className="flex-row items-center justify-between my-3 mt-5">
              <Text>${price}</Text>
              
              <View className="flex-row items-center justify-end items-end">
                <TouchableOpacity
                  onPress={handleDecrement}
                  className="border-2 w-8 h-8 rounded-full flex items-center justify-center"
                >
                  <Text className="text-xl">-</Text>
                </TouchableOpacity>
                <Text className="border-2 w-8 h-8 text-center text-sm">
                  {quantity}
                </Text>
                <TouchableOpacity
                  onPress={handleIncrement}
                  className="border-2 w-8 h-8 rounded-full flex items-center justify-center"
                >
                  <Text className="text-xl">+</Text>
                </TouchableOpacity>
              </View>
              
            </View>
            <Text>Total: ${itemTotal.toFixed(2)}</Text>
          </View>

          <View className="items-end justify-end"></View>
        </View>
      </View>
    </View>
  );
};

export default CartProduct;

const styles = StyleSheet.create({});
