import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import '../src/styles/tailwind.css';
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center flex-col justify-center bg-slate-300">
      <Text className="text-3xl uppercase font-pblack ">
        E-Commercial Market App
      </Text>
      <Link href="/home">Go to home</Link>
    </View>
  );
}
