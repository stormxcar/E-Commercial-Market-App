import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import SearchBox from "../../components/SearchBox";

const Inbox = () => {
  return (
    <SafeAreaView>
      <SearchBox />
      <View>{/* show list notify card */}</View>
      <View>
        <Text>Messages</Text>
        <View>
          <FlatList />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Inbox;

const styles = StyleSheet.create({});
