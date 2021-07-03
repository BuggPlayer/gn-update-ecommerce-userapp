import React from "react";
import { Text, View } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const OffPercent = (props) => {
 
  return (
    <View style={{flexDirection:"row",...props.style}}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>{props.off}</Text>
      <Text
        style={{ marginHorizontal: wp("1%"), fontSize: 16, fontWeight: "bold" }}
      >
        OFF
      </Text>
    </View>
  );
};

export default OffPercent;
