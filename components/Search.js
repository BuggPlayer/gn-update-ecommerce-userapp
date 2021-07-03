import React from "react";
import {  TextInput, View } from "react-native";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/Ionicons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const List = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

const Search = () => {
  return (
    <View style={{ flex: 1, paddingHorizontal:20}}>
      <Animatable.View
        animation="slideInRight"
        duration={500}
        style={{
          backgroundColor: "#fff",
          flexDirection: "row",
          borderRadius: 10,
        }}
      >
        <Icon
          name="ios-search"
          size={25}
          color="#000"
          style={{ alignSelf: "center", marginLeft: 10 }}
        />
        <TextInput
          placeholder="Type here..."
          placeholderTextColor="black"
          style={{ fontSize: 18, padding: hp("1.3%"), width: "100%" }}
        />
      </Animatable.View>
    </View>
  );
};

export default Search;
