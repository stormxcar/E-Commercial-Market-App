import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,

} from "react-native";
import React, { useEffect, useState, forwardRef } from "react";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRoute, useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import Entypo from "@expo/vector-icons/Entypo";
import Toast from "react-native-toast-message";

const Payment = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { totalPrice, title } = route.params;

  useEffect(() => {
    if (title) {
      navigation.setOptions({ title: title });
    }
  }, [title]);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    
  };

  const ForwardedToast = forwardRef((props, ref) => (
    <Toast {...props} ref={ref} />
  ));

  // const showToast = (type, message) => {
  //   Toast.show({
  //     type: type,
  //     text1: message,
  //     autoHide: true,
  //     visibilityTime: 2000,
  //   });
  // };

  const handleSubmit = () => {
    Toast.show({
      type: "success",
      text1: "Thank you for your trust.",
      text2: "We will deliver your order soon.",
    });
  };

  

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="py-5 items-center justify-center">
          <View className="items-center justify-center flex w-full flex-row">
            <AntDesign name="checkcircle" size={70} color="green" />
          </View>

          <Text className="text-center font-pbold text-xl py-4 text-green-400">
            Order placed successfully
          </Text>
          <Text className="text-center font-pregular py-3">
            Let's wait for the delivery (Please check your order when received)
          </Text>
        </View>

        <View className="bg-gray-200 p-5 mx-3 rounded-lg">
          <View className="flex-row items-center justify-between w-full py-4">
            <Text className="text-center font-pregular ">Subtotal</Text>
            <Text className="text-center font-pregular ">${totalPrice}</Text>
          </View>
          <View className="flex-row items-center justify-between w-full py-4">
            <Text className="text-center font-pregular ">Tax(10%) / VAT</Text>
            <Text className="text-center font-pregular ">$0</Text>
          </View>
          <View className="flex-row items-center justify-between w-full py-4">
            <Text className="text-center font-pregular ">Fees (store)</Text>
            <Text className="text-center font-pregular ">$0</Text>
          </View>
          <View className="flex-row items-center justify-between w-full py-4">
            <Text className="text-center font-pregular ">Voucher applied</Text>
            <Text className="text-center font-pregular ">$0</Text>
          </View>
          <View className="flex-row justify-between w-full py-4">
            <Text className="text-center font-pregular p">Method payment</Text>
            <View className="items-end justify-end">
              <Text className="text-center font-pmedium ">received order</Text>
              <Text className="text-xs font-pregular text-gray-500">
                (Please prepare cash when receiving orders)
              </Text>
              <Text className="text-center font-psemibold ">${totalPrice}</Text>
            </View>
          </View>
          <View className="flex-row items-center justify-between w-full py-4">
            <Text className="text-center font-pregular ">Shipping</Text>
            <Text className="text-center font-pregular ">$0</Text>
          </View>
          <View className="flex-row items-center justify-between w-full py-4">
            <Text className="text-center font-pregular ">Total</Text>
            <View className="flex-row items-center">
              <Text className="bg-green-300 p-2 mr-2 rounded-lg">Success</Text>
              <Text className="text-center font-psemibold text-green-800 text-2xl">
                ${totalPrice}
              </Text>
            </View>
          </View>
        </View>

        <View className="py-4 px-5">
          <TouchableOpacity
            onPress={toggleModal}
            className="flex-row items-center justify-between w-full py-4"
          >
            <Text className="text-center font-pregular underline">
              How was your experiencre about shopping?
            </Text>
          </TouchableOpacity>

          <Modal
            isVisible={isModalVisible}
            onBackdropPress={toggleModal}
            className="m-0 justify-end"
            animationIn="slideInUp"
            animationOut="slideOutDown"
          >
            <View className="bg-white rounded-t-3xl p-4 w-full items-center">
              <View className="w-full flex justify-between items-center flex-row">
                <Text className="w-full text-base font-psemibold border-b-[1px] border-gray-300 py-3">
                  Feedback's shopping process
                </Text>
              </View>
              <View className="w-full mt-4">
                <View className=" justify-center items-center mb-2">
                  <View className="flex flex-row items-center justify-center my-3 gap-2">
                    <TouchableOpacity>
                      <Entypo name="emoji-sad" size={40} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Entypo name="emoji-neutral" size={40} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Entypo name="emoji-happy" size={40} color="black" />
                    </TouchableOpacity>
                  </View>
                  <View className="w-full h-auto">
                    <Text className="text-base font-pmedium mb-1">
                      Your feedback
                    </Text>
                    <TextInput
                      placeholder="Your feedback"
                      numberOfLines={3}
                      multiline={true}
                      className="border-2 border-gray-300 p-2 rounded-md font-pregular"
                    />
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={toggleModal}
                className="bg-[#00BDD6] p-2 rounded-lg mt-3"
              >
                <Text className="text-sm font-pregular text-white">Done</Text>
              </TouchableOpacity>
              
            </View>
          </Modal>

          <ForwardedToast ref={(ref) => Toast.setRef(ref)} />
         

          <Link href="/home" asChild>
            <TouchableOpacity className="bg-[#00bdd6] flex-row items-center justify-center p-4 rounded-md my-3">
              <Text className="text-white font-pregular text-base text-center">
                Back to Home
              </Text>
              <AntDesign name="right" size={20} color="white" />
            </TouchableOpacity>
          </Link>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({});
