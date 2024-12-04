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
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem("user_id");
        setUserId(storedUserId); // Cập nhật userId vào state
      } catch (error) {
        console.error("Error checking user_id:", error);
      }
    };

    checkLogin();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {!userId ? (
          <View className="p-3 bg-white rounded-md">
            <Text className="text-center font-psemibold text-lg">
              Please login to see your ordered
            </Text>
            <TouchableOpacity onPress={() => router.push("/log_in")}>
              <Text className="text-center font-psemibold text-lg text-[#00BDD6]">
                Login now
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
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
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BuyBack;

const styles = StyleSheet.create({});
