import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import ProductShowList from "../../components/ProductShowList";
import HeaderShown from "../../components/headerShown";

const ProductList = () => {
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
            return <ProductShowList />;
          }
        }}
      />
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
