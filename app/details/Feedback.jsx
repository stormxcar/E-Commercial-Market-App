import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  Image,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import * as ImagePicker from "expo-image-picker";

const Feedback = () => {
  const dataRating = [
    {
      id: 1,
      name: "Service",
      icon: "star",
      check: false,
    },
    {
      id: 2,
      name: "Quantity",
      icon: "star",
      check: false,
    },
    {
      id: 3,
      name: "Payment",
      icon: "star",
      check: true,
    },
    {
      id: 4,
      name: "Delivery",
      icon: "star",
      check: false,
    },
    {
      id: 5,
      name: "Promotion",
      icon: "star",
      check: false,
    },
    {
      id: 6,
      name: "Gift",
      icon: "star",
      check: false,
    },
  ];

  const [images, setImages] = useState([]);
  const [feedback, setFeedback] = useState("");

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true, // Cho phép chọn nhiều ảnh
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImages([...images, ...result.assets.map((asset) => asset.uri)]);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="p-5">
          <View className="flex flex-row items-center justify-center my-3 gap-2">
            <Entypo name="emoji-sad" size={40} color="black" />
            <Entypo name="emoji-neutral" size={40} color="black" />
            <Entypo name="emoji-happy" size={40} color="black" />
          </View>
          <View className="flex flex-row flex-wrap justify-center">
            {dataRating.map((item) => (
              <View
                key={item.id}
                className="flex flex-row items-center px-3 py-2 border-2 rounded-full m-2"
              >
                <Text>{item.name}</Text>
                <AntDesign name={item.icon} size={24} color="black" />
              </View>
            ))}
          </View>
          <View className="my-3">
            <Text className="text-base font-pmedium">
              Care to share more opinion ?
            </Text>
            <TextInput
              className="border-[1px] p-3 rounded-sm"
              placeholder="Type your feedbacks"
              multiline={true}
              numberOfLines={4}
              value={feedback}
              onChangeText={(text) => setFeedback(text)}
            />
          </View>
          <View className="my-3">
            <Text className="text-base font-pmedium">Upload images</Text>
            <View>
              <TouchableOpacity
                className="w-20 h-20 rounded-sm flex items-center justify-center bg-gray-200 border-2 mt-2"
                onPress={pickImage}
              >
                <AntDesign name="plus" size={24} color="black" />
              </TouchableOpacity>
              <View className="flex flex-row flex-wrap mt-2">
                {images
                  ? images.map((uri, index) => (
                      <View className="mr-2">
                        <Image
                          key={index}
                          source={{ uri }}
                          className="w-20 h-20 rounded-sm my-2"
                        />
                        <TouchableOpacity className="absolute top-0 right-[-5] bg-white rounded-full">
                          <AntDesign name="closecircle" size={20} color="red" />
                        </TouchableOpacity>
                      </View>
                    ))
                  : images}
              </View>
            </View>
          </View>
          <View className="my-3">
            <Text>Rating</Text>
            <View className="flex flex-row items-center justify-center">
              <AntDesign name="star" size={24} color="black" />
              <AntDesign name="star" size={24} color="black" />
              <AntDesign name="star" size={24} color="black" />
              <AntDesign name="star" size={24} color="black" />
              <AntDesign name="star" size={24} color="black" />
            </View>
          </View>
          <View className="mt-3">
            <TouchableOpacity className="w-full bg-[#00BDD6] p-3 rounded-sm">
              <Text className="text-center text-white font-pmedium">
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feedback;

const styles = StyleSheet.create({});
