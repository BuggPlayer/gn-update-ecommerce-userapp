import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  View,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
//import firebaseConfig from '../../../../Firebase';
//const {firebase, auth} = firebaseConfig();
import {Button} from 'react-native-elements';
import Getotp from './GetOtp';

const OtpScreen = (props) => {
  const [phone, setPhone] = React.useState('');
  const [confirm, setConfirm] = React.useState(null);

  //handle keyboard +918850885962
  const [didKeyboardShow, setKeyboardShow] = React.useState(false);
  React.useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    //  Don't forget to cleanup with remove listeners
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setKeyboardShow(true);
  };

  const _keyboardDidHide = () => {
    setKeyboardShow(false);
  };

  const getOtp = async () => {
    if (phone.length === 13) {
      const confirmation = await auth()
        .signInWithPhoneNumber(phone)
        .catch((err) => console.log(err));

      if (confirmation) {
        setConfirm(confirmation);
        alert('sent');
      }
    } else {
      alert('inValid Phone Number');
    }
  };

  return (
    <>
      {confirm === null && (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground
            source={require('../OtpAuth/image/authScreen.png')}
            style={{flex: 1}}>
            <View
              style={{
                flex: 1,
                marginTop: didKeyboardShow ? hp('7%') : hp('15%'),
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: hp('3%'),
                  alignSelf: 'center',
                  fontWeight: 'bold',

                  margin: hp('3%'),
                }}>
                OTP Verification
              </Text>
              <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <Text style={{color: 'gray'}}>We will send you an </Text>
                <Text style={{fontWeight: 'bold'}}>One Time Password</Text>
              </View>
              <Text style={{color: 'gray', alignSelf: 'center'}}>
                on this mobile number
              </Text>

              <View style={{alignSelf: 'center', marginVertical: hp('6%')}}>
                <Text style={{color: 'gray', fontSize: hp('3%')}}>
                  Enter Mobile Number
                </Text>
                <TextInput

                  onChangeText={(phone) => setPhone(phone)}
                  value={phone}
                  onSubmitEditing={Keyboard.dismiss}
                  placeholder=""
                  placeholderTextColor="black"
                  keyboardType="phone-pad"
                  style={{borderBottomWidth: 1, textAlign: 'center'}}
                />
              </View>
              <Button
                onPress={getOtp}
                buttonStyle={{
                  backgroundColor: '#6365bf',
                  borderRadius: 16,
                  alignSelf: 'center',

                  width: wp('80%'),
                  height: hp('7%'),
                }}
                title="GET OTP"
              />
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      )}
      {confirm !== null && (
        <Getotp phone={phone} confirm={confirm} getOtp={getOtp} />
      )}
    </>
  );
};
export default OtpScreen;
