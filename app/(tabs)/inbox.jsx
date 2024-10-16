import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import React from "react";
import SearchBox from "../../components/SearchBox";
import MessageNotify from "../../components/MessageNotify";

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

  const dataMessage = [
    {
      id: 1,
      name: "Product 1",
      status: "new message",
      img: "https://picsum.photos/200",
      time: "10:00",
    },
    {
      id: 2,
      name: "Product 2",
      status: "new message",
      img: "https://picsum.photos/200",
      time: "10:00",
    },
    {
      id: 3,
      name: "Product 3",
      status: "new message",
      img: "https://picsum.photos/200",
      time: "10:00",
    },
  ];
  return (
    <SafeAreaView>
      <SearchBox />
      <View className="flex flex-row justify-between px-5 w-full">
        {dataCategory.map((item) => (
          <TouchableOpacity
            key={item.id}
            className="flex flex-col items-center p-3 w-[94px] mb-3 mr-3 rounded-lg"
          >
            <View className="bg-purple-200 rounded-full flex p-4 mb-3">
              <Image
                className="w-7 h-7 m-2"
                source={{ uri: item.img }}
                resizeMode="cover"
              />
            </View>
            <Text className="font-pregular text-xs text-center flex-wrap">
              {item.categoryName}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View className="px-5">
        <Text className="text-base font-pmedium">Messages</Text>
        <View>
          <FlatList
            data={dataMessage}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <MessageNotify
                  nameFrom={item.name}
                  img={item.img}
                  status={item.status}
                  time={item.time}
                />
              );
            }}
            className="pt-3"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Inbox;

const styles = StyleSheet.create({});
