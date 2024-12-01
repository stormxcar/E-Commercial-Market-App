import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
  AppState,
  Alert,
} from "react-native";
import React, { useState, useEffect, useCallback, useRef } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Home from "./home";
import Search from "./search";
import Favorites from "./favorites";
import Inbox from "./inbox";
import Account from "./account";
import ProductList from "../details/ProductList";
import ProductList_2 from "../details/ProductList_2";
import ProductDetail_2 from "../details/ProductDetail_2";
import Checkout from "../details/Checkout";
import Cart from "../details/Cart";
import ChatScreen from "../details/ChatScreen";
import SearchScreen from "../(tabs)/search";
import { Link } from "expo-router";
import FilterProduct from "../details/FilterProduct";
import { API_DATA } from "../../constants/data";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Tạo HomeStack với Stack.Navigator
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProductList"
      component={ProductList}
      options={{ headerShown: true, title: "Product List" }}
    />
    <Stack.Screen
      name="ProductList_2"
      component={ProductList_2}
      options={{ headerShown: true, title: "Product List" }}
    />
    <Stack.Screen
      name="ProductDetail_2"
      component={ProductDetail_2}
      options={{ headerShown: false, title: "Product Detail 2" }}
    />
    <Stack.Screen
      name="Checkout"
      component={Checkout}
      options={{ headerShown: false, title: "Checkout" }}
    />
    <Stack.Screen
      name="Account"
      component={Account}
      options={{ headerShown: false, title: "Account" }}
    />
    <Stack.Screen
      name="Cart"
      component={Cart}
      options={{ headerShown: false, title: "Cart" }}
    />
    <Stack.Screen
      name="ChatScreen"
      component={ChatScreen}
      options={{ headerShown: false, title: "Chat" }}
    />
    <Stack.Screen
      name="SearchScreen"
      component={SearchScreen}
      options={{ headerShown: false, title: "Search" }}
    />
  </Stack.Navigator>
);

// Tạo SearchStack với Stack.Navigator
const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SearchScreen"
      component={Search}
      options={{ headerShown: false }} // Không hiện header khi ở trang Search
    />
    <Stack.Screen
      name="FilterProduct"
      component={FilterProduct}
      options={{ headerShown: false }} // Không hiện header khi ở trang FilterProduct
    />
    {/* Thêm các màn hình khác nếu cần */}
  </Stack.Navigator>
);

// Tạo FavoritesStack với Stack.Navigator
const FavoritesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="FavoritesScreen"
      component={Favorites}
      options={{ headerShown: false }} // Không hiện header khi ở trang Favorites
    />
    {/* Thêm các màn hình khác nếu cần */}
  </Stack.Navigator>
);

// Tạo InboxStack với Stack.Navigator
const InboxStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="InboxScreen"
      component={Inbox}
      options={{ headerShown: false }} // Không hiện header khi ở trang Inbox
    />
    {/* Thêm các màn hình khác nếu cần */}
  </Stack.Navigator>
);

// Tạo AccountStack với Stack.Navigator
const AccountStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="AccountScreen"
      component={Account}
      options={{ headerShown: false }} // Không hiện header khi ở trang Account
    />
    {/* Thêm các màn hình khác nếu cần */}
  </Stack.Navigator>
);

