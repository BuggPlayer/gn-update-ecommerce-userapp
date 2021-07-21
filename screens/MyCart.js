import React from 'react';
import {ScrollView, View , TouchableOpacity} from 'react-native';
import {Color} from '../assets/Color';
import CartItem from '../components/CartItem';

import Totalcal from '../components/Totalcal';
import BottomButton from '../components/UI/BottomButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const MyCart = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: Color.backgroundColor,
        marginHorizontal: wp('3'),
        marginVertical: hp('2'),
      }}>
          <TouchableOpacity
            onPress={() => props?.navigation?.goBack()}
            style={{
              backgroundColor: Color.buttonColor,
              width: hp('5%'),
              height: hp('5%'),
              borderRadius: wp('50%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="arrow-back" size={25} color="white" />
          </TouchableOpacity>
      <Totalcal />
      <CartItem />

      <BottomButton navigation={props.navigation} />
    </View>
  );
};

export default MyCart;
