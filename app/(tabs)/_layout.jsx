import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image
} from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import HeaderShown from "../../components/headerShown";

// create show tab icon and name
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
    // /* bố cục không bị phản ứng với bàn phím */
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* cho phép tắt bàn phím khi người dùng ấn ra ngoài nó */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <Tabs
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
                <View className="flex flex-row items-center gap-2 pr-6">
                  <TouchableOpacity>
                    <AntDesign name="shoppingcart" size={30} color="black" />
                  </TouchableOpacity>

                  <View className="">
                    <Image
                      source={{ uri: "https://picsum.photos/200" }}
                      className="border-2 w-10 h-10 rounded-full"
                      width={25}
                      height={25}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              ),
            }}
          >
            <Tabs.Screen
              name="home"
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

            <Tabs.Screen
              name="search"
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

            <Tabs.Screen
              name="favorites"
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

            <Tabs.Screen
              name="inbox"
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

            <Tabs.Screen
              name="account"
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
                    <Text className="font-psemibold text-base">
                      Settings
                    </Text>
                  </View>
                ),
              }}
            />
          </Tabs>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
