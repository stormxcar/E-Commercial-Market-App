import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import CardList from "../../components/CardList";
import { API_DATA } from "../../constants/data";

const BuyBack = () => {
  const [dataProductCard, setDataProductCard] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  
  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_DATA);
      const data = await res.json();
      setDataProductCard(data.product || []);
    } catch (error) {
      console.log(error);
      setDataProductCard([]);
    } finally {
      setLoading(false);
    }
  };
  const onRefresh = async () => {
    setRefreshing(true);
    setLoading(true);
    await getData(sheetName);
    setRefreshing(false);
    setLoading(false);
  };

  // Fetch data when the component mounts or when `sheetName` changes
  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View className="py-4 flex flex-row flex-wrap justify-between">
          {Array.isArray(dataProductCard) &&
            dataProductCard.slice(0, visibleProducts).map((item) => (
              <View className="w-[47%] m-1" key={item.id}>
                <CardList
                  containerStyles={"w-full"}
                  imageStyles={"w-full h-[150px]"}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                />
              </View>
            ))}
          {loading && (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color="#00bdd6" />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BuyBack;

const styles = StyleSheet.create({});
