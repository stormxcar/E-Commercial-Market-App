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

const LogIn = () => {
  const [form, setForm] = useState({
    email: " ",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const submit = () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    // setIsSubmitting(true);
  };
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView>
        <View className="w-full flex-1 flex-col items-center justify-center bg-white gap-4">
          <Image source={image_main} className="w-[100px] h-[100px]" />
          <Text className="text-4xl font-pblack text-[#00BDD6]">BKShop</Text>
          <Text>All there, all cheap</Text>
        </View>

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

        <View className="flex justify-start items-center flex-row">
          <CheckBox
            checked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
          />
          <Text className="font-pmedium">Remember me</Text>
        </View>

        <CustomButton
          title="Sign In"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />

        <View className="flex-1 items-center justify-center pt-5">
          <View className="relative w-full items-center">
            <View className="absolute w-full h-0.5 bg-gray-500 top-1/2" />
            <Text className="font-plight bg-white px-2">OR</Text>
          </View>
        </View>

        <View className="w-full flex-1 flex-row items-center justify-between">
          <CustomButton
            title="Facebook"
            handlePress={submit}
            containerStyles="mt-7 flex-1 mr-2"
            isLoading={isSubmitting}
          />
          <CustomButton
            title="Google"
            handlePress={submit}
            containerStyles="mt-7 flex-1 mr-2"
            isLoading={isSubmitting}
          />
          <CustomButton
            title="Twitter"
            handlePress={submit}
            containerStyles="mt-7 flex-1"
            isLoading={isSubmitting}
          />
        </View>

        <View className="flex justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-gray-600 font-pregular">
            Don't have an account?
          </Text>
          <Link
            href="/sign_up"
            className="text-lg font-psemibold text-secondary"
          >
            Signup
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogIn;
