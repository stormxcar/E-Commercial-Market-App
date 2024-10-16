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
} from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./home";
import Search from "./search";
import Favorites from "./favorites";
import Inbox from "./inbox";
import Account from "./account";
import ProductList from "../details/ProductList";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Tạo HomeStack với Stack.Navigator
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="home"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProductList"
      component={ProductList}
      options={{ headerShown: true, title: "Product List" }}
    />
  </Stack.Navigator>
);

// Tạo SearchStack với Stack.Navigator
const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="search"
      component={Search}
      options={{ headerShown: false }} // Không hiện header khi ở trang Search
    />
    {/* Thêm các màn hình khác nếu cần */}
  </Stack.Navigator>
);

// Tạo FavoritesStack với Stack.Navigator
const FavoritesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="favorites"
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
      name="inbox"
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
      name="account"
      component={Account}
      options={{ headerShown: false }} // Không hiện header khi ở trang Account
    />
    {/* Thêm các màn hình khác nếu cần */}
  </Stack.Navigator>
);

const TabIcon = ({ icon, color, name, focused, size }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <AntDesign name={icon} size={size} color={focused ? "#f00" : color} />
      <Text style={{ fontSize: 10, color: focused ? "#f00" : color }}>
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarShowLabel: false,
              tabBarActiveTintColor: "#FFA001",
              tabBarInactiveTintColor: "#CDCDE0",
              tabBarStyle: {
                backgroundColor: "#fff",
                borderTopWidth: 1,
                borderTopColor: "lightgray",
                height: 84,
              },
              headerRight: () => (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 10,
                  }}
                >
                  <TouchableOpacity style={{ marginRight: 10 }}>
                    <AntDesign name="shoppingcart" size={30} color="black" />
                  </TouchableOpacity>
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
                </View>
              ),
            })}
          >
            <Tab.Screen
              name="home"
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
              name="search"
              component={SearchStack}
              options={{
                tarBarLabel: "search",
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
              name="favorites"
              component={FavoritesStack}
              options={{
                tarBarLabel: "favorites",
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
              name="inbox"
              component={InboxStack}
              options={{
                tarBarLabel: "inbox",
                tabBarIcon: ({ color, size, focused }) => (
                  <TabIcon
                    icon="message1"
                    color={color}
                    name="Inbox"
                    focused={focused}
                    size={28}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="account"
              component={AccountStack}
              options={{
                tarBarLabel: "account",
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
                    <TouchableOpacity style={{ marginRight: 10 }}>
                      <AntDesign name="setting" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: "600", fontSize: 16 }}>
                      Settings
                    </Text>
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
