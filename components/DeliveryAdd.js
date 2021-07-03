import React from "react";
import { Text, View } from "react-native";


const DeliveryAdd = () => {
  return (
    <View style={{ borderWidth: 1, padding: 20, margin: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            justifyContent: "flex-start",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Delivery Address
        </Text>
        <Text style={{ fontSize: 13, fontWeight: "bold", color: "green" }}>
          Choose Addres
        </Text>
      
      </View>
      <View  style={{padding:5,margin:5}}>
          <Text>google addres</Text>
          <Text>manual addres from user</Text>
        </View>
          
    </View>
  );
};

export default DeliveryAdd;
