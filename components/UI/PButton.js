import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const PButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onpress}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
          width: wp("10%"),

          borderRadius: hp("1%"),
          margin: hp("1%"),
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,

          elevation: 1,
        }}
      >
        <Text style={{ fontSize: hp("3%") }}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PButton;
