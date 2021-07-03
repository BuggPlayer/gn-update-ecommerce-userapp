import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import PButton from "./UI/PButton";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";

//redux
import { useDispatch, useSelector } from "react-redux";
import * as productaction from "../store/actions/ProductAction";

const CartItem = (props) => {
  const Cart = useSelector((state) => state.product.addedItems);
  const totalPrice = useSelector((state) => state.product.total);

  const dispatch = useDispatch();

  return (
    <>
      {Cart.map((data, i) => {
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              marginHorizontal: 10,
              margin: 3,
              borderRadius: 2,
              padding: 5,
              borderWidth: 0.1,
            }}
          >
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text>{data.title}</Text>
                <Text>
                  {" "}
                  ₹{data.price} x {data.quantity}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <PButton
                  onpress={(id) => dispatch(productaction.addToCart(data.id))}
                >
                  +
                </PButton>
                <View
                  style={{
                    //  alignItems: "center",
                    borderRadius: hp("1%"),
                    margin: hp("1%"),
                  }}
                >
                  <Text style={{ alignSelf: "center", fontSize: 15 }}>
                    {data.quantity}
                  </Text>
                </View>
                <PButton
                  onpress={(id) => dispatch(productaction.subtractQty(data.id))}
                >
                  -
                </PButton>
              </View>
              <TouchableOpacity
                onPress={(id) => {
                  dispatch(productaction.removeCart(data.id));
                }}
                style={{
                  padding: 5,
                }}
              >
                <AntDesign name="delete" color={"red"} size={25} />
              </TouchableOpacity>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{}}>{data.price * data.quantity}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </>
  );
};

export default CartItem;
