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
import ProductShowDetail from "../../components/ProductShowDetail";

const ProductDetail = () => {
  const data = [{ key: "header" }, { key: "content" }];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          if (item.key === "header") {
            return <></>;
          } else {
            return <ProductShowDetail />;
          }
        }}
      />
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
