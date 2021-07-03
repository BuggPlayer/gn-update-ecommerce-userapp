import React from "react";
import { Text, View,TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import FIcon from "react-native-vector-icons/FontAwesome";
import EnIcon from "react-native-vector-icons/Entypo";


const DeliveryType = (props) => {
  return (
    <View
      style={{
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 5,
        borderWidth: 0.1,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Select Delivery Type
        </Text>
        <Text style={{ fontSize: 10, fontWeight: "bold" }}>
          <Icon name="md-information-circle-outline" size={25} color="black" />
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 30,
        }}
      >
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <Icon name="md-rocket" size={30} color="black" />
          <Text>xpress</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <FIcon name="calendar" size={30} color="black" />
          <Text>Schedule </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <EnIcon name="shop" size={30} color="black" />
          <Text>Self Pickup </Text>
        </TouchableOpacity>
      </View>
      <Text>hello icons</Text>
    </View>
  );
};

export default DeliveryType;
