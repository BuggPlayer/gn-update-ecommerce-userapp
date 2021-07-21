import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '../assets/Color';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CheckOutScreen = props => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: Color.backgroundColor,
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View style={{marginVertical: hp(3), paddingHorizontal: wp(3)}}>
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
          <Text style={{marginVertical: hp(2), fontSize: hp(2.5)}}>
            Delivery Details
          </Text>
          <View
            style={{
              backgroundColor: Color.cardColor,
              paddingHorizontal: wp(2),
              paddingVertical: hp(2),
            }}>
            <Text style={{fontSize: hp(2)}}>selected date and day</Text>
            <Text style={{fontSize: hp(2), marginVertical: hp(1)}}>
              Schedule Delivery:afternoon
            </Text>
          </View>

          <Text style={{marginVertical: hp(2), fontSize: hp(2.5)}}>
            Delivery Address
          </Text>
          <View
            style={{
              backgroundColor: Color.cardColor,
              paddingHorizontal: wp(2),
              paddingVertical: hp(2),
            }}>
            <Text style={{fontSize: hp(2)}}>name of the person</Text>
            <Text style={{fontSize: hp(2), marginVertical: hp(1)}}>
              Address by google map or manually
            </Text>
            <Text style={{fontSize: hp(2), marginVertical: hp(1)}}>
              Contact no :0123456789
            </Text>
          </View>

          <Text style={{marginVertical: hp(2), fontSize: hp(2.5)}}>
            Payment Method
          </Text>
          <View
            style={{
              backgroundColor: Color.cardColor,
              paddingHorizontal: wp(2),
              paddingVertical: hp(2),
            }}>
            <Text style={{fontSize: hp(2)}}>COD only</Text>
          </View>

          <Text style={{marginVertical: hp(2), fontSize: hp(2.5)}}>
            cart summary
          </Text>
          <View
            style={{
              backgroundColor: Color.cardColor,
              paddingHorizontal: wp(2),
              paddingVertical: hp(2),
            }}>
            <Text style={{fontSize: hp(2)}}>cart amount:200</Text>
            <Text style={{fontSize: hp(2), marginVertical: hp(1)}}>
              total save: 10
            </Text>

            <Text style={{fontSize: hp(2), marginVertical: hp(1)}}>
              total pay: 190
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            paddingVertical: hp('1'),
            //   backgroundColor: 'green',
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Thanku')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Color.buttonColor,
              width: wp('85%'),
              borderRadius: 5,
              height: hp('7%'),
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Roboto-Medium',
                fontWeight: 'bold',
              }}>
              Proceed To Pay
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CheckOutScreen;
