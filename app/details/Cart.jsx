import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { CheckBox } from "react-native-elements";

const Cart = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView className="py-2 h-[100vh] relative">
        <View className="">
          <View className="flex-row items-center px-3 mb-3">
            <CheckBox
              checked={isChecked}
              onPress={() => setIsChecked(!isChecked)}
            />
            <View>
              <View className="flex flex-row items-center">
                <View className="border-2 p-4 w-[100px] h-[100px] mr-4">
                  <Image
                    source={{ uri: "https://picsum.photos/200" }}
                    className="w-full h-full object-cover"
                  />
                </View>

                <View className="">
                  <Text className="text-base font-psemibold">Product Name</Text>
                  <Text className="text-green-400 font-pregular text-xs">
                    refund after 15 days
                  </Text>
                  <View className="flex-row items-center justify-between my-3 mt-5">
                    <Text>$444</Text>
                    <View className="flex-row items-center justify-end items-end">
                      <TouchableOpacity className="border-2 p-3">
                        <Text>-</Text>
                      </TouchableOpacity>
                      <TextInput
                        value="1"
                        className="border-2 p-2 text-center"
                      />
                      <TouchableOpacity className="border-2 p-3">
                        <Text>-</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className="flex-row items-center px-3 mb-3">
            <CheckBox
              checked={isChecked}
              onPress={() => setIsChecked(!isChecked)}
            />
            <View>
              <View className="flex flex-row items-center">
                <View className="border-2 p-4 w-[100px] h-[100px] mr-4">
                  <Image
                    source={{ uri: "https://picsum.photos/200" }}
                    className="w-full h-full object-cover"
                  />
                </View>

                <View className="">
                  <Text className="text-base font-psemibold">Product Name</Text>
                  <Text className="text-green-400 font-pregular text-xs">
                    refund after 15 days
                  </Text>
                  <View className="flex-row items-center justify-between my-3 mt-5">
                    <Text>$444</Text>
                    <View className="flex-row items-center justify-end items-end">
                      <TouchableOpacity className="border-2 p-3">
                        <Text>-</Text>
                      </TouchableOpacity>
                      <TextInput
                        value="1"
                        className="border-2 p-2 text-center"
                      />
                      <TouchableOpacity className="border-2 p-3">
                        <Text>-</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="px-2 py-3 fixed bottom-0 left-0 w-full border-t-2 mt-3">
          <View className="flex-row items-center justify-between">
            <Text className="font-psemibold text-base">Voucher</Text>
            <TouchableOpacity>
              <Text className="font-pregular text-gray-400">Select or enter code</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <CheckBox
                checked={isChecked}
                onPress={() => setIsChecked(!isChecked)}
              />
              <Text>All</Text>
            </View>
            <View className="flex flex-row items-center">
              <Text className="font-pregular text-base">Total: $0</Text>
              <TouchableOpacity className="py-3 px-10 bg-[#00bdd6] ml-2">
                <Text className="text-base font-pbold text-white">Buy (0)</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
