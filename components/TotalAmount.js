import React from "react";
import { Text, View } from "react-native";

const TotalAmount = () => {
  return (
    <View
      style={{ padding: 20, margin: 20, borderRadius: 5, borderWidth: 0.1,  }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 18 }}> Cart amount </Text>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}> 1000</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 4,
        }}
      >
        <Text style={{ fontSize: 18 }}> Deliver charges </Text>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "red" }}>
          FREE
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 4,
        }}
      >
        <Text style={{ fontSize: 18 }}> Total saved </Text>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "red" }}>
          -100
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 20,
          alignSelf:"center"
        }}
      >
        <Text style={{ fontSize: 18 }}> To pay(saved 100) </Text>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}> 2000</Text>
      </View>
    </View>
  );
};

export default TotalAmount;
