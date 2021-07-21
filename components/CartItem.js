import React from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import PButton from './UI/PButton';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/MaterialIcons';

//redux
import {useDispatch, useSelector} from 'react-redux';

import {addToCart, subtractQty, removeCart} from '../store/actions/cartAction';
import {Color} from '../assets/Color';

const CartItem = props => {
  const Cart = useSelector(state => state.products.addedItems);
  const totalPrice = useSelector(state => state.products.total);

  const dispatch = useDispatch();

  return (
    <FlatList
      data={Cart}
      renderItem={data => {
        return (
          <View
            style={{
              backgroundColor: Color.cardColor,
              marginHorizontal: wp(2),
              borderRadius: 2,
              // borderWidth: 0.1,
              justifyContent: 'space-between',
              // alignItems:"center"
            }}>
            <View
              style={{
                paddingHorizontal: wp(3),
                paddingVertical: hp(1.5),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text>{data.item.name}</Text>
                <Text>
                  ₹{data.item.price} x {data.item.quantity}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: wp(7),
                }}>
                <PButton onpress={id => dispatch(addToCart(data.item.id))}>
                  +
                </PButton>
                <View
                  style={{
                    //  alignItems: "center",
                    // borderRadius: hp('1%'),
                    // margin: hp('1%'),
                    marginHorizontal: wp(2),
                  }}>
                  <Text style={{alignSelf: 'center', fontSize: hp(2)}}>
                    {data.item.quantity}
                  </Text>
                </View>
                <PButton onpress={id => dispatch(subtractQty(data.item.id))}>
                  -
                </PButton>
              </View>
              <TouchableOpacity
                onPress={id => {
                  dispatch(removeCart(data.item.id));
                }}
                style={{
                  // padding: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <AntDesign name="delete" color={Color.buttonColor} size={25} />
              </TouchableOpacity>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: hp(2.5)}}>
                  {data.item.price * data.item.quantity}
                </Text>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
};

export default CartItem;
