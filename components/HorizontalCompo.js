import React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  Modal,
  TouchableHighlight,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {useDispatch, useSelector} from 'react-redux';

import OffPercent from './OffPercent';
import PButton from './UI/PButton';
import {addToCart, subtractQty, addQty} from '../store/actions/cartAction';

/// product  cart action
import * as productaction from '../store/actions/ProductAction';
import {Color} from '../assets/Color';
const HorizontalCompo = props => {
  const Qty = useSelector(state => state.products.addedItems);
  console.log('qty', Qty);

  const [add, setadd] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [quantity, setQuantity] = React.useState(0);
  const [isViable, setisViable] = React.useState(false);

  const dispatch = useDispatch();
  return (
    <View
      style={{
        marginVertical: hp(1),
        marginHorizontal: wp(2),
      }}>
      <View
        style={{
          // padding: 10,
          backgroundColor: Color.cardColor,
          paddingHorizontal: wp(3),
          paddingVertical: hp(2),
          width: wp('55%'),
          // height:hp(47),
          borderRadius: 5,
          // shadowColor: '#000',
          // elevation: 4,
        }}>
        <TouchableOpacity
        // onPress={() =>
        //   props.navigation.navigate('Details', {
        //     items: props.items,
        //     quantity: quantity,
        //   })
        // }
        >
          <Image
            source={{
              uri: props.items.image,
            }}
            style={{
              height: hp('20%'),
              //width: wp("40%"),
              borderRadius: hp('2%'),
              position: 'relative',
              resizeMode: 'stretch',
              // backgroundColor:"green"
            }}
          />
          <OffPercent
            style={{
              paddingHorizontal: hp('1%'),
              backgroundColor: '#32CD32',
              width: wp('20%'),
              position: 'absolute',
              top: hp('2%'),
              left: hp('2%'),
              //  right:0,
              borderRadius: hp('.5%'),
              height: hp('4%'),
            }}
            off={'35%'}
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: hp(1.8),
              paddingHorizontal: wp(3),
              paddingVertical: hp(0.5),
            }}>
            {props.items.brand}
          </Text>
          <Text style={{fontSize: hp(2), fontWeight: 'bold'}}>
            {props.items.name}
          </Text>

          <View style={{flexDirection: 'row', marginVertical: hp(0.5)}}>
            <Text style={{fontSize: 18, color: '#000', fontWeight: 'bold'}}>
              ₹ {props.items.price}
            </Text>
            <Text style={{textDecorationLine: 'line-through'}}>
              ₹ {props.items.mrp}
            </Text>
          </View>

          <View
            style={
              {
                // marginHorizontal: wp('1%'),
                // flexDirection: 'row',
                // //  margin: hp("1%"),
                // // backgroundColor: '#FFF',
                // width: wp('22%'),
                // borderRadius: hp('1%'),
                // paddingVertical: hp('.5%'),
                // paddingHorizontal: wp('1%'),
              }
            }>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                //  margin: hp("1%"),
              }}
              // onPress={() => {
              //   setModalVisible(true);
              // }}
              // onPress={()=>setModelOpen(true)}
            >
              <Text style={{padding: hp('.2%'), fontSize: hp('2.2%')}}>
                {props.items.weight} gm/kg
              </Text>

              {/* <Image
                source={{
                  uri: 'https://image.flaticon.com/icons/png/512/60/60995.png',
                }}
                style={{
                  height: 15,
                  width: 15,
                  alignSelf: 'center',
                  marginHorizontal: hp('2%'),
                }}
              /> */}
            </TouchableOpacity>
          </View>

          {Qty.filter(items => items.id === props.items.id).length <= 0 && (
            <View style={{marginTop: hp('3%')}}>
              <Button
                title="ADD"
                color={Color.buttonColor}
                onPress={
                  () => {
                    setisViable(pre => !pre);
                    dispatch(addToCart(props.items.id));
                  }
                  //setQuantity(props.items.quantity)
                }
              />
            </View>
          )}
          {/* {!add && (
            <View style={{ marginTop: hp("3%") }}>
              <Button title="ADD" onPress={() => setadd(true)} />
            </View>
          )} */}

          {Qty.filter(items => items.id === props.items.id).length > 0 && (
            <View
              style={{
                flexDirection: 'row',
                marginVertical: hp(2),
                // backgroundColor: 'red',
              }}>
              <PButton
                onpress={() => {
                  dispatch(addQty(props.items.id));
                  setQuantity(props.items.quantity);
                  quantity;
                }}>
                +
              </PButton>
              <View
                style={{
                  backgroundColor: Color.buttonColor,
                  marginHorizontal: hp(1),

                  alignItems: 'center',
                  justifyContent: 'center',
                  width: hp(4),
                  height: hp(4),
                  borderRadius: hp('50%'),
                  marginHorizontal: wp(3),
                }}>
                <Text style={{fontSize: hp('2.5%')}}>{quantity}</Text>
              </View>
              <PButton
                onpress={() => {
                  dispatch(subtractQty(props.items.id));
                  setQuantity(props.items.quantity);
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View
          style={{
            flex: 1,
            width: 260,
            justifyContent: 'center',
            alignSelf: 'center',
            //  backgroundColor: "white",
            //margin:100,
          }}>
          <View
            style={{
              margin: 10,
              backgroundColor: 'white',
              borderWidth: 1,
              borderRadius: 20,
              padding: 20,
              alignItems: 'center',
              elevation: 1,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Available quantities for
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              mongo
            </Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <View
                style={{
                  backgroundColor: 'yellow',
                  borderWidth: 1,
                  padding: 8,
                  borderRadius: 5,
                  margin: 5,
                }}>
                <Text style={{fontSize: 18}}>
                  1 Kg
                  <Text style={{textDecorationLine: 'line-through'}}>
                    -₹ 75
                  </Text>
                  <Text> --₹1300 </Text>
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <View
                style={{
                  backgroundColor: 'yellow',
                  borderWidth: 1,
                  padding: 8,
                  borderRadius: 5,
                  margin: 5,
                }}>
                <Text style={{fontSize: 18}}>
                  500 Gm
                  <Text style={{textDecorationLine: 'line-through'}}>
                    -₹ 75
                  </Text>
                  <Text> --₹1300 </Text>
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <View
                style={{
                  backgroundColor: 'yellow',
                  borderWidth: 1,
                  padding: 8,
                  borderRadius: 5,
                  margin: 5,
                }}>
                <Text style={{fontSize: 18}}>
                  250 Gm
                  <Text style={{textDecorationLine: 'line-through'}}>
                    -₹ 75
                  </Text>
                  <Text> --₹1300 </Text>
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <View
                style={{
                  backgroundColor: 'yellow',
                  borderWidth: 1,
                  padding: 8,
                  borderRadius: 5,
                  margin: 5,
                }}>
                <Text style={{fontSize: 18}}>
                  100 Gm
                  <Text style={{textDecorationLine: 'line-through'}}>
                    -₹ 75
                  </Text>
                  <Text> --₹1300 </Text>
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HorizontalCompo;
