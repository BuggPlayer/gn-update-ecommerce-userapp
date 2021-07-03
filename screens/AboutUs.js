import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";


const AboutUs = (props) => {
  const [prodcut, setProdcut] = React.useState("");
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 45,
        }}
      >
        <Image
          source={require("../assets/Image/images.jpg")}
          style={{ height: 100, width: 100 }}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 12, color: "gray", textAlign: "center" }}>
        (you can add upto 4 prodcut images)
      </Text>
      <View style={{ width: "90%", marginHorizontal: 15, margin: 10 }}></View>
      <Text>pppppppppp{prodcut}</Text>
    </View>
  );
};

export default AboutUs;
