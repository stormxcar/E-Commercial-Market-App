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
import { API_DATA } from "../../constants/data";
import { Link } from "expo-router";
import { Modal } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Cart = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [dataCart, setDataCart] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_DATA);
      const data = await res.json();
      // Lọc ra dữ liệu của sheet 'inbox' từ JSON trả về
      setDataCart(data.cart || []);
      // console.log(data.cart);
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

  const handleSelect = (isSelected, item) => {
    if (isSelected) {
      setSelectedItems([...selectedItems, item]);
      setTotalPrice(totalPrice + item.price);
    } else {
      setSelectedItems(selectedItems.filter(selectedItem => selectedItem.id !== item.id));
      setTotalPrice(totalPrice - item.price);
    }
  };
  const handleSelectAll = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      const allPrices = dataCart.map((item) => item.price);
      setSelectedItems(allPrices);
      const total = allPrices.reduce((sum, price) => sum + price, 0);
      setTotalPrice(total);
    } else {
      setSelectedItems([]);
      setTotalPrice(0);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  console.log(selectedItems);

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="py-2 h-[75vh]">
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
              onSelect={(isSelected) => handleSelect(isSelected, item)}
              isChecked={isChecked}
            />
          ))}
        </View>
      </ScrollView>

      <View className="px-2 py-3 w-full border-t-2 mt-3 h-[20vh]">
        <View className="flex-row">
          <View className="flex-row justify-between items-center w-full">
            <Text className="font-psemibold text-base">Voucher</Text>

            <TouchableOpacity
              className="flex flex-row justify-between items-center"
              onPress={toggleModal}
            >
              <Text className="text-base font-pregular my-3 text-gray-400">
                Select voucher or enter code
              </Text>
              <AntDesign name="right" size={20} color="gray" />
            </TouchableOpacity>
          </View>
          {/* <Modal
            isVisible={isModalVisible}
            onBackdropPress={toggleModal}
            className="m-0 justify-end"
          >
            <View className="rounded-t-3xl p-4 w-full items-center">
              <View className="w-full flex justify-between items-center flex-row">
                <Text className="w-full text-base font-psemibold border-b-[1px] border-gray-300 py-3">
                  Product Details
                </Text>
              </View>
              <View className="w-full mt-4">
                <View className="flex flex-row items-center mb-2">
                  <Text className="text-base font-pregular flex-1">Stock</Text>
                  <Text className="flex-1 text-sm font-pregular text-gray-500">
                    2933
                  </Text>
                </View>
                <View className="flex flex-row items-center mb-2">
                  <Text className="text-base font-pregular flex-1">Brand</Text>
                  <Text className="flex-1 text-sm font-pregular text-gray-500">
                    Sido Tech VN
                  </Text>
                </View>
                <View className="flex flex-row items-center mb-2">
                  <Text className="text-base font-pregular flex-1">
                    Warranty
                  </Text>
                  <Text className="flex-1 text-sm font-pregular text-gray-500">
                    12 months
                  </Text>
                </View>
                <View className="flex flex-row items-center mb-2">
                  <Text className="text-base font-pregular flex-1">Status</Text>
                  <Text className="flex-1 text-sm font-pregular text-gray-500">
                    Refund after 30 days
                  </Text>
                </View>

                <View className="flex flex-row items-center mb-2">
                  <Text className="text-base font-pregular flex-1">
                    Type warranty
                  </Text>
                  <Text className="flex-1 text-sm font-pregular text-gray-500">
                    1-1 exchange
                  </Text>
                </View>
                <View className="flex flex-row items-center mb-2">
                  <Text className="text-base font-pregular flex-1">
                    Ship from
                  </Text>
                  <Text className="flex-1 text-sm font-pregular text-gray-500">
                    Ho Chi Minh City
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={toggleModal}
                className="bg-[#00BDD6] p-2 rounded-lg mt-3"
              >
                <Text className="text-sm font-pregular text-white">Done</Text>
              </TouchableOpacity>
            </View>
          </Modal> */}
        </View>
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <CheckBox checked={isChecked} onPress={() => handleSelectAll} />
            <Text>All</Text>
          </View>
          <View className="flex flex-row items-center">
            <Text className="font-pregular text-base">
              Total: ${totalPrice.toFixed(2)}
            </Text>
            <Link href={{ pathname: "/details/Checkout", params: {selectedItems :JSON.stringify(selectedItems) , totalPrice } }} asChild>
            <TouchableOpacity
              className={`flex-1 ${selectedItems.length === 0 ? 'bg-gray-400' : 'bg-[#00bdd6]'} rounded-sm`}
              disabled={selectedItems.length === 0}
            >
              <Text className="font-pregular text-base w-full text-white text-center p-3">
                Buy now
              </Text>
            </TouchableOpacity>
          </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
