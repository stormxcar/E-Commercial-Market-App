import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import ProductShowDetail_2 from "../../components/ProductShowDetail_2";
import { useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";

const ProductDetail_2 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id, img, name, countReviews, price, status } = route.params;
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
            return (
              <ProductShowDetail_2
                product={{ id, img, name, countReviews, price, status }}
              />
            );
          }
        }}
      />
    </SafeAreaView>
  );
};

export default ProductDetail_2;

const styles = StyleSheet.create({});
