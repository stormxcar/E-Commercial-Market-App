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
import Account from "./account";
import Inbox from "./inbox";
import Favorites from "./favorites";

// import ProductDetail from "../details/productDetail";
// import ProductList from "../details/productList";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    {/* <Stack.Screen
      name="productList"
      component={ProductList}
      options={{ headerShown: true }}
    />
    <Stack.Screen
      name="ProductDetail"
      component={ProductDetail}
      options={{ headerShown: false }}
    /> */}
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
            screenOptions={{
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
            }}
          >
            <Tab.Screen
              name="HomeTab"
              component={HomeStack}
              options={{
                title: "Home",
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
              component={Search}
              options={{
                title: "Search",
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
              component={Favorites}
              options={{
                title: "Favorites",
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
              component={Inbox}
              options={{
                title: "Inbox",
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
              name="Account"
              component={Account}
              options={{
                title: "Account",
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
