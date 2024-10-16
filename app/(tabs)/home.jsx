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

const Home = () => {
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
        {/* <HeaderShown title={'All Deals'}/> */}
        <SearchBox />

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
          className="py-4 px-4"
        />

        <View className="p-5 w-full flex flex-col">
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
        </View>

        <View className="flex-1 p-5">
          <View className="flex flex-row items-center justify-between w-full mb-4">
            <Text className="font-base font-pregular">Recommended for you</Text>
            <Link href="../details/ProductList">
              <Text className="font-base font-psemibold">View all</Text>
            </Link>
          </View>

          <View>
            <FlatList
              data={dataProduct}
              keyExtractor={(item) => item.id}
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
