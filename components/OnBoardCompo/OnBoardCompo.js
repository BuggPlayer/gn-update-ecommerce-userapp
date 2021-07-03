import React from "react";
import { Image, StatusBar, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";


import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// data for screens
const data = [
  {
    title: "Welcom",
    text: "Description.\nSay something cool",
    image: require("../../assets/Image/Onboared1.png"),
    bg: "#59b2ab",
  },
  {
    title: "Title 2",
    text: "Other cool stuff",
    // image: require("../../assets/2.jpg"),
    bg: "#febe29",
  },
  {
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    // image: require("../../assets/3.jpg"),
    bg: "#22bcb5",
  },
];

const OnBoardCompo = (props) => {


  const renderItem = ({ item }) => {
    return (
      <View
        style={{
        flex:1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "red",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>{item.title} </Text>
        <Image
          source={item.image}
          style={{ height: hp("30%"), width: wp("100%"), marginVertical: 10 }}
        />
      </View>
    );
  };

  const keyExtractor = (item) => item.title;

  const renderDoneButton = () => {
    return (
      <View>
        <Text>Done</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View>
        <Text>Next</Text>
      </View>
    );
  };
  const renderPrevButton = () => {
    return (
      <View>
        <Text>Pre</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1}}>
      
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        dotStyle={{ backgroundColor: "yellow" }}
        activeDotStyle={{ backgroundColor: "blue" }}
        data={data}
        onDone={props.handelDone}
      />
    </View>
  );
};

export default OnBoardCompo;
