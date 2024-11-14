import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { CheckBox } from "react-native-elements";
import Slider from "@react-native-community/slider";
import { useNavigation, useRoute } from "@react-navigation/native";

const FilterProduct = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { name } = route.params;

  useEffect(() => {
    if (name) {
      navigation.setOptions({ title: name });
    }
  }, [name]);

  const [isChecked, setIsChecked] = useState(false);
  const [price, setPrice] = useState(500); // Default value for the slider

  return (
    <SafeAreaView>
      <View className="px-3 py-3">
        <View className="flex flex-row items-center justify-between">
          <Text className="font-psemibold text-gray-400 text-base">
            Shipping options
          </Text>
          <AntDesign name="right" size={20} color="black" />
        </View>
        <View>
          <View className="flex flex-row items-center">
            <CheckBox
              checked={isChecked}
              onPress={() => setIsChecked(!isChecked)}
            />
            <Text className="font-pmedium">Instant (2 hours delivery)</Text>
          </View>
          <View className="flex flex-row items-center">
            <CheckBox
              checked={isChecked}
              onPress={() => setIsChecked(!isChecked)}
            />
            <Text className="font-pmedium">Express (2 days delivery)</Text>
          </View>
          <View className="flex flex-row items-center">
            <CheckBox
              checked={isChecked}
              onPress={() => setIsChecked(!isChecked)}
            />
            <Text className="font-pmedium">Standard (7-10 days delivery)</Text>
          </View>
        </View>
      </View>

      <View className="px-3 py-3">
        <View className="flex flex-row items-center justify-between mb-3">
          <Text className="font-psemibold text-gray-400 text-base">
            Price range
          </Text>
          <AntDesign name="right" size={20} color="black" />
        </View>
        <View>
          <View className="flex flex-row justify-between">
            <Text className="font-psemibold text-gray-400 text-base">
              $0
            </Text>
            <Text className="font-psemibold text-gray-400 text-base">
              $1000
            </Text>
          </View>
          <Slider
            style={{ width: "100%", height: 40 }}
            minimumValue={0}
            maximumValue={1000}
            step={1}
            minimumTrackTintColor="#1FB28A"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#1FB28A"
            value={price}
            onValueChange={(value) => setPrice(value)}
          />
        </View>
      </View>

      <View className="px-3 py-3 mb-3">
        <View className="flex flex-row items-center justify-between">
          <Text className="font-psemibold text-gray-400 text-base">
            Average review
          </Text>
          <AntDesign name="right" size={20} color="black" />
        </View>
        <View className="flex flex-row items-center justify-center gap-2">
          <AntDesign name="star" size={20} color="orange" />
          <AntDesign name="star" size={20} color="orange" />
          <AntDesign name="star" size={20} color="orange" />
          <AntDesign name="star" size={20} color="orange" />
          <AntDesign name="star" size={20} color="orange" />
        </View>
      </View>

      <View className="px-3 py-3">
        <View className="flex flex-row items-center justify-between">
          <Text className="font-psemibold text-gray-400 text-base">Others</Text>
          <AntDesign name="right" size={20} color="black" />
        </View>
        <View className="flex flex-wrap justify-between flex-row w-full mt-3">
          <TouchableOpacity className="border-2 p-4 rounded-sm w-[48%] mb-3 mr-3 items-center flex-col border-[#00bdd6]">
            <AntDesign name="right" size={20} color="black" />
            <Text>30-day Free Return</Text>
          </TouchableOpacity>
          <TouchableOpacity className="border-2 p-4 rounded-sm w-[48%] mb-3 items-center flex-col">
            <AntDesign name="right" size={20} color="black" />
            <Text>Buyer Protection</Text>
          </TouchableOpacity>
          <TouchableOpacity className="border-2 p-4 rounded-sm w-[48%] items-center flex-col">
            <AntDesign name="right" size={20} color="black" />
            <Text>Best Deal</Text>
          </TouchableOpacity>
          <TouchableOpacity className="border-2 p-4 rounded-sm w-[48%] items-center flex-col">
            <AntDesign name="right" size={20} color="black" />
            <Text>Ship to store</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-3">
          <TouchableOpacity className="p-3 bg-[#00bdd6] rounded-md">
            <Text className="font-psemibold text-base text-center text-white">Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FilterProduct;

const styles = StyleSheet.create({});
