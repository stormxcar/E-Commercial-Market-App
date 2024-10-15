import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CardList from "./CardList";

const ProductList = () => {
  const dataProductCard = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://picsum.photos/200",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "https://picsum.photos/200",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: "https://picsum.photos/200",
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
      image: "https://picsum.photos/200",
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="w-full h-[200px] rounded-lg">
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            className="w-full h-full rounded-lg overflow-hidden"
            width={30}
            height={30}
            resizeMode="cover"
          />
        </View>

        <View>
          <View>{/* show list product */}</View>
          <View>
            <TouchableOpacity>
              <Text>See all</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View>
            <Text>Relevant products</Text>
            <TouchableOpacity>
              <Text>See all</Text>
            </TouchableOpacity>
          </View>

          <View>{/* show list product */}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
