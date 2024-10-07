import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';

// create show tab icon and name
const TabIcon = ({ icon, color, name, focused ,size}) => {
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
                icon="home"
                color={color}
                name="Home"
                focused={focused}
                size={30}
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
                icon="search1"
                color={color}
                name="Search"
                focused={focused}
                size={30}
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
                icon="hearto"
                color={color}
                name="Favorites"
                focused={focused}
                size={30}
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
                icon="message1"
                color={color}
                name="Inbox"
                focused={focused}
                size={30}
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
                icon="user"
                color={color}
                name="Account"
                focused={focused}
                size={30}
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
