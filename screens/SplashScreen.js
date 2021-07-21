import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Color} from '../assets/Color';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SplashScreen = props => {
  const [isVisible, setisVisible] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      //   requestLocationPermission();
      props.navigation.navigate('Otpscreen');
      setisVisible(false);
    }, 3000);
  }, []);
  return (
    <View
      style={{
        backgroundColor: Color.headerColor,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{}}>
        <Text style={{fontSize: hp(4)}}>Splash Screen</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
