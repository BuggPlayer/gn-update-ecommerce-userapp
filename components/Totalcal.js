import React from "react";
import { Text, View } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
/// redux
import {  useSelector } from "react-redux";

const Totalcal = (props) => {
  const totalPrice = useSelector((state) => state.product.total);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        margin: heightPercentageToDP("3%"),
        marginHorizontal: 10,
        marginVertical: 50,
        padding: 25,
        borderRadius: 10,
        borderWidth: 0.5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          //   padding: 3,
        }}
      >
        <Text>Subtotal</Text>
        <Text>{totalPrice}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Total Product discount </Text>
        <Text style={{ color: "green" }}>- 100.00</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: heightPercentageToDP("7%"),
        }}
      >
        <Text>Delivery Charge</Text>
        <Text style={{ color: "red", fontWeight: "bold", fontSize: 16 }}>
          Free
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderTopWidth: 1,
          margin: 3,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Total</Text>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{totalPrice}</Text>
      </View>
    </View>
  );
};

export default Totalcal;
