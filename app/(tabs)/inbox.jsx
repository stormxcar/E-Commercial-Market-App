import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import SearchBox from "../../components/SearchBox";
import MessageNotify from "../../components/MessageNotify";
import { API_DATA } from "../../constants/data";

const Inbox = () => {
  const dataCategory = [
    {
      id: 1,
      img: "https://picsum.photos/200",
      categoryName: "Orders",
    },
    {
      id: 2,
      img: "https://picsum.photos/200",
      categoryName: "Shipping",
    },
    {
      id: 3,
      img: "https://picsum.photos/200",
      categoryName: "Payment Methods",
    },
    {
      id: 4,
      img: "https://picsum.photos/200",
      categoryName: "My feedback",
    },
  ];

  // const dataMessage = [
  //   {
  //     id: 1,
  //     name: "Product 1",
  //     status: "new message",
  //     img: "https://picsum.photos/200",
  //     time: "10:00",
  //   },
  //   {
  //     id: 2,
  //     name: "Product 2",
  //     status: "new message",
  //     img: "https://picsum.photos/200",
  //     time: "10:00",
  //   },
  //   {
  //     id: 3,
  //     name: "Product 3",
  //     status: "new message",
  //     img: "https://picsum.photos/200",
  //     time: "10:00",
  //   },
  // ];
  const [dataMessage, setDataMessage] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_DATA);
      const data = await res.json();
      // Lọc ra dữ liệu của sheet 'inbox' từ JSON trả về
      setDataMessage(data.inbox || []);
    } catch (error) {
      console.error(error);
      setDataInbox([]);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await getData();
    setRefreshing(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView>
      <SearchBox />
      <View className="flex flex-row justify-between px-5 w-full">
        {dataCategory.map((item) => (
          <TouchableOpacity
            key={item.id}
            className="flex flex-col items-center pt-3 w-[50px] mb-1 mr-3 rounded-lg"
          >
            <View className="bg-purple-200 rounded-full flex p-4 mb-3">
              <Image
                className="w-7 h-7 m-2"
                source={{ uri: item.img }}
                resizeMode="cover"
              />
            </View>
            <Text className="font-pregular text-[11px] text-center flex-wrap">
              {item.categoryName}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text className="px-3 pb-3 text-base font-pmedium">Messages</Text>
      <ScrollView
        showsVerticalScrollIndicator={true}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        className="px-3 h-[350px]"
      >
        <View>
        {loading && (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color="#00bdd6" />
            </View>
          )}
          {dataMessage.map((item) => (
            <MessageNotify
              key={item.id}
              nameFrom={item.name}
              img={item.img}
              status={item.status}
              time={item.time}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Inbox;

const styles = StyleSheet.create({});
