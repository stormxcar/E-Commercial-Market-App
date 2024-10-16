import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import ReactStars from "react-rating-stars-component";

const CardList = ({ ratingChanged, containerStyles, img, name, price , imageStyles}) => {
  return (
    <TouchableOpacity className={` ${containerStyles} bg-gray-200 rounded-lg`}>
      <View>
        <Image
          source={{ uri: img }}
          className={`object-cover overflow-hidden rounded-lg border-2 ${imageStyles}`}
        />
      </View>
      <View className="flex justify-between flex-1">
        <View className="px-2 flex flex-row justify-between items-center py-2">
          <Text className="text-base font-pregular">{name}</Text>
          <TouchableOpacity>
            <MaterialIcons name="add-circle" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="px-2 flex flex-row justify-between items-center pb-2">
          <View className="flex flex-row ">
            {/* <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            isHalf={false}
            edit={true}
            emptyIcon={<AntDesign name="staro" size={24} color="black" />}
            fullIcon={<AntDesign name="star" size={24} color="black" />}
            activeColor="#ffd700"
          /> */}

            <AntDesign name="star" size={14} color="orange" />
            <AntDesign name="star" size={14} color="orange" />
            <AntDesign name="star" size={14} color="orange" />
            <AntDesign name="star" size={14} color="orange" />
            <AntDesign name="star" size={14} color="orange" />
          </View>
          <Text className="text-base font-pregular">{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardList;

const styles = StyleSheet.create({});
