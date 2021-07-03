import React from "react";
import { Image, Text, View } from "react-native";

import AppIntroSlider from "react-native-app-intro-slider";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const data = [
  {
    title: "Welcom",
    text: "Your satisfaction our responsibility service is our priority",
    image: require("../assets/Image/Onboared1.png"),
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

const OnScreen = (props) => {
  const renderItem = ({ item }) => {
    return (
      <View>
        <View style={{ padding: 20, marginVertical: hp("10%") }}>
          <Text
            style={{ fontSize: 35, fontWeight: "bold", textAlign: "center" }}
          >
            {item.title}
          </Text>
          <Text style={{ fontSize: 18, textAlign: "center", padding: 10 }}>
            {item.text}
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={item.image}
            style={{ height: hp("30%"), width: "100%" }}
          />
        </View>
      </View>
    );
  };
  const keyExtractor = (item) => item.title;

  const renderDoneButton = () => {
    return (
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 16 }}>Done</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 16 }}>Next</Text>
      </View>
    );
  };
  const renderPrevButton = () => {
    return (
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 16 }}>Prev</Text>
      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        dotStyle={{ backgroundColor: "gray" }}
        activeDotStyle={{ backgroundColor: "black" }}
        data={data}
        onDone={props.handelDone}
        //  onDone={props.handelDone}
      />

      {/* <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 35, fontWeight: "bold", textAlign: "center" }}>
          Welcome
        </Text>
        <Text style={{ fontSize: 18, textAlign: "center", padding: 10 }}>
          Your satisfaction our responsibility service is our priority
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/Image/Onboared1.png")}
          style={{ height: hp("30%"), width: "100%" }}
        />
      </View> */}
    </View>
  );
};

export default OnScreen;
