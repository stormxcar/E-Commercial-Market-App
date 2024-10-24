import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CardCheckout from "../../components/CardCheckout";
import AntDesign from "@expo/vector-icons/AntDesign";

const Checkout = () => {
  const data = [{ key: "header" }, { key: "content" }];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          if (item.key === "header") {
            return <></>;
          } else {
            return (
              <ScrollView className="px-5 py-5">
                <CardCheckout />

                <View className="my-3">
                  <Text className="font-pmedium text-base">Voucher</Text>
                  <View className="flex flex-row items-center justify-between">
                    <TextInput
                      className="border-2 rounded-md p-3 mr-3 w-[70%] flex-2"
                      placeholder="enter voucher code"
                    />
                    <TouchableOpacity className="w-[25%] bg-gray-300 p-4 rounded-md">
                      <Text className="font-pregular text-base text-center">
                        Apply
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View className="flex-row w-full items-center justify-between">
                  <Text className="font-pregular text-base text-center">
                    TOTAL
                  </Text>
                  <Text className="font-psemibold text-base text-center">
                    $2,888
                  </Text>
                </View>

                <TouchableOpacity className="flex-1 bg-[#00bdd6] flex-row items-center justify-center p-4 rounded-md my-3">
                  <Text className="font-pregular text-base text-white text-center">
                    Next
                  </Text>
                  <AntDesign name="right" size={20} color="white" />
                </TouchableOpacity>
              </ScrollView>
            );
          }
        }}
      />
    </SafeAreaView>
  );
};

export default Checkout;

const styles = StyleSheet.create({});
