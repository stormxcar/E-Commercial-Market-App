import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  View,
  ActivityIndicator,
  FlatList,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { CheckBox } from "react-native-elements";
import CartProduct from "../../components/CartProduct";
import { API_DATA } from "../../constants/data";
import { Link, router, useRouter } from "expo-router";
import { Modal } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Cart = () => {
  const [isChecked, setIsChecked] = useState(false);
  // const [dataCart, setDataCart] = useState([]);
  const [productList, setProductList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigation = useNavigation();
  const route = useRoute();
  const { title } = route.params;

  useEffect(() => {
    if (title) {
      navigation.setOptions({ title: title });
    }
  }, [title]);

  // const getData = async () => {
  //   try {
  //     setLoading(true);
  //     const res = await fetch(API_DATA);
  //     const data = await res.json();
  //     // Lọc ra dữ liệu của sheet 'inbox' từ JSON trả về
  //     setDataCart(data.cart || []);
  //     // console.log(data.cart);
  //   } catch (error) {
  //     console.error(error);
  //     setDataCart([]);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // console.log("====================================");
  // console.log(dataCart.id);
  // console.log("====================================");

  // const onRefresh = async () => {
  //   setRefreshing(true);
  //   await getData();
  //   setRefreshing(false);
  // };

  const [cartItems, setCartItems] = useState([]); // Khởi tạo là mảng rỗng
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        setLoading(true);
        // Lấy user_id từ AsyncStorage
        const userId = await AsyncStorage.getItem("user_id");

        if (userId) {
          // Fetch data từ API
          const response = await fetch(API_DATA);
          const data = await response.json();

          // Lọc các item trong giỏ hàng của user
          const userCartItems = data.productUser.filter(
            (item) => item.user_id === parseInt(userId)
          );

          // Lấy thông tin chi tiết sản phẩm
          const productResponse = await fetch(API_DATA);
          const productData = await productResponse.json();

          // Kết hợp thông tin giỏ hàng với chi tiết sản phẩm
          const cartWithDetails = userCartItems
            .map((cartItem) => {
              const product = productData.product.find(
                (prod) => prod.id === cartItem.product_id
              );
              if (!product) return null;

              const price = parseFloat(product.price) || 0;
              const quantity = parseInt(cartItem.quantity) || 0;

              return {
                id: cartItem.id,
                product: {
                  ...product,
                  price: price, // Lưu giá đã chuyển đổi
                },
                quantity: quantity,
                itemTotal: price * quantity,
              };
            })
            .filter(Boolean); // Lọc bỏ các item null

          setCartItems(cartWithDetails);

          // Tính tổng tiền ban đầu với kiểm tra số
          const initial = cartWithDetails.reduce((sum, item) => {
            const itemPrice = parseFloat(item.product.price) || 0;
            const itemQuantity = parseInt(item.quantity) || 0;
            return sum + itemPrice * itemQuantity;
          }, 0);

          setTotalPrice(initial);

          console.log("====================================");
          console.log("totalPrice: ", totalPrice);
          console.log("====================================");
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCartData();
  }, []);

  const handleUpdateTotal = (itemId, newItemTotal) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, itemTotal: newItemTotal };
      }
      return item;
    });
    setCartItems(updatedItems);

    // Tính lại tổng tiền
    const newTotal = updatedItems.reduce(
      (sum, item) =>
        sum + (item.itemTotal || item.product.price * item.quantity),
      0
    );
    setTotalPrice(newTotal);
  };

  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" color="#00bdd6" />
  //     </View>
  //   );
  // }

  // Xử lý chọn/bỏ chọn một sản phẩm
  const handleSelectItem = (itemId, isSelected, price, quantity) => {
    let newSelectedItems;
    if (isSelected) {
      newSelectedItems = [...selectedItems, itemId];
      setSelectedItems(newSelectedItems);
      setTotalPrice(prev => prev + (price * quantity));
    } else {
      newSelectedItems = selectedItems.filter(id => id !== itemId);
      setSelectedItems(newSelectedItems);
      setTotalPrice(prev => prev - (price * quantity));
    }

    // Chỉ set isSelectAll = true khi tất cả items được chọn
    setIsSelectAll(newSelectedItems.length === cartItems.length);
  };

  // Xử lý chọn/bỏ chọn tất cả
  const handleSelectAll = () => {
    const newSelectAll = !isSelectAll;
    setIsSelectAll(newSelectAll);

    if (newSelectAll) {
      // Chọn tất cả
      const allIds = cartItems.map(item => item.id);
      setSelectedItems(allIds);
      // Tính tổng tiền của tất cả items
      const total = cartItems.reduce((sum, item) => 
        sum + (parseFloat(item.product.price) * item.quantity), 0
      );
      setTotalPrice(total);
    } else {
      // Bỏ chọn tất cả
      setSelectedItems([]);
      setTotalPrice(0);
    }
  };


  // useEffect(() => {
  //   console.log('====================================');
  //   console.log(dataCart.map(item => item.id));
  //   console.log('====================================');
  // }, [dataCart]);

  // console.log(selectedItems);
  // const [loading , setIsLoading] = useState(true);

  // const [userId, setUserId] = useState(null);

  // const router = useRouter();
  // useEffect(() => {
  //   const fetchCartData = async () => {
  //     try {
  //       // Lấy user_id từ AsyncStorage
  //       const userId = await AsyncStorage.getItem("user_id");

  //       // console.log("====================================");
  //       // console.log("id stored:", userId);
  //       // console.log("====================================");

  //       if (userId) {
  //         // Nếu user_id có, gọi API hoặc lấy dữ liệu từ bảng product_user
  //         const response = await fetch(API_DATA);
  //         const data = await response.json();

  //         // console.log("====================================");
  //         // console.log("data.productUser: ", data.productUser);
  //         // console.log("====================================");

  //         // Giả sử data.product_user là dữ liệu lấy từ bảng product_user
  //         const userCartItems = data.productUser.filter(
  //           (item) => item.user_id === parseInt(userId)
  //         );

  //         // console.log("====================================");
  //         // console.log(userCartItems);
  //         // console.log("====================================");

  //         setDataCart(userCartItems);

  //         // Lấy thông tin chi tiết sản phẩm từ bảng products
  //         const productResponse = await fetch(API_DATA); // API trả về thông tin sản phẩm
  //         const productData = await productResponse.json();
  //         // console.log("====================================");
  //         // console.log(productData.product);
  //         // console.log("====================================");
  //         setProductList(productData.product);

  //         // setLoading(false);
  //       } else {
  //         Alert.alert("Notification", "You need to login to view cart.");
  //         // Điều hướng tới trang đăng nhập
  //         router.push("/log_in");
  //       }
  //     } catch (error) {
  //       setLoading(false);
  //       console.error("Error fetching cart data:", error);
  //       Alert.alert("Lỗi", "Không thể lấy dữ liệu giỏ hàng.");
  //     }
  //   };

  //   fetchCartData();
  // }, []);

  // const cartWithProductDetails = dataCart
  //   .map((cartItem) => {
  //     // Kiểm tra xem product có tồn tại không
  //     const product = productList.find(
  //       (prod) => prod.id === cartItem.product_id
  //     );

  //     if (!product) {
  //       return null; // hoặc return một đối tượng mặc định
  //     }

  //     return {
  //       ...cartItem, // thay vì ...dataCart
  //       product: product,
  //     };
  //   })
  //   .filter(Boolean); // Lọc bỏ các item null

  // console.log("====================================");
  // console.log("item selected: ", selectedItems);
  // console.log("====================================");

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="py-2 h-[75vh]">
        <View className="">
          {loading && (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color="#00bdd6" />
            </View>
          )}
          {cartItems.map(
            (item) =>
              item &&
              item.product && ( // Thêm kiểm tra null
                <CartProduct
                  key={item.id}
                  id={item.id}
                  name={item.product.name || "Name product"}
                  img={item.product.img || "image product"}
                  // status={item.product.status || "status product"}
                  price={item.product.price || 0}
                  quantity={item.quantity || 1}
                  isSelected={selectedItems.includes(item.id)} // Truyền trạng thái được chọn
                  onSelect={(isSelected) =>
                    handleSelectItem(
                      item.id,
                      isSelected,
                      item.product.price,
                      item.quantity
                    )
                  }
                  // handleDelete={handleDelete}
                  onDelete={() => {
                    // Callback khi xóa thành công
                    setCartItems(prev => prev.filter(cartItem => cartItem.id !== item.id));
                  }}
                  onUpdateTotal={handleUpdateTotal}
                />
              )
          )}
        </View>
      </ScrollView>

      <View className="px-2 py-3 w-full border-t-2 mt-3 h-[20vh]">
        <View className="flex-row">
          <View className="flex-row justify-between items-center w-full">
            <Text className="font-psemibold text-base">Voucher</Text>

            <TouchableOpacity
              className="flex flex-row justify-between items-center"
              // onPress={toggleModal}
            >
              <Text className="text-base font-pregular my-3 text-gray-400">
                Select voucher or enter code
              </Text>
              <AntDesign name="right" size={20} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <CheckBox checked={isSelectAll} onPress={handleSelectAll} />
            <Text>All</Text>
          </View>
          <View className="flex flex-row items-center">
            <Text className="font-pregular text-base">
              Total: $
              {totalPrice.toFixed(2)}
            </Text>
            <Link
              href={{
                pathname: "/details/Checkout",
                params: {
                  selectedItems: JSON.stringify(
                    cartItems.filter(item => selectedItems.includes(item.id))
                  ),
                  totalPrice,
                  title: "Checkout",
                },
              }}
              asChild
            >
              <TouchableOpacity
                className={`${
                  selectedItems.length === 0 ? "bg-gray-400" : "bg-[#00bdd6]"
                } rounded-sm`}
                disabled={selectedItems.length === 0}
              >
                <Text className="font-pregular text-base w-full text-white text-center p-3">
                  Buy now
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
