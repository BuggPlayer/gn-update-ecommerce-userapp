import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const BackButton = (props) => {
  return (
    <TouchableOpacity   onPress={() => props.navigation.goBack()} >
      <Icon name="back" size={25} color="black" />
    </TouchableOpacity>
  );
};

export default BackButton;
