import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CountDown from "react-native-countdown-component";
import {
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
//import { HomeStack } from "./HomeStack";
import Home from "../screens/Home";

const GetOtp = (props) => {
  const [counter, SetCounter] = React.useState(180);
  const [disabled, setDisabled] = React.useState(false);
  const [home, sethome] = React.useState(false);
  const [fdigit, setfdigit] = React.useState(null);
  const [sigit, setsigit] = React.useState(null);
  const [tdigit, settdigit] = React.useState(null);
  const [fourdigit, setfourdigit] = React.useState(null);
  const [fivedigit, setfivedigit] = React.useState(null);
  const [sixdigit, setsixdigit] = React.useState(null);

  const code = `${fdigit}${sigit}${tdigit}${fourdigit}${fivedigit}${sixdigit}`;

  const resendOTP = () => {
    props.getOtp();
    setDisabled(false);
  };

  const verifyOtp = async () => {
    if (
      fdigit === null ||
      sigit === null ||
      tdigit === null ||
      fourdigit === null ||
      fivedigit === null ||
      sixdigit === null
    ) {
      alert("filled all code");
    } else {
      try {
        const con = await props.confirm.confirm(code);
        if (con) {
          sethome(true);
        } else {
          alert("wrong OTP");
        }
      } catch (error) {
        alert("Invalid Code");
      }
    }
  };
  return (
    <ImageBackground
      source={require("../OtpAuth/image/authScreen.png")}
      style={{  flex: 1 }}
    >
      {!home && (
        <View>
          <View style={{  justifyContent:"center" , marginTop:240}}>
            {/* <Image
              source={require("../OtpAuth/image/authScreen.png")}
              style={{ height: 150, width: 150, marginHorizontal: hp("10%") }}
            /> */}
            <Text
              style={{
                fontSize: hp("3%"),
                alignSelf: "center",
                fontWeight: "bold",
                margin: hp("2%"),
              }}
            >
              OTP Verification
            </Text>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <Text style={{ color: "gray" }}>Entert the OTP sent </Text>
              <Text style={{ fontWeight: "bold" }}> {props.phone}</Text>
            </View>

            <View
              style={{
                alignSelf: "center",
                marginVertical: hp("6%"),
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                placeholder=""
                maxLength={1}
                placeholderTextColor="black"
                onChangeText={(digit) => setfdigit(digit)}
                keyboardType="phone-pad"
                style={{
                  borderBottomWidth: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "center",
                  height: hp("8%"),
                  width: wp("10%"),
                  padding: hp("1%"),
                  margin: hp("1%"),
                }}
              />

              <TextInput
                placeholder=""
                maxLength={1}
                onChangeText={(digit) => setsigit(digit)}
                placeholderTextColor="black"
                keyboardType="phone-pad"
                style={{
                  borderBottomWidth: 1,
                  height: hp("8%"),
                  width: wp("10%"),
                  padding: hp("1%"),
                  margin: hp("1%"),
                }}
              />
              <TextInput
                placeholder=""
                maxLength={1}
                onChangeText={(digit) => settdigit(digit)}
                placeholderTextColor="black"
                keyboardType="phone-pad"
                style={{
                  borderBottomWidth: 1,
                  height: hp("8%"),
                  width: wp("10%"),
                  padding: hp("1%"),
                  margin: hp("1%"),
                }}
              />
              <TextInput
                placeholder=""
                maxLength={1}
                onChangeText={(digit) => setfourdigit(digit)}
                placeholderTextColor="black"
                keyboardType="phone-pad"
                style={{
                  borderBottomWidth: 1,
                  height: hp("8%"),
                  width: wp("10%"),
                  padding: hp("1%"),
                  margin: hp("1%"),
                }}
              />
              <TextInput
                maxLength={1}
                placeholder=""
                onChangeText={(digit) => setfivedigit(digit)}
                placeholderTextColor="black"
                keyboardType="phone-pad"
                style={{
                  borderBottomWidth: 1,
                  height: hp("8%"),
                  width: wp("10%"),
                  padding: hp("1%"),
                  margin: hp("1%"),
                }}
              />
              <TextInput
                maxLength={1}
                placeholder=""
                onChangeText={(digit) => setsixdigit(digit)}
                placeholderTextColor="black"
                keyboardType="phone-pad"
                style={{
                  justifyContent: "center",
                  borderBottomWidth: 1,
                  height: hp("8%"),
                  width: wp("10%"),
                  padding: hp("1%"),
                  margin: hp("1%"),
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              // marginBottom: hp("2%"),
            }}
          >
            <Text>Dont receive OTP ? </Text>

            {!disabled && (
              <CountDown
                key={1}
                until={counter}
                size={15}
                onFinish={() => setDisabled(() => true)}
                separatorStyle={{ color: "red", marginTop: -19 }}
                digitStyle={{ backgroundColor: "#FFF" }}
                digitTxtStyle={{ color: "black", marginTop: -19 }}
                timeToShow={["M", "S"]}
                showSeparator
                timeLabels={{ m: "", s: "" }}
              />
            )}
            {disabled && (
              <TouchableOpacity onPress={resendOTP}>
                <Text style={{ color: "orange" }}>RESEND OTP</Text>
              </TouchableOpacity>
            )}
          </View>
          <Button
            onPress={verifyOtp}
            buttonStyle={{
              backgroundColor: "#6365bf",
              borderRadius: 10,
              alignSelf: "center",
              marginVertical: disabled ? 8 : -8,
              paddingHorizontal: 28,
              paddingVertical: 15,
            }}
            title="VERIFY AND PROCEED"
          />
        </View>
      )}
      {home && <Home />}
    </ImageBackground>
  );
};

export default GetOtp;
