import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import React from "react";
import { Scroll } from "iconsax-react-native";
import VoucherCard from "../../components/VoucherCard";

const EVoucher = () => {
  const dataVoucher = [
    {
      id: 1,
      title: "Discount 15% / Order above $100",
      description: "Free shipping",
      valid: "Valid after 1 day",
      condition: "condition",
    },
    {
      id: 2,
      title: "Discount 10% / Order above $160",
      description: "Free shipping",
      valid: "Valid after 2 day",
      condition: "condition",
    },
    {
      id: 3,
      title: "Discount 35% / Order above $130",
      description: "Free shipping",
      valid: "Valid after 3 day",
      condition: "condition",
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView className="p-3">
        <View>
          <TextInput className="border-2 border-gray-300 mb-2 font-pregular" placeholder="Enter voucher code" />
        </View>

        <View>
          {dataVoucher.map((item) => (
            <VoucherCard
              key={item.id}
              title={item.title}
              description={item.description}
              valid={item.valid}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EVoucher;

const styles = StyleSheet.create({});
