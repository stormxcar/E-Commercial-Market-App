import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Settings = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text className="text-xl p-3 w-[100%] bg-gray-300 text-base font-pmedium">Account</Text>
          <TouchableOpacity className="flex-row justify-between p-3 border-b-[1px] ">
            <Text className="font-pregular text-base">Account and privacy</Text>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between p-3 border-b-[1px] ">
            <Text className="font-pregular text-base">Address</Text>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between p-3 border-b-[1px] ">
            <Text className="font-pregular text-base">Account / Credit card</Text>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View>
          <Text className="text-xl p-3 w-[100%] bg-gray-300 text-base font-pmedium">Setting</Text>
          <TouchableOpacity className="flex-row justify-between p-3 border-b-[1px] ">
            <Text className="font-pregular text-base">Chat setting</Text>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between p-3 border-b-[1px] ">
            <Text className="font-pregular text-base">Notification setting</Text>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between p-3 border-b-[1px] ">
            <Text className="font-pregular text-base">Private setting</Text>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between p-3 border-b-[1px] ">
            <Text className="font-pregular text-base">Language</Text>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View>
          <Text className="text-xl p-3 w-[100%] bg-gray-300 text-base font-pmedium">Support</Text>
          <TouchableOpacity className="flex-row justify-between p-3 border-b-[1px] ">
            <Text className="font-pregular text-base">Support center</Text>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between p-3 border-b-[1px] ">
            <Text className="font-pregular text-base">Community Standard</Text>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between p-3 border-b-[1px] ">
            <Text className="font-pregular text-base">Entries App / Policy</Text>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between p-3 border-b-[1px] ">
            <Text className="font-pregular text-base">Introduce</Text>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between p-3 border-b-[1px] ">
            <Text className="font-pregular text-base">Request delete account</Text>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View className="my-5 mx-10">
          <TouchableOpacity className="p-3 bg-red-500 rounded-sm items-center justify-center">
            <Text className="text-white font-pbold">Log out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({});
