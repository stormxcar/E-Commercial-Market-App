import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React, { useEffect , useState} from "react";
import ProductShowList_2 from "../../components/ProductShowList_2";
import SearchBox from "../../components/SearchBox";
import { useNavigation, useRoute } from "@react-navigation/native";

const ProductList_2 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { categoryName } = route.params;

  const data = [{ key: "header" }, { key: "content" }];
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (categoryName) {
      navigation.setOptions({ title: categoryName });
    }
  }, [categoryName]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          if (item.key === "header") {
            return <></>;
          } else {
            return (
              <>
                 <SearchBox setSearchQuery={setSearchQuery} />
                 <ProductShowList_2 searchQuery={searchQuery} />
              </>
            );
          }
        }}
      />
    </SafeAreaView>
  );
};

export default ProductList_2;

const styles = StyleSheet.create({});
