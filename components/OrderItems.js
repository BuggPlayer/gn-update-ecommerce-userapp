import React from "react";
import { View, Text,TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const OrderItems = (props) => {
  return (
    <View
      style={{ padding: 20, borderWidth: 0.5, margin: 10, borderRadius: 15 , marginTop:38}}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Order Id</Text>

        <Text style={{ fontSize: 18, fontWeight: "bold", color: "orange" }}>
          Status
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 18, color: "gray" }}>Items :</Text>
          <View>
            <Text>name , qty and all</Text>
          </View>
        </View>

        <TouchableOpacity  onPress={()=>props.navigation.navigate("OrderDetail")}>
          <Icon name="chevron-right" size={40} color="black" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          //  justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 18, color: "gray" }}>Order Date :</Text>
        <Text>19th Dec,2020</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          //  justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 18, color: "gray" }}>Total Amount:</Text>
        <Text>1203 , By COD</Text>
      </View>
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity>
          <Text style={{ fontSize: 18, color: "green", fontWeight: "bold" }}>
            Track Order
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <MaterialCommunityIcons name="reload" size={20} color="green" />
          <Text
            style={{
              fontSize: 18,
              color: "green",
              fontWeight: "bold",
              margin: 5,
            }}
          >
            Re-order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItems;