const TabIcon = ({ icon, color, name, focused, size, badgeCount }) => {
  const checkLogin = async () => {
    try {
      const userId = await AsyncStorage.getItem("user_id");

      if (userId) {
        router.push("/details/Cart"); // Điều hướng tới trang giỏ hàng
      } else {
        Alert.alert("Thông báo", "Bạn cần đăng nhập.");
        router.push("/log_in"); // Điều hướng tới trang đăng nhập
      }
    } catch (error) {
      console.error("Error checking user_id:", error);
      Alert.alert("Lỗi", "Không thể xác thực người dùng. Vui lòng thử lại.");
    }
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        width: 80,
        height: "auto",
      }}
    >
      <AntDesign name={icon} size={size} color={focused ? "#00bdd6" : color} />
      {badgeCount > 0 && (
        <View className="absolute top-[-10px] right-[19px] bg-[#0bbdd6] w-4 h-4 rounded-full flex items-center justify-center">
          <Text className="text-white text-xs text-center">{badgeCount}</Text>
        </View>
      )}
      <Text
        style={{
          fontSize: 10,
          fontWeight: "600",
          color: focused ? "#00bdd6" : color,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const HeaderRight = () => {
  const navigation = useNavigation(); // Use the useNavigation hook

  const [cartQuantity, setCartQuantity] = useState(0);
  const [countNotification, setCountNotification] = useState(0);

  useEffect(() => {
    const fetchDataCart = async () => {
      try {
        const userId = await AsyncStorage.getItem("user_id");

        if (userId) {
          const response = await fetch(API_DATA);
          const data = await response.json();

          // Lọc các sản phẩm theo user_id
          const userProducts = data.productUser.filter(
            item => item.user_id === parseInt(userId)
          );

          // Đếm số lượng sản phẩm của user
          setCartQuantity(userProducts.length);

         
        } else {
          setCartQuantity(0);
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
        setCartQuantity(0);
      }
    };

    fetchDataCart();

    // Thêm listener để cập nhật realtime
    const interval = setInterval(fetchDataCart, 5000); // Cập nhật mỗi 5 giây

    return () => clearInterval(interval);
  }, []);

  const checkLogin = async () => {
    try {
      const userId = await AsyncStorage.getItem("user_id");

      if (userId) {
        router.push({
          pathname: "/details/Cart",
          params: {
            title: "Cart",
          },
        });
      } else {
        Alert.alert("Notification", "Please login to continue shopping", [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Login",
            onPress: () => router.push("/log_in"),
          },
        ]);
      }
    } catch (error) {
      console.error("Error checking user_id:", error);
      Alert.alert("Lỗi", "Không thể xác thực người dùng. Vui lòng thử lại.");
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
      }}
    >
      <View className="mr-2">
        <TouchableOpacity onPress={checkLogin}>
          <MaterialIcons name="notifications-none" size={32} color="black" />
        </TouchableOpacity>
        <Text
          className={` ${
            countNotification > 0 ? "bg-[#0bbdd6] text-white" : "hidden"
          } min-w-full rounded-full text-center absolute top-[-5px] right-[-10px] `}
        >
          {countNotification >= 1 ? countNotification : null}
        </Text>
      </View>

      <View className="mr-2">
        {/* <Link
          href={{ pathname: "/details/Cart", params: { title: "Cart" } }}
          asChild
        > */}
        <TouchableOpacity
          // onPress={() => router.push("/details/Cart")}
          onPress={checkLogin}
          style={{ marginRight: 10 }}
        >
          {cartQuantity > 0 ? (
            <AntDesign name="shoppingcart" size={30} color="#00bdd6" />
          ) : (
            <AntDesign name="shoppingcart" size={30} color="black" />
          )}
        </TouchableOpacity>
        {/* </Link> */}
        <Text
          className={` ${
            cartQuantity > 0 ? "bg-[#0bbdd6] text-white" : "hidden"
          }  w-5 h-5 rounded-full text-center absolute top-[-5px] right-[0px] `}
        >
          {cartQuantity >= 1 ? cartQuantity : null}
        </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Account")}>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={{
            borderWidth: 2,
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const TabsLayout = () => {
  const [inboxQuantity, setInboxQuantity] = useState(0);

  useEffect(() => {
    const fetchDataInbox = async () => {
      try {
        const userId = await AsyncStorage.getItem("user_id");

        if (userId) {
          // Nếu đã đăng nhập, gọi API để lấy dữ liệu inbox
          const res = await fetch(API_DATA);
          const data = await res.json();

          // Lọc inbox theo user_id
          // const userInbox = data.inbox.filter(
          //   (item) => item.user_id === userId
          // );

          // Cập nhật số lượng inbox
          // setInboxQuantity(userInbox.length);
          setInboxQuantity(data.inbox.length);
        } else {
          setInboxQuantity(0); // Không hiển thị nếu chưa đăng nhập
        }
      } catch (error) {
        console.error("Error fetching inbox data:", error);
      }
    };

    fetchDataInbox();
  }, [API_DATA]);

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1 flex flex-row">
          <Tab.Navigator
            screenOptions={() => ({
              tabBarShowLabel: false,

              tabBarActiveTintColor: "#FFA001",
              tabBarInactiveTintColor: "#CDCDE0",
              tabBarStyle: {
                backgroundColor: "#fff",
                borderTopWidth: 1,
                borderTopColor: "lightgray",
                height: 80,
                paddingTop: 20,
                marginTop: 0,
                flexDirection: "row",
                justifyContent: "space-between",
              },

              headerRight: () => <HeaderRight />,
            })}
          >
            <Tab.Screen
              name="Home"
              component={HomeStack}
              options={{
                tarBarLabel: "home",
                tabBarIcon: ({ color, size, focused }) => (
                  <TabIcon
                    icon="home"
                    color={color}
                    name="Home"
                    focused={focused}
                    size={28}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Search"
              component={SearchStack}
              options={{
                tarBarLabel: "Search",
                tabBarIcon: ({ color, size, focused }) => (
                  <TabIcon
                    icon="search1"
                    color={color}
                    name="Search"
                    focused={focused}
                    size={28}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Favorites"
              component={FavoritesStack}
              options={{
                tarBarLabel: "Favorites",
                tabBarIcon: ({ color, size, focused }) => (
                  <TabIcon
                    icon="hearto"
                    color={color}
                    name="Favorites"
                    focused={focused}
                    size={28}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Inbox"
              component={InboxStack}
              options={{
                tarBarLabel: "Inbox",
                tabBarIcon: ({ color, size, focused }) => (
                  <TabIcon
                    icon="message1"
                    color={color}
                    name="Inbox"
                    focused={focused}
                    size={28}
                    badgeCount={inboxQuantity}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Account"
              component={AccountStack}
              options={{
                tarBarLabel: "Account",
                tabBarIcon: ({ color, size, focused }) => (
                  <TabIcon
                    icon="user"
                    color={color}
                    name="Account"
                    focused={focused}
                    size={28}
                  />
                ),
                headerRight: () => (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginRight: 10,
                    }}
                  >
                    <Link
                      href={{
                        pathname: "/details/Settings",
                        params: { title: "Settings" },
                      }}
                      asChild
                    >
                      <TouchableOpacity>
                        <AntDesign name="setting" size={24} color="black" />
                      </TouchableOpacity>
                    </Link>
                  </View>
                ),
              }}
            />
          </Tab.Navigator>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
