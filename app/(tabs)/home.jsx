import {
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import React from "react";
import SearchBox from "../../components/SearchBox";
import CategorySelect from "../../components/CategorySelect";
import CategoryCard from "../../components/CategoryCard";
import CustomButton from "../../components/CustomButton";
import ProductCard from "../../components/ProductCard";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "expo-router";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Home = () => {
  const navigation = useNavigation();
  const dataCategory = [
    {
      id: 1,
      img: "https://picsum.photos/200",
      categoryName: "CategorySelect1",
      discount: "10%",
    },
    {
      id: 2,
      img: "https://picsum.photos/200",
      categoryName: "CategorySelect2",
      discount: "20%",
    },
    {
      id: 3,
      img: "https://picsum.photos/200",
      categoryName: "CategorySelect",
      discount: "30%",
    },
    {
      id: 4,
      img: "https://picsum.photos/200",
      categoryName: "CategorySelect",
      discount: "40%",
    },
    {
      id: 5,
      img: "https://picsum.photos/200",
      categoryName: "CategorySelect",
      discount: "50%",
    },
  ];

  const dataProduct = [
    {
      id: 1,
      img: "https://picsum.photos/200",
      name: "Product1",
      countReviews: "10",
      price: "100",
    },
    {
      id: 2,
      img: "https://picsum.photos/200",
      name: "Product1",
      countReviews: "10",
      price: "100",
    },
    {
      id: 3,
      img: "https://picsum.photos/200",
      name: "Product1",
      countReviews: "10",
      price: "100",
    },
    {
      id: 4,
      img: "https://picsum.photos/200",
      name: "Product1",
      countReviews: "10",
      price: "100",
    },
    {
      id: 5,
      img: "https://picsum.photos/200",
      name: "Product1",
      countReviews: "10",
      price: "100",
    },
  ];
  return (
    <SafeAreaView className="flex-1 bg-white py-3">
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox />

        <Text className="font-psemibold text-base ml-3 text-gray-400 pb-2">
          Category
        </Text>
        <FlatList
          data={dataCategory}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <CategorySelect
                img={item.img}
                categoryName={item.categoryName}
                containerStyles={(className = "")}
              />
            );
          }}
          horizontal // Thêm thuộc tính horizontal để dàn các mục ra hàng ngang
          showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
          className="pb-3 px-2"
        />

        <View className="px-3 py-2 w-full flex flex-col">
          <Text className="font-psemibold text-base text-gray-400 pb-2">
            Current sales
          </Text>
          <CategoryCard
            categoryName="CategoryCard"
            img="https://picsum.photos/200"
            discount="10%"
            CustomButton={() => (
              <CustomButton title="Buy now" containerStyles="w-[100px]" />
            )}
          />
          <View className="flex flex-row items-center justify-between w-full mt-3">
            <CategoryCard
              containerStyles="flex-1 mr-2"
              img="https://picsum.photos/200"
            />
            <CategoryCard
              containerStyles="flex-1 ml-2"
              img="https://picsum.photos/200"
            />
          </View>
          <View className="flex items-center justify-center mt-3">
            <TouchableOpacity className="p-2 bg-[#00bdd6] rounded-md">
              <Text className="text-white font-pmedium text-base">
                See more
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-1 px-2 pb-4">
          <View className="flex flex-row items-center justify-between w-full mb-2">
            <Text className="text-base font-psemibold text-gray-300">
              Recommended for you
            </Text>
            <Link href="../details/ProductList" asChild>
              <TouchableOpacity className="items-center flex flex-row">
                <Text className="font-base font-psemibold mr-1">View all</Text>
                <AntDesign name="right" size={16} color="black" />
              </TouchableOpacity>
            </Link>
          </View>

          <View>
            <FlatList
              data={dataProduct}
              keyExtractor={(item) => item.id}
              ld
              renderItem={({ item }) => {
                return (
                  <ProductCard
                    img={item.img}
                    name={item.name}
                    countReviews={item.countReviews}
                    price={item.price}
                    productId={item.id}
                    containerStyles={"w-[150px]"}
                  />
                );
              }}
              className=""
              horizontal // Thêm thuộc tính horizontal để dàn các mục ra hàng ngang
              showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
