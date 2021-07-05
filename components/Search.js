import React from 'react';
import {TextInput, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '../assets/Color';

const List = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

const Search = () => {
  return (
    <View
      style={{
        // paddingHorizontal: 20,
        // backgroundColor: Color.buttonColor,
        // marginVertical: hp(1),
        
      }}>
      <View
        style={{
          backgroundColor: "white",
          flexDirection: 'row',
          borderRadius: 8,
        
          paddingHorizontal:wp(2), paddingVertical:hp(1.5)
        }}>
        <Icon
          name="ios-search"
          size={25}
          color="#000"
          style={{alignSelf: 'center', marginLeft: 10}}
        />
        <TextInput
          placeholder="Type here..."
          placeholderTextColor="black"
          style={{fontSize: 18, padding: hp('1.3%'), width: '100%'}}
        />
      </View>
    </View>
  );
};

export default Search;
