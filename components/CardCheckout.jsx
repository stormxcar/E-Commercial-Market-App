import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Modal from "react-native-modal";
import Timeline from "react-native-timeline-flatlist";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const CardCheckout = ({
  name,
  img,
  status,
  price,
  quantity,
  ishowTrackOrder,
}) => {
  const [isModalVisible, setModalVisible] = React.useState(false);
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
  return (
    <View className="shadow-sm w-full p-3 flex-row mb-2 bg-white">
      <View className="flex-1 flex-row">
        <View className="w-[35%] ">
          <Image
            source={{ uri: img }}
            className="w-20 h-20 object-cover mr-3 bg-gray-200"
          />
        </View>
        <View className="flex-col w-[60%] ">
          <View className="flex-row justify-between mb-6">
            <View>
              <Text className="text-base font-pmedium">{name}</Text>
              <Text className="text-sm font-pregular">{status}</Text>
            </View>
          </View>

          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-pmedium">${price}</Text>
            <Text className="text-base font-pmedium">x{quantity}</Text>
          </View>
        </View>
      </View>
      <View className="ml-2 items-end justify-between">
        <View>
          <AntDesign name="right" size={20} color="black" />
        </View>

        <View>
          {ishowTrackOrder ? (
            <TouchableOpacity
              style={{
                backgroundColor: "#00BDD6",
                padding: 6,
                borderRadius: 5,
                // marginTop: 20,
              }}
              onPress={toggleModal}
            >
              <Text className="text-white text-sm font-pmedium">
                Track Order
              </Text>
            </TouchableOpacity>
          ) : null}

          <Modal
            isVisible={isModalVisible}
            onBackdropPress={toggleModal}
            style={{ margin: 0, justifyContent: "flex-end" }}
          >
            <View
              style={{
                backgroundColor: "white",
                padding: 20,
                borderRadius: 20,
                height: "90%",
              }}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "bold", marginBottom: 15 }}
              >
                Order Timeline
              </Text>
              <Timeline
                data={data}
                circleSize={20}
                circleColor="#00BDD6"
                lineColor="#00BDD6"
                timeContainerStyle={{ minWidth: 60, marginTop: 0 }}
                timeStyle={{
                  textAlign: "center",
                  backgroundColor: "#00BDD6",
                  color: "white",
                  padding: 5,
                  borderRadius: 13,
                }}
                descriptionStyle={{ color: "gray" }}
                options={{
                  style: { paddingTop: 5 },
                }}
                innerCircle={"icon"}
                renderDetail={renderDetail}
              />
              <TouchableOpacity
                onPress={toggleModal}
                style={{
                  marginTop: 20,
                  padding: 10,
                  backgroundColor: "#00BDD6",
                  borderRadius: 8,
                }}
              >
                <Text style={{ textAlign: "center", color: "white" }}>
                  Done
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
};

export default CardCheckout;

const styles = StyleSheet.create({});
