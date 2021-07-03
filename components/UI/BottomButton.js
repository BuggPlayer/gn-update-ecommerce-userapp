import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

const BottomButton = (props) => {
  console.log("props" , props);
  const totalPrice = useSelector((state) => state.product.total);

  return (
    <View
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-around",
        borderRadius: 5,
        height: 60,
        margin: 10,
        marginTop: 110,
      }}
    >
      <View style={{ flex: 1, paddingHorizontal: 30 }}>
        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
          {totalPrice}
        </Text>
        <Text style={{ textAlign: "center", fontSize: 12 }}>Cart total </Text>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Checkout")}
        style={{ backgroundColor: "green", flex: 2, paddingVertical: 10 }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Place order
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomButton;
