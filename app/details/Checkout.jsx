import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useRef, useEffect, forwardRef } from "react";
import CardCheckout from "../../components/CardCheckout";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import { useRoute, useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import Modal from "react-native-modal";
import MapView, { Marker } from "react-native-maps";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Checkout = () => {
  const navigation = useNavigation();
  const router = useRoute();
  const { title } = router.params;
  const { selectedItems, totalPrice } = router.params;
  const items = JSON.parse(selectedItems);

  console.log("====================================");
  console.log("items", items);
  console.log("====================================");

  const [userId, setUserId] = useState(null);

  const itemFromProductDetail = JSON.parse(selectedItems);

  console.log("====================================");
  console.log("itemFromProductDetail", itemFromProductDetail);
  console.log("====================================");

  const getData = async () => {
    try {
      const storedUserId = await AsyncStorage.getItem("user_id");
      setUserId(storedUserId);
    } catch (error) {
      console.error("Error fetching user ID:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // console.log('====================================');
  // console.log('items', items);
  // console.log('====================================');

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  if (!items) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>No items selected</Text>
      </SafeAreaView>
    );
  }

  // const [address, setAddress] = useState("");
  // const [addressInfo, setAddressInfo] = useState(null);
  const API_KEY = "d6e4c6c8f83b450383f10b5fa02cb5cb";

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const inputRef = useRef(null);

  const fetchSuggestions = async (text) => {
    if (!text) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        // `https://api.opencagedata.com/geocode/v1/json?q=${text}&key=${API_KEY}&limit=5`
        `https://api.opencagedata.com/geocode/v1/json?q=${text}&key=${API_KEY}`
      );
      const data = await response.json();

      console.log(data);

      if (data && data.results) {
        setSuggestions(
          data.results.map((result, index) => ({
            key: index.toString(),
            formatted: result.formatted,
            details: result.components,
            geometry: result.geometry,
          }))
        );
      }
    } catch (error) {
      console.error("Error fetching address suggestions:", error);
    }
  };

  const handleSelectSuggestion = (selected) => {
    const truncatedText =
      selected.formatted.length > 30
        ? selected.formatted.slice(0, 30) + "..."
        : selected.formatted;
    setQuery(truncatedText);
    setSuggestions([]);
    setSelectedLocation(selected.geometry);
    setRegion({
      latitude: selected.geometry.lat,
      longitude: selected.geometry.lng,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
    console.log("Selected Address Details:", selected.details);
  };

  // Log the selected items to verify
  const data = [{ key: "header" }, { key: "content" }];
  useEffect(() => {
    if (title) {
      navigation.setOptions({ title: title });
    }
  }, [title]);

  // Tạo component Toast mới sử dụng React.forwardRef
  const ForwardedToast = forwardRef((props, ref) => (
    <Toast {...props} ref={ref} />
  ));

  const [voucherCode, setVoucherCode] = useState("");
  const handleApplyVoucher = ({ code }) => {
    if (code === "123456") {
      Toast.show({
        type: "success",
        text1: "Congratulations!",
        text2: "Voucher code applied successfully",
      });
    } else {
      Toast.show({
        type: "error",
        text1: "Voucher code not valid",
        text2: "Please try again",
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ScrollView> */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          if (item.key === "header") {
            return <></>;
          } else {
            return (
              <ScrollView className="px-5 py-5">
                <View className="my-3">
                  <Text className="font-pmedium text-base">Address</Text>
                  <View className="flex-row items-center justify-between">
                    <TextInput
                      ref={inputRef}
                      className="border-2 font-pregular rounded-md p-3 flex-1 mr-2"
                      value={query}
                      onChangeText={(text) => {
                        const truncatedText =
                          text.length > 30 ? text.slice(0, 30) + "..." : text;
                        setQuery(truncatedText);
                        fetchSuggestions(text);
                      }}
                      placeholder="Enter your address"
                    />
                    {suggestions.length > 0 && (
                      <FlatList
                        data={suggestions}
                        keyExtractor={(item) => item.key}
                        renderItem={({ item }) => (
                          <TouchableOpacity
                            onPress={() => handleSelectSuggestion(item)}
                            className="border-b-[1px] border-gray-300"
                          >
                            <Text className="font-pregular text-xs p-1">
                              {item.formatted}
                            </Text>
                          </TouchableOpacity>
                        )}
                        className="absolute top-full left-0 right-0 bg-white shadow-md z-50"
                      />
                    )}
                    <TouchableOpacity
                      onPress={toggleModal}
                      className="flex-row items-center justify-between border-2 rounded-md p-3 my-3"
                    >
                      <Feather name="map-pin" size={24} color="black" />
                    </TouchableOpacity>
                    <Modal
                      isVisible={isModalVisible}
                      onBackdropPress={toggleModal}
                      className="m-0 justify-end"
                    >
                      <View className="bg-white rounded-t-3xl h-auto p-4 w-full items-center">
                        <View className="w-full flex justify-between items-center flex-row">
                          <Text className="w-full text-base font-psemibold border-b-[1px] border-gray-300 py-3">
                            Address Summary
                          </Text>
                        </View>
                        <View className="w-full mt-4">
                          {selectedLocation && (
                            <MapView
                              className="w-full h-96"
                              region={region}
                              onRegionChangeComplete={setRegion}
                              zoomEnabled={true}
                            >
                              <Marker
                                coordinate={{
                                  latitude: selectedLocation.lat,
                                  longitude: selectedLocation.lng,
                                }}
                                title={query}
                              />
                            </MapView>
                          )}
                        </View>
                        <TouchableOpacity
                          onPress={toggleModal}
                          className="bg-[#00BDD6] p-2 rounded-lg mt-3"
                        >
                          <Text className="text-sm font-pregular text-white">
                            Done
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </Modal>
                  </View>
                </View>

                <Text className="font-psemibold text-base mb-2">
                  Your Order
                </Text>
                <View>
                  {userId ? (
                    <>
                      {items.map((item, index) => (
                        <CardCheckout
                          key={index}
                          name={item.product?.name || "product name"}
                          price={item.product?.price || 0}
                          quantity={item.product?.quantity || 0}
                          status={item.product?.status || "status"}
                          img={item.product?.img || "img"}
                          ishowTrackOrder={false}
                        />
                      ))}
                    </>
                  ) : (
                    <>
                      {/* {itemFromProductDetail.map((item, index) => ( */}
                      {/* <CardCheckout
                        // key={index}
                        name={itemFromProductDetail.product.name}
                        price={itemFromProductDetail.product.price}
                        quantity={itemFromProductDetail.product.quantity}
                        status={itemFromProductDetail.product.status}
                        img={itemFromProductDetail.product.img}
                        ishowTrackOrder={false}
                      /> */}
                      {/* ))} */}
                    </>
                  )}
                </View>
                <View className="my-3">
                  <Text className="font-pmedium text-base">Voucher</Text>
                  <View className="flex flex-row items-center justify-between">
                    <TextInput
                      className="border-2 rounded-md p-3 mr-3 w-[70%] flex-2 font-pregular"
                      placeholder="enter voucher code"
                      value={voucherCode}
                      onChangeText={(text) => setVoucherCode(text)}
                    />
                    <TouchableOpacity
                      onPress={() => handleApplyVoucher({ code: voucherCode })}
                      className="w-[25%] bg-gray-300 p-4 rounded-md"
                    >
                      <Text className="font-pregular text-base text-center">
                        Apply
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <ForwardedToast ref={(ref) => Toast.setRef(ref)} />
                {/* <Toast/> */}

                <View className="flex-row w-full items-center justify-between">
                  <Text className="font-pregular text-base text-center">
                    TOTAL
                  </Text>
                  <Text className="font-psemibold text-base text-center">
                    ${totalPrice}
                  </Text>
                </View>

                <Link
                  href={{
                    pathname: "./MethodPayment",
                    params: {
                      totalPrice: totalPrice,
                      title: "Payment Method",
                      items: selectedItems,
                    },
                  }}
                  asChild
                >
                  <TouchableOpacity className="flex-1 bg-[#00bdd6] flex-row items-center justify-center p-4 rounded-md my-3">
                    <Text className="font-pregular text-base text-white text-center">
                      Next
                    </Text>
                    <AntDesign name="right" size={20} color="white" />
                  </TouchableOpacity>
                </Link>
              </ScrollView>
            );
          }
        }}
      />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Checkout;

const styles = StyleSheet.create({});
