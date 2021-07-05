import React from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import PButton from './UI/PButton';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';

//redux
import {useDispatch, useSelector} from 'react-redux';

import {addToCart, subtractQty, removeCart} from '../store/actions/cartAction';

const CartItem = props => {
  const Cart = useSelector(state => state.products.addedItems);
  const totalPrice = useSelector(state => state.products.total);

  const dispatch = useDispatch();

  return (
    <FlatList
      data={Cart}
      renderItem={data => {
        console.log('cart data ', data);
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              marginHorizontal: wp(2),
              borderRadius: 2,
              borderWidth: 0.1,
            }}>
            <View
              style={{
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text>{data.item.name}</Text>
                <Text>
                  ₹{data.item.price} x {data.item.quantity}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <PButton onpress={id => dispatch(addToCart(data.item.id))}>
                  +
                </PButton>
                <View
                  style={{
                    //  alignItems: "center",
                    borderRadius: hp('1%'),
                    margin: hp('1%'),
                  }}>
                  <Text style={{alignSelf: 'center', fontSize: 15}}>
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
                  padding: 5,
                }}>
                <AntDesign name="delete" color={'red'} size={25} />
              </TouchableOpacity>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{}}>{data.item.price * data.item.quantity}</Text>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
};

export default CartItem;
