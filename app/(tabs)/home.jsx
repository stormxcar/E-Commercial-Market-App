import {
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  RefreshControl,
} from "react-native";
import React, { useState, useEffect } from "react";
import SearchBox from "../../components/SearchBox";
import CategorySelect from "../../components/CategorySelect";
import CategoryCard from "../../components/CategoryCard";
// import CustomButton from "../../components/CustomButton";
import ProductCard from "../../components/ProductCard";
import { Link, router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
// import Countdown from "react-native-countdown-component";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "expo-router";
import { API_DATA } from "../../constants/data";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Home = ({ navigation }) => {
  // const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [dataProduct, setDataProduct] = useState([]);

  // const dataCategory = [
  //   {
  //     id: 1,
  //     img: require("../../assets/images/category_phone.png"),
  //     categoryName: "Electronics",
  //     discount: "10%",
  //   },
  //   {
  //     id: 2,
  //     img: require("../../assets/images/category_shoe.png"),
  //     categoryName: "Fashion",
  //     discount: "20%",
  //   },
  //   {
  //     id: 3,
  //     img: require("../../assets/images/category_beauty.png"),
  //     categoryName: "Beauty",
  //     discount: "30%",
  //   },
  //   {
  //     id: 4,
  //     img: require("../../assets/images/category_fruit.png"),
  //     categoryName: "Fresh Fruits",
  //     discount: "40%",
  //   },
  // ];

  // const dataProduct = [
  //   {
  //     id: 1,
  //     img: "https://res.cloudinary.com/dzwjgfd7t/image/upload/v1731204792/ecommercial_market_image/category_shoe_nsq8mw.png",
  //     name: "Sneaker",
  //     countReviews: "10",
  //     price: "100",
  //   },
  //   {
  //     id: 2,
  //     img: "https://res.cloudinary.com/dzwjgfd7t/image/upload/v1731204792/ecommercial_market_image/category_shoe_nsq8mw.png",
  //     name: "Tablet",
  //     countReviews: "10",
  //     price: "100",
  //   },
  //   {
  //     id: 3,
  //     img: "https://res.cloudinary.com/dzwjgfd7t/image/upload/v1731204792/ecommercial_market_image/category_shoe_nsq8mw.png",
  //     name: "Kid cloth",
  //     countReviews: "10",
  //     price: "100",
  //   },
  //   {
  //     id: 4,
  //     img: "https://res.cloudinary.com/dzwjgfd7t/image/upload/v1731204792/ecommercial_market_image/category_shoe_nsq8mw.png",
  //     name: "Green avocado",
  //     countReviews: "10",
  //     price: "100",
  //   },
  // ];
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    const fetchDataCategory = async () => {
      try {
        const res = await fetch(API_DATA);
        const data = await res.json();
        setDataCategory(data?.category || []);
      } catch (error) {
        console.log(error);
        setDataCategory([]);
      }
    };

    fetchDataCategory();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_DATA);
      const data = await res.json();

      // console.log("====================================");
      // console.log("data product: ", data.product);
      // console.log("====================================");

      setDataProduct(data.product || []);
    } catch (error) {
      console.log(error);
      setDataProduct([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await getData();
    setRefreshing(false);
  };

  // get list product from API_DATA that discount > 50
  const dataProductDiscount = dataProduct.filter((item) => item.discount > 50);

  return (
    <SafeAreaView className="flex-1 bg-white pb-3">
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} />}
        showsVerticalScrollIndicator={false}
        onRefresh={onRefresh}
      >
        <SearchBox onFocus={() => navigation.navigate("SearchScreen")} />

        <View className="mt-2">
          <Text className="font-psemibold text-base ml-3 text-gray-400 pb-2">
            Category
          </Text>

          <FlatList
            data={dataCategory}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <CategorySelect
                  id={item.id}
                  img={item.img}
                  categoryName={item.name}
                  containerStylesImg={
                    (className = "rounded-full bg-purple-100 shadow-sm")
                  }
                  discount={item.discount}
                />
              );
            }}
            horizontal // Thêm thuộc tính horizontal để dàn các mục ra hàng ngang
            showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
            className="pb-3 px-2"
          />
        </View>

        <View className="px-3 py-2 w-full flex flex-col">
          <View className="flex-row items-center mb-2">
            <Text className="font-psemibold text-base text-gray-400 pb-2">
              Flash sales today
            </Text>
            {/* <View className="bg-[#00bdd6] ml-2 px-1 rounded-lg flex-row items-center">
              <AntDesign name="clockcircleo" size={20} color="white" />
              <Countdown
                until={1 * 24 * 60 * 60} // Thời gian đếm ngược (24 giờ)
                size={12}
                onFinish={() => alert("Flash sale ended!")}
                digitStyle={{}}
                digitTxtStyle={{ color: "white" }}
                separatorStyle={{ color: "white" }}
                showSeparator
                timeLabels={["D", "H", "M", "S"]}
              />
            </View> */}
          </View>

          <View className="flex">
            {" "}
            {/* Container for top and bottom rows */}
            {dataProductDiscount.length > 0 && (
              <View className="flex-row justify-between">
                {" "}
                {/* Top row */}
                {dataProductDiscount
                  .slice(0, Math.min(2, dataProductDiscount.length))
                  .map((item, index) => (
                    <View key={index} className="w-1/2 mb-2">
                      <CategoryCard
                        img={item.img}
                        discount={`${item.discount}%`}
                        name={item.name}
                        price={item.price}
                        displayType={item.display}
                      />
                    </View>
                  ))}
              </View>
            )}
            {dataProductDiscount.length > 2 && (
              <View className="flex-row justify-between mt-2">
                {" "}
                {/* Bottom row */}
                {dataProductDiscount
                  .slice(2, Math.min(4, dataProductDiscount.length))
                  .map((item, index) => (
                    <View key={index} className="w-full mb-2">
                      <CategoryCard
                        img={item.img}
                        discount={`${item.discount}%`}
                        name={item.name}
                        price={item.price}
                        displayType={item.display}
                      />
                    </View>
                  ))}
              </View>
            )}
          </View>

          <View className="flex items-center justify-center mt-3">
            {dataProductDiscount.length > 3 ? (
              <Link
                href={{
                  pathname: "../details/productList",
                  params: { title: "Product list" },
                }}
                asChild
              >
                <TouchableOpacity className="p-2 bg-[#00bdd6] rounded-md">
                  <Text className="text-white font-pmedium text-base">
                    See more
                  </Text>
                </TouchableOpacity>
              </Link>
            ) : null}
          </View>
        </View>

        <View className="flex-1 px-2 pb-4">
          <View className="flex flex-row items-center justify-between w-full mb-2">
            <Text className="text-base font-psemibold text-gray-400">
              Recommended for you
            </Text>
            <Link
              href={{
                pathname: "../details/productList",
                params: { title: "Product list" },
              }}
              asChild
            >
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
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    countReviews={item.number_count_rating}
                    discount={item.discount}
                    price={item.price}
                    productId={item.id}
                    displayType={item.display}
                    containerStyles={"w-[180px]"}
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
