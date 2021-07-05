import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '../../assets/constant/Constant';

const Slot = props => {
  return <Text style={{color: 'white'}}>{props.item.item.title}</Text>;
};

export default Slot;
