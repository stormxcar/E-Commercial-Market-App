import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { CheckBox } from "react-native-elements";
import Slider from "@react-native-community/slider";
import { Link, useNavigation, useRoute } from "@react-navigation/native";

const FilterProduct = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { currentFilters, setFilters } = route.params;

  const [priceRange, setPriceRange] = useState(
    currentFilters.priceRange || [0, 1000]
  );
  const [deliveryOptions, setDeliveryOptions] = useState(
    currentFilters.deliveryOptions || []
  );
  const [rating, setRating] = useState(currentFilters.rating || 0);
  const [policies, setPolicies] = useState(currentFilters.policies || []);

  const deliveryChoices = ["Instant", "Express", "Standard"];
  const policyChoices = ["Free shipping", "Best sells", "30-day Free Return"];

  const handleApplyFilters = () => {
    setFilters({
      priceRange,
      deliveryOptions,
      rating,
      policies,
    });
    navigation.goBack();
  };

  const renderCheckBox = ({ title, checked, onPress }) => (
    <CheckBox
      title={title}
      checked={checked}
      onPress={onPress}
      containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
      textStyle={{ fontWeight: "normal" }}
      checkedColor="#00bdd6"
    />
  );

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Shipping Options */}
        <View className="px-3 py-3">
          <Text className="font-psemibold text-gray-400 text-base mb-3">
            Shipping options
          </Text>
          {deliveryChoices.map((option, index) =>
            renderCheckBox({
              key: index,
              title: option,
              checked: deliveryOptions.includes(option),
              onPress: () =>
                setDeliveryOptions((prev) =>
                  prev.includes(option)
                    ? prev.filter((item) => item !== option)
                    : [...prev, option]
                ),
            })
          )}
        </View>

        {/* Price Range */}
        <View className="px-3 py-3">
          <Text className="font-psemibold text-gray-400 text-base mb-3">
            Price range
          </Text>
          <Slider
            style={{ width: "100%", height: 40 }}
            minimumValue={0}
            maximumValue={1000}
            step={50}
            minimumTrackTintColor="#1FB28A"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#1FB28A"
            value={priceRange[1]}
            onValueChange={(value) => setPriceRange([0, value])}
          />
          <Text>
            Selected Price: ${priceRange[0]} - ${priceRange[1]}
          </Text>
        </View>

        {/* Average Review */}
        <View className="justify-between items-center px-3 py-3 flex-row ">
          <Text className="font-psemibold text-gray-400 text-base ">
            Average review
          </Text>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setRating(star)}>
              <Text style={{ color: rating >= star ? "orange" : "gray" }}>
                {star} Star
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Policies */}
        <View className="px-3 py-3">
          <Text className="font-psemibold text-gray-400 text-base mb-3">
            Others
          </Text>
          {policyChoices.map((policy, index) =>
            renderCheckBox({
              key: index,
              title: policy,
              checked: policies.includes(policy),
              onPress: () =>
                setPolicies((prev) =>
                  prev.includes(policy)
                    ? prev.filter((item) => item !== policy)
                    : [...prev, policy]
                ),
            })
          )}
        </View>

        {/* Apply Button */}
        <View className="px-3 py-3">
          <TouchableOpacity
            onPress={handleApplyFilters}
            className="p-3 bg-[#00bdd6] rounded-md"
          >
            <Text className="font-psemibold text-base text-center text-white">
              Apply
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FilterProduct;
