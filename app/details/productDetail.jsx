import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React, {useEffect} from "react";
import ProductShowDetail from "../../components/ProductShowDetail";
import { useNavigation, useRoute } from "@react-navigation/native";

const ProductDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { name } = route.params;
  const data = [{ key: "header" }, { key: "content" }];

  useEffect(() => {
    if (name) {
      navigation.setOptions({ title: name });
    }
  }, [name]);

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
