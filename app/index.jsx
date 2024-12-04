import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Link, router } from "expo-router";
import Svg, { Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");

export default function App() {
  const images = [
    { id: 1, source: require("../assets/images/image_slide_start.png") },
    { id: 2, source: require("../assets/images/image_slide_start_1.png") },
    { id: 3, source: require("../assets/images/image_slide_start_2.png") },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: currentIndex,
        animated: true,
      });
    }
  }, [currentIndex]);

  // Xóa user_id khi vào trang
  useEffect(() => {
    const clearUserData = async () => {
      try {
        await AsyncStorage.removeItem("user_id");
        console.log("User ID cleared successfully");
      } catch (error) {
        console.error("Error clearing user ID:", error);
      }
    };

    clearUserData();
  }, []);

  // Xử lý Continue as guest
  const handleContinueAsGuest = async () => {
    try {
      await AsyncStorage.removeItem("user_id");
      console.log("User ID cleared for guest");
      router.push("/home");
    } catch (error) {
      console.error("Error handling guest continue:", error);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View style={styles.overlayContainer}>
        <Svg height="100%" width="100%" style={styles.svgContainer}>
          <Defs>
            <LinearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0%" stopColor="transparent" stopOpacity="0" />
              <Stop offset="100%" stopColor="rgba(0,0,0,0.8)" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" />
        </Svg>
        <View className="justify-center items-center p-2 mb-40">
          <Image
            source={require("../assets/images/logo_main.png")}
            className="w-20 h-20 object-cover"
          />
          <Text className="text-3xl font-pbold uppercase text-[#00bdd6] text-center ">
            BKShop
          </Text>
        </View>

        <View className="flex-col justify-center items-center w-full mt-40">
          <TouchableOpacity className="p-4 w-[80%] bg-[#00BDD6] rounded-lg shadow-lg">
            <Link
              className="text-white uppercase text-center font-psemibold text-base"
              href="./log_in"
            >
              LOGIN
            </Link>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row justify-center items-center w-[80%] border-2 border-[#00BDD6] p-3 mt-4 rounded-lg shadow-sm">
            <Link
              className="text-white uppercase text-center font-psemibold text-base"
              href="./sign_up"
            >
              REGISTER
            </Link>
          </TouchableOpacity>
        </View>

        <View className="absolute bottom-0 left-0 right-0 p-5">
          <Link href="/home" asChild>
            <TouchableOpacity className="items-center" onPress={handleContinueAsGuest}>
              <Text className="text-[#00BDD6] items-center">Continue as a guest</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ImageBackground
            source={item.source}
            style={styles.imageBackground}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  overlayContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 200, // Adjust the height as needed
  },
  svgContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageBackground: {
    width: width,
    height: height,
  },
});
