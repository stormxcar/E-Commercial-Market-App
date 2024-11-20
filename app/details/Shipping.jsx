import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import CardCheckout from "../../components/CardCheckout";
import Modal from "react-native-modal";
import Timeline from "react-native-timeline-flatlist";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Shipping = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
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
  const renderCircle = (rowData, sectionID, rowID) => {
    return (
      <MaterialCommunityIcons
        name="checkbox-marked-circle-outline"
        size={20}
        color="#00BDD6"
      />
    );
  };

  const renderDetail = (rowData, sectionID, rowID) => {
    return (
      <View className="flex-1 p-3 bg-[#f0f0f0] rounded-md">
        <Text className="font-pbold mb-2">{rowData.title}</Text>
        <Text className="font-pregular text-gray">{rowData.description}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="p-3">
          <CardCheckout
            name={"sports sneaker"}
            price={100}
            quantity={1}
            // img={"https://via"}
            status={"Delivering"}
          />
          <View className="w-full ">
            <TouchableOpacity
              className="flex-1 p-3 rounded-lg bg-[#00BDD6]"
              onPress={toggleModal}
            >
              <Text className="text-base text-center font-psemibold text-white">
                Track Order
              </Text>
            </TouchableOpacity>
            <Modal
              isVisible={isModalVisible}
              onBackdropPress={toggleModal}
              className="m-0 justify-end"
            >
              <View className="bg-white p-4 rounded-t-2xl h-[90%] justify-center items-center">
                <Text className="text-base font-pbold mb-10 border-b-[1px] w-full pb-2">
                  Order Timeline
                </Text>
                <Timeline
                  className="w-full"
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
                  // renderCircle={renderCircle}
                  renderDetail={renderDetail}
                  separator={false}
                  detailContainerStyle={{
                    marginBottom: 10,
                    paddingLeft: 5,
                    paddingRight: 5,
                  }}
                />
                <TouchableOpacity
                  onPress={toggleModal}
                  className="mt-4 p-2 bg-[#00BDD6] rounded-sm"
                >
                  <Text className="text-base font-psemibold text-white">
                    Done
                  </Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shipping;

const styles = StyleSheet.create({});
