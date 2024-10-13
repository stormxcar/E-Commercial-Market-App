import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import HeaderShown from "../../components/headerShown";
import ProductDetail from "../../components/ProductDetail";

const productDetail = () => {
  return (
    <SafeAreaView>
      <HeaderShown title={"Headphone"}/>
      <ScrollView>
        <ProductDetail />
      </ScrollView>
    </SafeAreaView>
  );
};

export default productDetail;

const styles = StyleSheet.create({});
