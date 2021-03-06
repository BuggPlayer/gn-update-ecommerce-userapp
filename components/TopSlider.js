import React from 'react';
import {Image, Text, View} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//redux
import {useDispatch, useSelector} from 'react-redux';

const TopSlider = props => {

  return (
    <View  style={{ }}>
      <View style={{alignItems: 'center', padding: wp(2)}}>
        <Image
          source={require('../assets/Image/Onboared1.png')}
          style={{
            height: hp('28%'),
            width: wp('95%'),
            borderRadius: hp('2%'),
          }}
        />
      </View>
    </View>
  );
};

export default TopSlider;
