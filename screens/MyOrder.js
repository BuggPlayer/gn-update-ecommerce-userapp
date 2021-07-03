import React from "react";
import { Text, View } from "react-native";
import OrderItems from "../components/OrderItems";

const MyOrder = (props) => {
  return (
    <View >
     <OrderItems navigation={props.navigation}   />
    </View>
  );
};

export default MyOrder;
