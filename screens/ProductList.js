import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import BookmarkIcon from 'react-native-vector-icons/Ionicons';
import {Color} from '../../assets/constant/Constant';

const ProductList = props => {
  console.log('prp', props.item);
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('Details')}>
      <View
        style={{
          backgroundColor: 'pink',
          // height: 100,
          paddingHorizontal: wp(4),
          borderRadius: 10,
          marginVertical: hp(1),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: hp(1.5),
          }}>
          <View style={{}}>
            {/* <Text
              style={{fontSize: hp(2.7), fontWeight: 'bold', color: 'white'}}>
              Full-Stack Designer
            </Text> */}

            {/* <View
              style={{
                flexDirection: 'row',
                marginVertical: hp(1.5),
                alignItems: 'center',
              }}>
              <Text style={{fontSize: hp(2.2), color: 'white'}}>
                $ 30k-70k/years
              </Text>
              <View
                style={{
                  // borderWidth: 2,
                  marginHorizontal: wp(3),
                  backgroundColor: 'gray',

                  borderRadius: 8,
                  height: hp(5),
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    // paddingVertical: hp(),
                    paddingHorizontal: wp(4),
                    color: 'white',
                  }}>
                  Full time
                </Text>
              </View>
            </View> */}

            <View style={{flexDirection: 'row', marginVertical: hp(1)}}>
              <Image
                style={{height: hp(10), width: wp('20')}}
                source={{uri: props.item.image}}
              />
              <View style={{marginHorizontal: wp(2), marginVertical: hp(1)}}>
                <Text style={{fontSize: hp(2), color: 'white'}}>
                  {props.item.name}
                </Text>
                <Text style={{fontSize: hp(2), color: 'white'}}>New Dehli</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              // backgroundColor: 'pink',
              justifyContent: 'space-between',

              paddingVertical: wp(2),
              alignItems: 'flex-end',
              // height: 100,
            }}>
            <BookmarkIcon
              style={{}}
              name="md-bookmark-outline"
              size={30}
              color={'white'}
            />
            <Text style={{fontSize: hp(1.8), color: 'white'}}>3 Day Ago</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductList;
