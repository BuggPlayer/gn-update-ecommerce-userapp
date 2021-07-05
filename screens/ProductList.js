import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import BookmarkIcon from 'react-native-vector-icons/Ionicons';

import PButton from '../components/UI/PButton';
import {useDispatch} from 'react-redux';

import {addToCart, addQty, subtractQty} from '../store/actions/cartAction';
import { Color } from '../assets/Color';
const ProductList = props => {
  console.log('prp', props.item);

  const dispatch = useDispatch();
  const [isViable, setisViable] = React.useState(false);
  const [quantity, setQuantity] = React.useState(0);
  return (
    <View>
      <View
        style={{
          backgroundColor:Color.cardColor ,
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
           

            <View style={{flexDirection: 'row', marginVertical: hp(1)}}>
              <TouchableOpacity
                // onPress={() => props.navigation.navigate('Details')}
                >
                <Image
                  style={{height: hp(12), width: wp('20') , resizeMode:"contain"}}
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
            {props.item.countInStock > 0 ? (
              <TouchableOpacity
                onPress={() => {
                  setisViable(pre => !pre);
                  dispatch(addToCart(props.item.id));
                }}
                style={{
                  flexDirection: 'row',
                  borderColor: 'black',
                  backgroundColor:Color.buttonColor,
                  borderRadius: 100,
                 
                  height: hp(4),
                  width: hp(4),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: hp(2), color: 'black'}}>+</Text>
              </TouchableOpacity>
            ) : (
              <View>
                <Text style={{color: 'red'}}>OUT OF STOCK</Text>
              </View>
            )}
            {isViable === true && (
              <View style={{flexDirection: 'row'}}>
                <PButton
                  onpress={() => {
                    dispatch(addQty(props.item.id));
                    setQuantity(props.item.quantity);
                    // quantity;
                  }}>
                  +
                </PButton>
                <View
                  style={{
                    backgroundColor:Color.buttonColor,
                    marginHorizontal: hp(1),

                    alignItems: 'center',
                    justifyContent: 'center',
                    width: hp(4),
                    height: hp(4),
                    borderRadius: hp('50%'),
                  }}>
                  <Text style={{fontSize: hp('2.5%')}}>{quantity}</Text>
                </View>
                <PButton
                  onpress={() => {
                    dispatch(subtractQty(props.item.id));
                    setQuantity(props.item.quantity);
                    if (quantity === 1) {
                      setisViable(false);
                    }
                  }}>
                  -
                </PButton>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductList;
