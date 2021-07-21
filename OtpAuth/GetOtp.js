import React, {useState} from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CountDown from 'react-native-countdown-component';
import {
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Button} from 'react-native-elements';
//import { HomeStack } from "./HomeStack";
import Home from '../screens/Home';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const GetOtp = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  console.log('value', value);
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
      alert('filled all code');
    } else {
      try {
        const con = await props.confirm.confirm(code);
        if (con) {
          sethome(true);
        } else {
          alert('wrong OTP');
        }
      } catch (error) {
        alert('Invalid Code');
      }
    }
  };
  const CELL_COUNT = 6;
  return (
    <ImageBackground
      source={require('../OtpAuth/image/authScreen.png')}
      style={{flex: 1}}>
      {!home && (
        <View>
          <View style={{justifyContent: 'center', marginTop: 240}}>
            {/* <Image
              source={require("../OtpAuth/image/authScreen.png")}
              style={{ height: 150, width: 150, marginHorizontal: hp("10%") }}
            /> */}
            <Text
              style={{
                fontSize: hp('3%'),
                alignSelf: 'center',
                fontWeight: 'bold',
                margin: hp('2%'),
              }}>
              OTP Verification
            </Text>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Text style={{color: 'gray'}}>Entert the OTP sent </Text>
              <Text style={{fontWeight: 'bold'}}> {props.phone}</Text>
            </View>

            <View
              style={{
                alignSelf: 'center',
                marginVertical: hp('6%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFiledRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              // marginBottom: hp("2%"),
            }}>
            <Text>Dont receive OTP ? </Text>

            {!disabled && (
              <CountDown
                key={1}
                until={counter}
                size={15}
                onFinish={() => setDisabled(() => true)}
                separatorStyle={{color: 'red', marginTop: -19}}
                digitStyle={{backgroundColor: '#FFF'}}
                digitTxtStyle={{color: 'black', marginTop: -19}}
                timeToShow={['M', 'S']}
                showSeparator
                timeLabels={{m: '', s: ''}}
              />
            )}
            {disabled && (
              <TouchableOpacity onPress={resendOTP}>
                <Text style={{color: 'orange'}}>RESEND OTP</Text>
              </TouchableOpacity>
            )}
          </View>
          <Button
            onPress={verifyOtp}
            buttonStyle={{
              backgroundColor: '#6365bf',
              borderRadius: 10,
              alignSelf: 'center',
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
const styles = StyleSheet.create({
  root: {padding: 20, minHeight: 300},
  title: {textAlign: 'center', fontSize: 30},
  codeFiledRoot: {marginTop: 30},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    marginHorizontal: 5,
  },
  focusCell: {
    borderColor: '#000',
  },
});
