import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Custombtn = (props) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderRadius: 5,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={props.onpress}
    >
      <Text style={{ fontSize: 16, fontWeight: "bold" }}> ADD</Text>
    </TouchableOpacity>
  );
};

export default Custombtn;
