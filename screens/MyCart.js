import React from "react";
import { ScrollView } from "react-native";
import CartItem from "../components/CartItem";

import Totalcal from "../components/Totalcal";
import BottomButton from "../components/UI/BottomButton";

const MyCart = (props) => {
  return (
    <ScrollView style={{  }}>
      <Totalcal />
      <CartItem />
      <BottomButton navigation={props.navigation} />
    </ScrollView>
  );
};

export default MyCart;
