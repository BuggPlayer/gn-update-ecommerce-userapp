import React from "react";
import { Text, TextInput, View } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialIcons";

const ManualAddress = () => {
  return (
    <View style={{ padding: hp("2%"), marginTop: 40 }}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Delivery Area</Text>
        <Text
          style={{
            height: 40,
            backgroundColor: "azure",

            borderWidth: 1,
            padding: 5,
            margin: 5,
          }}
        >
          from google map
        </Text>
      </View>

      <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 5 }}>
        Full Address
      </Text>

      <View>
        <TextInput
          placeholder="Flat number"
          placeholderTextColor="black"
          style={{
            height: 40,
            backgroundColor: "azure",
            fontSize: 20,
            padding: 10,
            margin: 10,
          }}
        />

        <TextInput
          placeholder="Land Mark"
          placeholderTextColor="black"
          style={{
            height: 40,
            backgroundColor: "azure",
            fontSize: 20,
            padding: 10,
            margin: 10,
          }}
        />
      </View>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 5 }}>
        Tag this adress
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginHorizontal: 10,
        }}
      >
        <Icon name="house" size={25} color="black" />
        <Icon name="house" size={25} color="black" />
        <Icon name="house" size={25} color="black" />
      </View>
    </View>
  );
};

export default ManualAddress;
