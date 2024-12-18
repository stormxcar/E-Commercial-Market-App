import { View, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
// import '../src/styles/tailwind.css';
import { useFonts } from "expo-font";
import AntDesign from "@expo/vector-icons/AntDesign";
// import Toast from "react-native-toast-message";
import Cart from "../app/details/Cart";
import AsyncStorage from "@react-native-async-storage/async-storage";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  useEffect(() => {
    const clearUserId = async () => {
      await AsyncStorage.removeItem("user_id");
      console.log("user_id cleared on app load");
    };

    clearUserId();
  }, []);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="details" options={{ headerShown: false }} />
      <Stack.Screen
        name="details/ProductList"
        options={{
          title: "Product list",
          headerRight: () => (
            <View className="flex flex-row items-center gap-2">
              <TouchableOpacity>
                <AntDesign name="shoppingcart" size={30} color="black" />
              </TouchableOpacity>
              <View>
                <Image
                  source={{ uri: "https://picsum.photos/200" }}
                  className="border-2 w-10 h-10 rounded-full"
                  width={30}
                  height={30}
                  resizeMode="contain"
                />
              </View>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="details/productDetail"
        options={{
          title: "Detail",
          headerRight: () => (
            <View className="flex flex-row items-center gap-2">
              <TouchableOpacity>
                <AntDesign name="shoppingcart" size={30} color="black" />
              </TouchableOpacity>
              <View>
                <Image
                  source={{ uri: "https://picsum.photos/200" }}
                  className="border-2 w-10 h-10 rounded-full"
                  width={30}
                  height={30}
                  resizeMode="contain"
                />
              </View>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="details/ProductDetail_2"
        options={{
          title: "Detail",
          headerRight: () => (
            <View className="flex flex-row items-center gap-2">
              <TouchableOpacity>
                <AntDesign name="shoppingcart" size={30} color="black" />
              </TouchableOpacity>
              <View>
                <Image
                  source={{ uri: "https://picsum.photos/200" }}
                  className="border-2 w-10 h-10 rounded-full"
                  width={30}
                  height={30}
                  resizeMode="contain"
                />
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen name="(tabs)/search" options={{ headerShown: false }} />
      <Stack.Screen
        name="Cart"
        options={{ headerShown: false, title: "Cart" }}
      />
    </Stack>
  );
};

export default RootLayout;
