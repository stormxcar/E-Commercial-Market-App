import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Favorites = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Recommended products</Text>
          <View>{/* show list product card watched */}</View>
        </View>

        <View>
          <TouchableOpacity>
            <Text>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Continue shopping</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text>Your favorites</Text>
          <TouchableOpacity>
            <Text>See all</Text>
            {/* icon */}
          </TouchableOpacity>
        </View>
        <View>
          <View>{/* show list product card favorite */}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorites;

const styles = StyleSheet.create({});
