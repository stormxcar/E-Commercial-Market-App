import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import React , { useState , useEffect} from "react";
import { AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { useRoute, useNavigation } from "@react-navigation/native";

const Reviews = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {title} = route.params;

  useEffect(() => {
    if(title){
      navigation.setOptions({title:title})
    }
  }, [title])

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex flex-row justify-between items-center p-3">
          <TouchableOpacity className="border-2 flex-row border-[#00bdd6] p-3 flex-1 items-center justify-center">
            <Text className="text-base font-pmedium text-[#00bdd6]">All</Text>
            <Text className="text-base font-pmedium text-[#00bdd6]">(999)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleModal}
            className="bg-gray-200 flex-1 p-3 items-center justify-center"
          >
            <Text className="text-base font-pmedium">Star</Text>
          </TouchableOpacity>
          <Modal
            isVisible={isModalVisible}
            onBackdropPress={toggleModal}
            className="m-0 justify-end"
          >
            <View className="bg-white rounded-t-3xl h-auto p-4 w-full items-center">
              <View className="w-full flex justify-between items-center flex-row">
                <Text className="w-full text-base font-psemibold border-b-[1px] border-gray-300 py-3">
                  Filter number of star review
                </Text>
              </View>
              <View className="w-full mt-4">
               
              </View>
              <TouchableOpacity
                onPress={toggleModal}
                className="bg-[#00BDD6] p-2 rounded-lg mt-3"
              >
                <Text className="text-sm font-pregular text-white">Done</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>

        <View className="pt-4 pb-5 flex flex-col px-3">
          <View className="flex flex-row w-full justify-between border-b-[1px] py-3 border-gray-200 ">
            <View className="flex-row flex-1">
              <Image
                source={{ uri: "https://picsum.photos/200" }}
                className="border-2 w-10 h-10 rounded-full mr-3"
                width={40}
                height={40}
                resizeMode="contain"
              />
              <View className="">
                <Text className="text-base font-semibold">Joijjd</Text>
                <View className="flex flex-row mt-2 mb-4">
                  <AntDesign name="star" size={20} color="orange" />
                  <AntDesign name="star" size={20} color="orange" />
                  <AntDesign name="star" size={20} color="orange" />
                  <AntDesign name="star" size={20} color="orange" />
                  <AntDesign name="star" size={20} color="orange" />
                </View>
                <Text className="text-sm font-pregular break-words mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing...
                </Text>
                <View className="flex-row items-center gap-2 mt-2 ">
                  <AntDesign name="like2" size={20} color="gray" />
                  <Text className="text-sm font-pregular">Useful</Text>
                  <Text className="text-sm font-pregular">(99)</Text>
                </View>
              </View>
            </View>
            <Text className="text-sm font-pregular ml-3">A day ago</Text>
          </View>

          <View className="flex flex-row w-full justify-between border-b-[1px] py-3 border-gray-200 ">
            <View className="flex-row flex-1">
              <Image
                source={{ uri: "https://picsum.photos/200" }}
                className="border-2 w-10 h-10 rounded-full mr-3"
                width={40}
                height={40}
                resizeMode="contain"
              />
              <View className="">
                <Text className="text-base font-semibold">Joijjd</Text>
                <View className="flex flex-row mt-2 mb-4">
                  <AntDesign name="star" size={20} color="orange" />
                  <AntDesign name="star" size={20} color="orange" />
                  <AntDesign name="star" size={20} color="orange" />
                  <AntDesign name="star" size={20} color="orange" />
                  <AntDesign name="star" size={20} color="orange" />
                </View>
                <Text className="text-sm font-pregular break-words mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing...
                </Text>
                <View className="flex-row items-center gap-2 mt-2 ">
                  <AntDesign name="like2" size={20} color="gray" />
                  <Text className="text-sm font-pregular">Useful</Text>
                  <Text className="text-sm font-pregular">(99)</Text>
                </View>

                <View className="flex-row items-center gap-2 mt-2 flex-wrap">
                  <Image
                    source={{ uri: "https://picsum.photos/200" }}
                    className="w-28 h-28 rounded-md mt-3"
                  />
                  <Image
                    source={{ uri: "https://picsum.photos/201" }}
                    className="w-28 h-28 rounded-md mt-3"
                  />
                  <Image
                    source={{ uri: "https://picsum.photos/202" }}
                    className="w-28 h-28 rounded-md mt-3"
                  />
                  <Image
                    source={{ uri: "https://picsum.photos/204" }}
                    className="w-28 h-28 rounded-md mt-3"
                  />
                </View>
              </View>
            </View>
            <Text className="text-sm font-pregular ml-3">A day ago</Text>
          </View>

          <View>
            <TouchableOpacity className="flex-row items-center justify-center bg-[#00bdd6] p-3 rounded-md mt-3">
              <Text className="text-base font-pmedium text-white">
                See More
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Reviews;

const styles = StyleSheet.create({});
