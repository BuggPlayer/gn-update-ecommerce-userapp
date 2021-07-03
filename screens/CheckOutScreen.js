import React from "react";
import { ScrollView } from "react-native";
import { Button } from "react-native-elements";
import DeliveryAdd from "../components/DeliveryAdd";
import DeliveryType from "../components/DeliveryType";
import TotalAmount from "../components/TotalAmount";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import BackButton from "../components/UI/BackButton";


const CheckOutScreen = (props) => {
  return (
    <ScrollView  >
      <BackButton  />
      <TotalAmount />
      <DeliveryType />
      <DeliveryAdd />
      
      <Button
        buttonStyle={{
          backgroundColor: "green",
          borderRadius: 16,
          alignSelf: "center",
          width: wp("70%"),
          height: hp("8%"),
        }}
        title="Continue to payment"
      />
    </ScrollView>
  );
};

export default CheckOutScreen;
