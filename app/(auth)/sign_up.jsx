import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import image_main from "../../assets/images/logo_details.png";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { CheckBox } from "react-native-elements";
import { API_DATA } from "../../constants/data";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (form.email === "" || form.password === "" || form.username === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    if (form.password !== form.confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
  
    setIsSubmitting(true);
    try {
      const response = await fetch(API_DATA, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: "register",
          user_name: form.username,
          email: form.email,
          password: form.password
        })
      });
  
      const data = await response.json();
      if (data.result === "success") {
        await AsyncStorage.setItem("user_id", String(data.user_id)); // Lưu user_id
        Alert.alert("Success", "Đăng ký thành công");
        router.push("/log_in"); // Điều hướng
      } else {
        Alert.alert("Error", data.message || "Đăng ký thất bại");
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      Alert.alert("Error", "Sign up failed. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  


  return (
    <SafeAreaView className="h-full bg-white px-5 py-10">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="w-full flex-1 flex-col items-center justify-center bg-white gap-4 pt-5">
          <Image source={image_main} className="w-[100px] h-[100px]" />
          <Text className="text-4xl font-pblack text-[#00BDD6]">BKShop</Text>
          <Text className="text-gray-500 font-plight">
            All there, all cheap
          </Text>
        </View>

        <FormField
          title="Username"
          value={form.username}
          placeholder={"yourname"}
          handleChangeText={(e) => setForm({ ...form, username: e })}
          otherStyles="mt-7"
        />
        <FormField
          title="Email"
          value={form.email}
          placeholder={"kha3561@gmail.com"}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-7"
          keyboardType="email-address"
        />
        <FormField
          title="Password"
          placeholder={"**********"}
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles="mt-7"
        />
        <FormField
          title="Confirm password"
          placeholder={"**********"}
          value={form.confirmPassword}
          handleChangeText={(e) => setForm({ ...form, confirmPassword: e })}
          otherStyles="mt-7"
        />

        <CustomButton
          title="Sign up"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />

        <View className="flex justify-center pt-5 flex-row gap-2 flex-wrap">
          <Text className="text-base text-gray-600 font-pregular">
            Already have an account?
          </Text>
          <Link
            href="/log_in"
            className="text-base font-psemibold text-blue-600"
          >
            Login now
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
