import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import HeaderShown from "../../components/headerShown";
import ProductDetail from "../../components/ProductDetail";

const productDetail = () => {
  const data = [{ key: "header" }, { key: "content" }];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          if (item.key === "header") {
            return <HeaderShown title={"Headphone"} />;
          } else {
            return <ProductDetail />;
          }
        }}
      />
    </SafeAreaView>
  );
};

export default productDetail;

const styles = StyleSheet.create({});
