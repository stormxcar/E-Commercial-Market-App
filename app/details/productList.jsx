import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductList from "../../components/ProductList";

const productList = () => {
  const data = [{ key: "header" }, { key: "content" }];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          if (item.key === "header") {
            return <HeaderShown title={"Fresh Fruits"} />;
          } else {
            return <ProductList />;
          }
        }}
      />
    </SafeAreaView>
  );
};

export default productList;

const styles = StyleSheet.create({});
