import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import ReactStars from "react-rating-stars-component";
import { Link } from "expo-router";

const CardList = ({
  containerStyles,
  img,
  name,
  price,
  imageStyles,
  product,
  handleAddToCart,
}) => {
  return (
    <Link href="/details/productDetail" asChild>
      <TouchableOpacity
        className={` ${containerStyles} bg-gray-200 rounded-lg`}
      >
        <View>
          <Image
            source={{ uri: img }}
            className={`object-cover overflow-hidden rounded-lg border-2 ${imageStyles}`}
          />
        </View>
        <View className="flex flex-row justify-between w-full flex-1">
          <View className="flex justify-between">
            <View className="px-2 flex flex-row justify-between items-center py-2">
              <Text className="text-base font-pregular">{name}</Text>
            </View>
            <View className="px-2 flex flex-col pb-2">
              <View className="flex-row items-center">
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
                <Text className="text-base font-pregular">(99)</Text>
              </View>

              <View className="flex-row mt-3 justify-between w-full">
                <View className="flex-row">
                  <Text className="text-sm line-through font-pregular text-gray-400 mr-3">
                    $120
                  </Text>
                  <Text className="text-base font-pregular">${price}</Text>
                  <Text className="text-sm font-pregular text-white ml-3 px-2 bg-cyan-400">
                    -20%
                  </Text>
                </View>
                <View className="justify-end">
                  <Link
                    href={{
                      pathname: "/details/Cart",
                      params: { title: "Cart" },
                    }}
                    asChild
                  >
                    <TouchableOpacity
                      onPress={() => handleAddToCart(product)}
                      className=""
                    >
                      <MaterialIcons
                        name="add-circle"
                        size={26}
                        color="black"
                      />
                    </TouchableOpacity>
                  </Link>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default CardList;

const styles = StyleSheet.create({});
