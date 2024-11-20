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
import { Link } from "expo-router";

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

  return (
    <SafeAreaView className="flex-1">
      <View style={styles.overlayContainer}>
        <View className="justify-center items-center p-2 mb-40">
          <Image
            source={require("../assets/images/logo_main.png")}
            className="w-20 h-20 object-cover"
          />
          <Text className="text-3xl font-pbold uppercase text-[#00bdd6] text-center ">BKShop</Text>
        </View>

        <View className="flex-col justify-center items-center w-full mt-40">
          <TouchableOpacity className="p-4 w-[80%] bg-[#00BDD6] rounded-lg shadow-lg">
            <Link className="text-white uppercase text-center font-psemibold text-base" href="./log_in">
              LOGIN
            </Link>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row justify-center items-center w-[80%] border-2 border-[#00BDD6] p-3 mt-4 rounded-lg shadow-sm">
            <Link className="text-white uppercase text-center font-psemibold text-base" href="./sign_up">
              REGISTER
            </Link>
          </TouchableOpacity>
        </View>

        <View className="absolute bottom-0 left-0 right-0 p-5">
          <Link className="text-[#00BDD6] text-center" href="/home">
            Continue as a guest
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
          <ImageBackground source={item.source} style={styles.imageBackground} />
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
  imageBackground: {
    width: width,
    height: height,
  },
});