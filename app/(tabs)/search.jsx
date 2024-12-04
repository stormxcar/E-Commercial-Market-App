import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import SearchBox from "../../components/SearchBox";
import ProductCard from "../../components/ProductCard";
import CategorySelect from "../../components/CategorySelect";
import { useNavigation } from "@react-navigation/native";
import { API_DATA } from "../../constants/data";

const Search = () => {
  const dataSearchPop = [
    {
      id: 1,
      name: "Clothing",
      img: require("../../assets/images/product_cloth.png"),
    },
    {
      id: 2,
      name: "Shoes",
      img: require("../../assets/images/product_shoe.png"),
    },
    {
      id: 3,
      name: "Tech",
      img: require("../../assets/images/product_tablet.png"),
    },
    {
      id: 4,
      name: "Musician",
      img: require("../../assets/images/product_cloth.png"),
    },
    {
      id: 5,
      name: "Food",
      img: require("../../assets/images/product_fruit.png"),
    },
  ];
  // const dataCategory = [
  //   {
  //     id: 1,
  //     img: "https://picsum.photos/200",
  //     categoryName: "Electronics",
  //     discount: "10%",
  //   },
  //   {
  //     id: 2,
  //     img: "https://picsum.photos/200",
  //     categoryName: "Fashion",
  //     discount: "20%",
  //   },
  //   {
  //     id: 3,
  //     img: "https://picsum.photos/200",
  //     categoryName: "Beauty",
  //     discount: "30%",
  //   },
  //   {
  //     id: 4,
  //     img: "https://picsum.photos/200",
  //     categoryName: "Fresh Fruits",
  //     discount: "40%",
  //   },
  // ];
  // const dataProduct = [
  //   {
  //     id: 1,
  //     img: "https://picsum.photos/200",
  //     name: "Product1",
  //     countReviews: "10",
  //     price: "100",
  //     deliveryProcess: "Instant",
  //     numberStarRating: 4,
  //     otherOption: "Free shipping",
  //   },
  //   {
  //     id: 2,
  //     img: "https://picsum.photos/200",
  //     name: "Product2",
  //     countReviews: "10",
  //     price: "299",
  //     deliveryProcess: "Instant",
  //     numberStarRating: 3,
  //     otherOption: "Free shipping",
  //   },
  //   {
  //     id: 3,
  //     img: "https://picsum.photos/200",
  //     name: "Product3",
  //     countReviews: "10",
  //     price: "300",
  //     deliveryProcess: "Express",
  //     numberStarRating: 5,
  //     otherOption: "Best sells",
  //   },
  //   {
  //     id: 4,
  //     img: "https://picsum.photos/200",
  //     name: "Product4",
  //     countReviews: "10",
  //     price: "699",
  //     deliveryProcess: "Standard",
  //     numberStarRating: 4,
  //     otherOption: "30-day Free Return",
  //   },
  //   {
  //     id: 5,
  //     img: "https://picsum.photos/200",
  //     name: "Product5",
  //     countReviews: "10",
  //     price: "450",
  //     deliveryProcess: "Standard",
  //     numberStarRating: 1,
  //     otherOption: "Best sells",
  //   },
  // ];

  const [dataCategory, setDataCategory] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(API_DATA); // Chỉ gọi API một lần
        const data = await res.json();

        // Cập nhật cả category và product từ dữ liệu nhận được
        setDataCategory(data?.category || []);
        setDataProduct(data?.product || []);
      } catch (error) {
        console.log("Error fetching data:", error);
        setDataCategory([]);
        setDataProduct([]);
      }
    };

    fetchData();

    setLoading(false);
  }, []);

  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    // setRefreshing(true);
    setLoading(true);
    await getData();
    // setRefreshing(false);
    setLoading(false);
  };

  console.log('====================================');
  console.log("data product :",dataProduct);
  console.log('====================================');

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(dataProduct);
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    deliveryOptions: [],
    rating: 0,
    policies: [],
  });

  // Hàm kết hợp tìm kiếm và lọc
  const applyFiltersAndSearch = () => {
    const filtered = dataProduct.filter((product) => {
      if (
        filters.priceRange &&
        (product.price < filters.priceRange[0] ||
          product.price > filters.priceRange[1])
      ) {
        return false;
      }

      if (
        filters.deliveryOptions.length &&
        !filters.deliveryOptions.includes(product.deliveryProcess)
      ) {
        return false;
      }

      if (filters.rating && product.numberStarRating < filters.rating) {
        return false;
      }

      if (
        filters.policies.length &&
        !filters.policies.includes(product.otherOption)
      ) {
        return false;
      }

      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      return true;
    });

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    applyFiltersAndSearch();
  }, [searchQuery, filters]);

  const navigateToFilter = () => {
    navigation.navigate("FilterProduct", {
      currentFilters: filters,
      setFilters: (newFilters) => setFilters(newFilters),
    });
  };

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} />}
        showsVerticalScrollIndicator={false}
        onRefresh={onRefresh}
      >
        <SearchBox
          setSearchQuery={setSearchQuery}
          placeholder="Search for products"
        />

        <View className="px-4">
          <Text className="font-psemibold text-md pt-2">
            Trending search category recently
          </Text>
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 4 }}
            >
              <View className="flex flex-row w-full py-3">
                {dataCategory.map((item) => (
                  <CategorySelect
                    key={item.id}
                    img={item.img}
                    categoryName={item.name}
                    containerStyles={(className = "w-[150px]")}
                    containerStylesImg={
                      (className =
                        "w-full rounded-sm shadow-sm border-[1px] border-gray-200")
                    }
                  />
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
        <View className="px-2 py-3">
          <TouchableOpacity className="w-full rounded-md bg-[#00bdd6] p-1">
            <Text className="font-pmedium text-base text-white text-center">
              Show product
            </Text>
            <TouchableOpacity
              style={{ padding: 10, backgroundColor: "blue", margin: 10 }}
              onPress={navigateToFilter}
            >
              <Text className="font-pregular text-center text-white">
                Filter
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <View className="py-4 flex flex-row flex-wrap justify-between">
            {loading && (
              <View style={styles.loading}>
                <ActivityIndicator size="large" color="#00bdd6" />
              </View>
            )}
            {filteredProducts.map((item) => (
              <View className=" w-[49%] mb-1 " key={item.id}>
                <ProductCard
                  containerStyles={"w-full"}
                  img={item.img}
                  name={item.name}
                  countReviews={item.number_count_rating}
                  discount={item.discount}
                  price={item.price}
                  productId={item.id}
                  displayType={item.display}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
