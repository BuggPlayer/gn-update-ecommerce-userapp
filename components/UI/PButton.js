import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { Color } from '../../assets/Color';

const PButton = props => {
  return (
    <TouchableOpacity onPress={props.onpress}>
      <View
        style={{
          backgroundColor: Color.buttonColor,

          alignItems: 'center',
          justifyContent: 'center',
          width: hp(4),
          height: hp(4),
          borderRadius: hp('50%'),
        }}>
        <Text style={{fontSize: hp('2.5%'), fontWeight: 'bold'}}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PButton;
