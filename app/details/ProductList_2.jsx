import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import ProductShowList_2 from "../../components/ProductShowList_2";
import SearchBox from "../../components/SearchBox";

const ProductList_2 = () => {
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
            return (
              <>
                <SearchBox />
                <ProductShowList_2 />
              </>
            );
          }
        }}
      />
    </SafeAreaView>
  );
};

export default ProductList_2;

const styles = StyleSheet.create({});
