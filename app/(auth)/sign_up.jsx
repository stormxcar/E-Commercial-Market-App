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
import { Link } from "expo-router";
import { CheckBox } from "react-native-elements";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    if (form.email === "" || form.password === "" || form.username === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    else {
      // Gửi request lên server
      fetch('https://6457b6671a4c152cf9887b69.mockapi.io/api/vd1/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      .then(response => {
        if (!response.ok) {
          // Xử lý lỗi
        }
        return response.json();
      })
      .then(data => {
        // Xử lý dữ liệu trả về từ server
        console.log('Đăng ký thành công:', data);
        alert("Đăng ký thành công");
      })
      .catch(error => {
        console.error('Lỗi khi đăng ký:', error);
      });
    }
    // setIsSubmitting(true);
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
