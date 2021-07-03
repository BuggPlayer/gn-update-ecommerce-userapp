import React from "react";
import { Text, View } from "react-native";
import OnBoardCompo from "../components/OnBoardCompo/OnBoardCompo";
import OnScreen from "../components/OnScreen";
import Home from "../screens/Home";

const OnBoaredScreens = () => {
  const [showOnboared, setOnboared] = React.useState(true);

  const handelOnboaredFinsished = () => {
    setOnboared(false);
  };
  return (
    <View>
      {showOnboared && <OnScreen handelDone={handelOnboaredFinsished} />}
      {!showOnboared && <Home />} 
     
    </View>
  );
};

export default OnBoaredScreens;
