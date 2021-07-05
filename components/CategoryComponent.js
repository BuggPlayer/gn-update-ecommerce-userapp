import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Color } from '../assets/Color';

const CategoryComponent = props => {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: wp(2),
        paddingVertical: hp(1),
      
      }}
      onPress={props.onpress}>
      <View
        style={{
          backgroundColor: Color.cardColor,
          // padding: hp('1%'),
          //borderRadius: 5,
          // paddingHorizontal:wp),
          width: wp('44%'),
          alignItems: 'center',
          // elevation: hp('.1%'),
          borderRadius: hp('.5'),
          paddingVertical: hp(1),
        }}>
        <Image
          source={{
            uri: props.items.image,
          }}
          style={{
            height: hp('16%'),
            width: wp('40%'),
            // borderRadius: hp('2%'),

            resizeMode: 'center',
            borderRadius: 50,

            // ...props.style,

            // position:"relative"
          }}
        />

        <Text
          style={{
            fontSize: hp(2),
            fontWeight: 'bold',
          }}>
          {props.items.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryComponent;
