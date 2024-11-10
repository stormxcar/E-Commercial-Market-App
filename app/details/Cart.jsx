import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { CheckBox } from "react-native-elements";
import CartProduct from "../../components/CartProduct";

const Cart = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [dataCart, setDataCart] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyx5-e6QF94rs-LLpmDKL_5lHMMOlEddxC1ObmB3AwGlwdez-f0idyz4S7nSHoutjsTOQ/exec"
      );
      const data = await res.json();
      // Lọc ra dữ liệu của sheet 'inbox' từ JSON trả về
      setDataCart(data.cart || []);

      console.log("====================================");
      console.log(data.cart);
      console.log("====================================");
    } catch (error) {
      console.error(error);
      setDataCart([]);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await getData();
    setRefreshing(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView className="py-2 h-[65vh]">
        <View className="">
          {loading && (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color="#00bdd6" />
            </View>
          )}
          {dataCart.map((item) => (
            <CartProduct
              key={item.id}
              name={item.name}
              img={item.img}
              status={item.status}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </View>
      </ScrollView>

      <View className="px-2 py-3 bg-white w-full border-t-2 mt-3 h-[35vh]">
        <View className="flex-row items-center justify-between">
          <Text className="font-psemibold text-base">Voucher</Text>
          <TouchableOpacity>
            <Text className="font-pregular text-gray-400">
              Select or enter code
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <CheckBox
              checked={isChecked}
              onPress={() => setIsChecked(!isChecked)}
            />
            <Text>All</Text>
          </View>
          <View className="flex flex-row items-center">
            <Text className="font-pregular text-base">Total: $0</Text>
            <TouchableOpacity className="py-3 px-10 bg-[#00bdd6] ml-2">
              <Text className="text-base font-pbold text-white">Buy (0)</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
