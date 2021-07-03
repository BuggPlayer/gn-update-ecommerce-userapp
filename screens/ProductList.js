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
    <View>
      <View
        style={{
          backgroundColor: '#c5ed8a',
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
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Details')}>
                <Image
                  style={{height: hp(12), width: wp('20')}}
                  source={{uri: props.item.image}}
                />
              </TouchableOpacity>
              <View style={{marginHorizontal: wp(2), marginVertical: hp(1)}}>
                <Text style={{fontSize: hp(2), color: 'black'}}>
                  {props.item.name}
                </Text>

                <Text style={{fontSize: hp(2), color: 'black'}}>
                  {props.item.weight}
                </Text>

                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: hp(2),
                      color: '#000',
                      fontWeight: 'bold',
                    }}>
                    ₹ {props.item.price}
                  </Text>

                  <Text
                    style={{
                      textDecorationLine: 'line-through',
                      marginHorizontal: wp(1),
                    }}>
                    ₹ {props.item.mrp}
                  </Text>
                </View>
                <Text style={{fontSize: hp(2), color: 'black'}}>
                  {props.item.brand}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              // backgroundColor: 'pink',
              justifyContent: 'space-around',
              alignItems: 'flex-end',
              // height: 100,
            }}>
            <BookmarkIcon
              style={{}}
              name="md-bookmark-outline"
              size={30}
              color={'black'}
            />
            <View
              style={{
                borderColor: 'black',
                borderRadius: 100,
                backgroundColor: 'white',
                height: hp(4),
                width: hp(4),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: hp(2.5), color: 'black'}}>+</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductList;
