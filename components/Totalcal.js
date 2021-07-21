import React from 'react';
import {Text, View} from 'react-native';

/// redux
import {useSelector} from 'react-redux';
import {Color} from '../assets/Color';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Totalcal = props => {
  const totalPrice = useSelector(state => state.products.total);

  return (
    <View
      style={{
        // flex: 1,
        backgroundColor: Color.cardColor,

        borderRadius: 10,
        // borderWidth: 0.5,
        paddingHorizontal: wp(3),
        borderColor: 'red',
        marginVertical: hp(3),
        paddingVertical: hp(2),
        // marginHorizontal: wp(2),
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal:wp(2)
          //   padding: 3,
        }}>
        <Text style={{fontSize: hp(2)}}>Subtotal</Text>
        <Text   style={{ fontSize:hp(2)}} >{totalPrice}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: hp(1),
          paddingHorizontal:wp(2)
        }}>
        <Text style={{fontSize: hp(2)}}>Total Product discount </Text>
        <Text style={{color: 'green' , fontSize:hp(2)}}>- 100.00</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: hp(1),
          paddingHorizontal:wp(2)
        }}>
        <Text style={{ fontSize:hp(2)}}  >Delivery Charge</Text>
        <Text style={{color: 'red', fontWeight: 'bold', fontSize: 16}}>
          Free
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderTopWidth: 1,
          margin: 3,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Total</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{totalPrice}</Text>
      </View>
    </View>
  );
};

export default Totalcal;
