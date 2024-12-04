import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import image_main from "../../assets/images/logo_details.png";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { CheckBox } from "react-native-elements";
import { router } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import { API_DATA } from "../../constants/data";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LogIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const submit = async (form) => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    setIsSubmitting(true);

    try {
      console.log("Sending data:", {
        action: "login",
        email: form.email,
        password: form.password,
      });

      const response = await fetch(API_DATA, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "login", // Đảm bảo gửi đúng hành động tới API
          email: form.email,
          password: form.password,
        }),
      });

      const data = await response.json();
      setIsSubmitting(false);

      // console.log("Response data:", data); // Kiểm tra phản hồi từ API

      if (data.result === "success") {
        // Chuyển đổi user_id thành chuỗi trước khi lưu
        await AsyncStorage.setItem("user_id", String(data.user.id));

        Alert.alert("Success", "Đăng nhập thành công");
        router.push("/home"); // Điều hướng tới trang home
      } else {
        Alert.alert("Error", data.message || "Đăng nhập thất bại");
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error("Error:", error);
      Alert.alert("Error", "Có lỗi xảy ra, vui lòng thử lại sau.");
    }
  };

  return (
    <SafeAreaView className="h-full bg-white px-5">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="w-full flex-1 flex-col items-center justify-center bg-white gap-2">
          <TouchableOpacity className="w-full items-center pt-20">
            <Image
              resizeMode="cover"
              source={image_main}
              className="w-[100px] h-[100px]"
            />
          </TouchableOpacity>

          <Text className="text-4xl font-pblack text-[#00BDD6]">BKShop</Text>
          <Text className="text-gray-500 font-plight">
            All there, all cheap
          </Text>
        </View>

        <FormField
          title="Email"
          value={form.email}
          placeholder={"kha3561@gmail.com"}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-7"
          keyboardType="email-address"
          // autoCapitalize="none"
          // initialValue="nguyen23@gmail.com"
        />
        <FormField
          title="Password"
          placeholder={"**********"}
          // secureTextEntry={true}
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles="mt-7"
          
        />

        <View className="items-center justify-start flex-row">
          <CheckBox
            checked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
          />
          <Text className="font-pmedium">Remember me</Text>
        </View>

        <CustomButton
          title="Sign In"
          handlePress={() => submit(form)}
          containerStyles="mt-1"
          isLoading={isSubmitting}
        />

        <View className="flex-1 items-center justify-center pt-5">
          <View className="relative w-full items-center">
            <View className="absolute w-full h-[1px] bg-gray-200 top-1/2" />
            <Text className="font-plight bg-white px-2">OR</Text>
          </View>
        </View>

        <View className="w-full flex-1 flex-row items-center justify-between">
          <CustomButton
            handlePress={submit}
            containerStyles="mt-7 flex-1 mr-2 bg-white border-[1px] border-gray-200"
            isLoading={isSubmitting}
          >
            <Icon name="facebook" size={24} color="blue" />
          </CustomButton>
          <CustomButton
            handlePress={submit}
            containerStyles="mt-7 flex-1 mr-2 bg-white border-[1px] border-red-200"
            isLoading={isSubmitting}
          >
            <Icon name="google" size={24} color="red" />
          </CustomButton>

          <CustomButton
            handlePress={submit}
            containerStyles="mt-7 flex-1 bg-white border-[1px] border-black"
            isLoading={isSubmitting}
          >
            <Icon name="apple" size={24} color="black" />
          </CustomButton>
        </View>

        <View className="flex justify-center pt-5 pb-8 flex-row gap-2">
          <Text className="text-base text-gray-600 font-pregular">
            Don't have an account?
          </Text>
          <Link
            href="/sign_up"
            className="text-base font-psemibold text-blue-600"
          >
            Signup
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogIn;
