import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Ionicons from "@expo/vector-icons/Ionicons";

const ProductDetail = () => {
  return (
    <SafeAreaView>
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        className="border-2 w-30 h-20"
        width={30}
        height={30}
        resizeMode="contain"
      />
      <View>
        <Text>$ 59</Text>
        <View>
          <AntDesign name="star" size={24} color="black" />
          <Text>4.5</Text>
          <Text>(99 reviews)</Text>
        </View>
      </View>

      <View>
        <Text>Description</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint
        </Text>
      </View>

      <View>
        <View>
          <AntDesign name="creditcard" size={24} color="black" />
          <Text>Payment</Text>
        </View>
        <View>
          <AntDesign name="creditcard" size={24} color="black" />
          <Text>Payment</Text>
        </View>
        <View>
          <AntDesign name="creditcard" size={24} color="black" />
          <Text>Payment</Text>
        </View>
        <View>
          <AntDesign name="creditcard" size={24} color="black" />
          <Text>Payment</Text>
        </View>
      </View>

      <View>
        <View>
          <Text>Reviews</Text>
          <TouchableOpacity>
            <Text>See all</Text>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View>
          <View>
            <Text>4.5/5</Text>
            <Text>(99 reviews)</Text>
            <View>
              <AntDesign name="star" size={24} color="black" />
              <AntDesign name="star" size={24} color="black" />
              <AntDesign name="star" size={24} color="black" />
              <AntDesign name="star" size={24} color="black" />
              <AntDesign name="star" size={24} color="black" />
            </View>
          </View>

          <View>
            <Text>4.5/5</Text>
          </View>
        </View>

        <View>
          <View>
            <View>
              <Image
                source={{ uri: "https://picsum.photos/200" }}
                className="border-2 w-10 h-10 rounded-full"
                width={30}
                height={30}
                resizeMode="contain"
              />
              <View>
                <Text>Joijjd</Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </Text>
              </View>
            </View>
            <Text>A day ago</Text>
          </View>
          <View>
            <View>
              <Image
                source={{ uri: "https://picsum.photos/200" }}
                className="border-2 w-10 h-10 rounded-full"
                width={30}
                height={30}
                resizeMode="contain"
              />
              <View>
                <Text>Joijjd</Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </Text>
              </View>
            </View>
            <Text>A day ago</Text>
          </View>
        </View>
      </View>

      <View>
        <View>
          <Text>Relevants products</Text>
          <TouchableOpacity>
            <Text>See all</Text>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList />
        </View>

        <View>
          <View>
            <Ionicons name="notifications-outline" size={24} color="black" />
            <Text>Notifications</Text>
          </View>
          <View>
            <Text>Toggle</Text>
          </View>
        </View>
      </View>

      <View>
        <Ionicons name="cart-outline" size={24} color="black" />
        <TouchableOpacity>
          <Text>Buy now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
