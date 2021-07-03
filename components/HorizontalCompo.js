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

/// product  cart action
import * as productaction from '../store/actions/ProductAction';
const HorizontalCompo = props => {
  const Qty = useSelector(state => state.product.addedItems);
  console.log('qty', Qty);

  const [add, setadd] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [quantity, setQuantity] = React.useState(0);
  const [isViable, setViable] = React.useState(false);

  const dispatch = useDispatch();

  const addtocart = id => {
    console.log(id);
    dispatch({
      type: 'ADD_TO_CART',
      id: id,
    });

    dispatch({
      type: 'IF_ADDED',
      id: id,
    });
    setViable(true);
    setQuantity(props.items.quantity);
  };
  return (
    <View style={{padding: 10}}>
      <View
        style={{
          // padding: 10,
          paddingHorizontal: wp(3),
          paddingVertical: hp(2),
          width: wp('55%'),
          borderRadius: 5,
          // shadowColor: '#000',

          elevation: 4,
        }}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('Details', {
              items: props.items,
              quantity: quantity,
            })
          }>
          <Image
            source={{
              uri: props.items.image,
            }}
            style={{
              height: hp('22%'),
              //width: wp("40%"),
              borderRadius: hp('2%'),
              position: 'relative',
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
          <Text style={{ fontSize: hp(2), fontWeight: 'bold', textAlign: 'center'}}>
            {props.items.title}
          </Text>
          <View style={{flexDirection: 'row', marginVertical:hp(1)}}>
            <Text style={{fontSize: 18, color: '#000', fontWeight: 'bold'}}>
              ₹ {props.items.price}
            </Text>
            <Text style={{textDecorationLine: 'line-through'}}>
              ₹ {props.items.mrp}
            </Text>
          </View>

          <View
            style={{
              marginHorizontal: wp('1%'),
              flexDirection: 'row',
              //  margin: hp("1%"),

              // backgroundColor: '#FFF',
              width: wp('22%'),
              borderRadius: hp('1%'),
              paddingVertical: hp('.5%'),
              paddingHorizontal: wp('1%'),
            }}>
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
                onPress={
                  () => addtocart(props.items.id)
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
            <View style={{flex: 1, flexDirection: 'row'}}>
              <PButton
                onpress={() => {
                  dispatch(productaction.subtractQty(props.items.id));
                  setQuantity(props.items.quantity);
                  if (quantity === 1) {
                    setViable(false);
                  }
                }}>
                -
              </PButton>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  borderRadius: hp('1%'),
                  margin: hp('1%'),
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.18,
                  shadowRadius: 1.0,
                  elevation: 1,
                }}>
                <Text style={{alignSelf: 'center', fontSize: 20}}>
                  {quantity}
                </Text>
              </View>
              <PButton
                onpress={() => {
                  dispatch(productaction.addQty(props.items.id));
                  setQuantity(props.items.quantity);
                  quantity;
                }}>
                +
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
