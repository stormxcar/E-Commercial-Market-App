import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import CardCheckout from "../../components/CardCheckout";
import Modal from "react-native-modal";
import Timeline from "react-native-timeline-flatlist";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { API_DATA } from "../../constants/data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const Shipping = () => {
  const [shippingProducts, setShippingProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hàm fetch sản phẩm
  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_DATA);
      const data = await res.json();

      // console.log("====================================");
      // console.log(data.product);
      // console.log("====================================");

      // Kiểm tra và đảm bảo rằng data là một mảng
      if (Array.isArray(data.product)) {
        setShippingProducts(data.product || []);
        // Alert.alert("Data", JSON.stringify(data.product));
      } else {
        setShippingProducts([]);
        // Alert.alert("Data", "Data is not an array");
      }
    } catch (error) {
      console.error(error);
      setShippingProducts([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    getData();
    setLoading(false);
  }, []);

  // // Render danh sách sản phẩm shipping
  // if (loading) {
  //   return <ActivityIndicator size="large" color="#00bdd6" />;
  // }

  // if (shippingProducts.length === 0) {
  //   return (
  //     <View>
  //       <Text>Không có sản phẩm nào đang được vận chuyển.</Text>
  //     </View>
  //   );
  // }
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Timeline data
  const data = [
    {
      time: "09:00",
      title: "Order Placed",
      description: "Your order has been placed.",
    },
    {
      time: "12:00",
      title: "Order Confirmed",
      description: "Your order has been confirmed.",
    },
    {
      time: "15:00",
      title: "Order Shipped",
      description: "Your order has been shipped.",
    },
    {
      time: "18:00",
      title: "Out for Delivery",
      description: "Your order is out for delivery.",
    },
    {
      time: "20:00",
      title: "Delivered",
      description: "Your order has been delivered.",
    },
  ];

  // Render Timeline circle
  const renderCircle = (rowData, sectionID, rowID) => {
    return (
      <MaterialCommunityIcons
        name="checkbox-marked-circle-outline"
        size={20}
        color="#00BDD6"
      />
    );
  };

  // Render Timeline details
  const renderDetail = (rowData, sectionID, rowID) => {
    return (
      <View
        style={{
          flex: 1,
          padding: 10,
          backgroundColor: "#f0f0f0",
          borderRadius: 8,
        }}
      >
        <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
          {rowData.title}
        </Text>
        <Text style={{ color: "gray" }}>{rowData.description}</Text>
      </View>
    );
  };

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
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{}}>
        {/* Hiển thị danh sách sản phẩm mà trạng thái của nó đang là shipping */}
        {!userId ? (
          <View className="p-3 bg-white rounded-md">
            <Text className="text-center font-psemibold text-lg">
              Please login to see your shipping
            </Text>
            <TouchableOpacity onPress={() => router.push("/log_in")}>
              <Text className="text-center font-psemibold text-lg text-[#00BDD6]">
                Login now
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            {shippingProducts.map((product, index) =>
              product.status === "shipping" ? (
                <CardCheckout
                  key={index}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                  img={product.img} // Ensure you provide correct image path
                  status={product.status}
                  ishowTrackOrder={true}
                />
              ) : null
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shipping;

const styles = StyleSheet.create({});
