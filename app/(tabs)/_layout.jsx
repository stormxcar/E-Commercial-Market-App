import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

// create show tab icon and name
const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Ionicons name={icon} size={20} color={focused ? "#f00" : color} />
      <Text style={{ fontSize: 10, color: focused ? "#f00" : color }}>
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
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
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <TabIcon
                icon="home-outline"
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <TabIcon
                icon="search"
                color={color}
                name="Search"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="favorites"
          options={{
            title: "Favorites",
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <TabIcon
                icon="heart-outline"
                color={color}
                name="Favorites"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="inbox"
          options={{
            title: "Inbox",
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <TabIcon
                icon="mail-outline"
                color={color}
                name="Inbox"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="account"
          options={{
            title: "Account",
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <TabIcon
                icon="person-outline"
                color={color}
                name="Account"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
