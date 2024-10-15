import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import HeaderShown from "../components/HeaderShown";
import SearchBox from "../../components/SearchBox";

const Search = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <SearchBox />
        <View>
          <Text>Trending search category recently</Text>
          <View>{/* show list category card */}</View>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Show product</Text>
          </TouchableOpacity>
          <View>{/* show list product card */}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
