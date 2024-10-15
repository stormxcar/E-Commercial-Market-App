import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import ReactStars from "react-rating-stars-component";

const CardList = () => {
  return (
    <TouchableOpacity>
      <View>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          className="w-full h-16 object-cover"
        />
      </View>
      <View>
        <Text>Pear</Text>
        <TouchableOpacity>
          <MaterialIcons name="add-circle" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <View>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            isHalf={false}
            edit={false}
            emptyIcon={<AntDesign name="staro" size={24} color="black" />}
            // halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<AntDesign name="star" size={24} color="black" />}
            activeColor="#ffd700"
          />
        </View>
        <Text>$3</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardList;

const styles = StyleSheet.create({});
