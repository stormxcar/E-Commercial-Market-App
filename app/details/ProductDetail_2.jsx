import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView,
  } from "react-native";
  import React from "react";
  import ProductShowDetail_2 from "../../components/ProductShowDetail_2";
  
  const ProductDetail_2 = () => {
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
              return <ProductShowDetail_2 />;
            }
          }}
        />
      </SafeAreaView>
    );
  };
  
  export default ProductDetail_2;
  
  const styles = StyleSheet.create({});
  