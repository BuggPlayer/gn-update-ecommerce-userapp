import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList, Text, View } from "react-native";
import AllProductCompo from "../components/AllProductCompo";

const Allproducts = (props) => {
  const product = useSelector((state) => state.product.items);

  const newarray = product.filter(
    (data) => data.category === props.route.params.subcategory
  );
  console.log("all pro", newarray);
  return (
    <View>
    
      <FlatList
        data={newarray}
        renderItem={({ item }) => {
          return <AllProductCompo  items={item} />
        }}
      />
    </View>
  );
};

export default Allproducts;
