import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
// import '../src/styles/tailwind.css';
import { Link } from "expo-router";
import image_main from "../assets/images/image_slide_start.png";
import logo from "../assets/images/logo-removebg.png";

export default function App() {
  return (
    <ImageBackground
      source={image_main}
      className="flex-1 items-center flex-col justify-center bg-slate-300"
    >
      <View className="border-solid flex-1 items-center justify-center">
        <Text className="text-4xl uppercase font-pblack text-pink-800 ">
          BKShop
        </Text>
      </View>

      <View className="border-solid w-[80%] flex-1 flex gap-8 justify-center items-center ">

        <TouchableOpacity className="p-3 bg-[#00BDD6] rounded-lg w-full">
          <Link className="text-white uppercase text-center font-psemibold text-xl cursor-pointer" href="./log_in">LOGIN</Link>
        </TouchableOpacity>

        <TouchableOpacity className="border-solid border-4 rounded-lg p-3 border-[#00BDD6] w-full cursor-pointer">
          <Link className="text-[#00BDD6] uppercase text-center text-xl font-psemibold"href="./sign_up">REGISTER</Link>
        </TouchableOpacity>
      </View>

      <View>
        <Link className="text-[#00BDD6] m-12" href="/home">Continue as a guest</Link>
      </View>
    </ImageBackground>
  );
}
