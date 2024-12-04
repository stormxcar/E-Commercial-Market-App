import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const UpdateProfile = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="p-5 bg-[#00BDD6] items-center justify-center">
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            className="w-20 h-20 rounded-full object-cover"
          />
        </View>
        <View>
          <View className="flex flex-row p-5 items-center justify-between">
            <Text className="text-lg font-psemibold flex-1">Name</Text>
            <TextInput
              placeholder="Name"
              className="border-b-2 border-gray-300 flex-1"
            />
          </View>
          <View className="flex flex-row p-5 items-center justify-between">
            <Text className="text-lg font-psemibold flex-1">Bio</Text>
            <TextInput
              placeholder="Bio"
              className="border-b-2 border-gray-300 flex-1"
              numberOfLines={4}
              multiline
            />
          </View>
          <View className="flex flex-row p-5 items-center justify-between">
            <Text className="text-lg font-psemibold flex-1">Gender</Text>
            <TextInput
              placeholder="Gender"
              className="border-b-2 border-gray-300 flex-1"
            />
          </View>
          <View className="flex flex-row p-5 items-center justify-between">
            <Text className="text-lg font-psemibold flex-1">Age</Text>
            <TextInput
              placeholder="Age"
              className="border-b-2 border-gray-300 flex-1"
            />
          </View>
          <View className="flex flex-row p-5 items-center justify-between">
            <Text className="text-lg font-psemibold flex-1">Phone number</Text>
            <TextInput
              placeholder="Phone number"
              className="border-b-2 border-gray-300 flex-1"
            />
          </View>
          <View className="flex flex-row p-5 items-center justify-between">
            <Text className="text-lg font-psemibold flex-1">Email</Text>
            <TextInput
              placeholder="Email"
              className="border-b-2 border-gray-300 flex-1 "
            />
          </View>
          <View className="flex flex-row p-5 items-center justify-between">
            <Text className="text-lg font-psemibold">Account linked</Text>
            <AntDesign name="right" size={24} color="black" />
          </View>
          <View className="justify-center items-center my-6">
            <TouchableOpacity className="flex flex-row p-3 rounded-lg items-center justify-center bg-[#00BDD6] w-[60%]">
              <Text className="text-lg font-pbold text-white">Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({});
