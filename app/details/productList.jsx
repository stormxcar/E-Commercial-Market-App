import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React, { useEffect } from "react";
import ProductShowList from "../../components/ProductShowList";
import HeaderShown from "../../components/headerShown";
import { useNavigation, useRoute } from '@react-navigation/native';

const ProductList = () => {
  const data = [{ key: "header" }, { key: "content" }];

  const navigation = useNavigation();
  const route = useRoute();
  const { title } = route.params;

  useEffect(() => {
    if (title) {
      navigation.setOptions({ title: title });
    }
  },[title])

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
