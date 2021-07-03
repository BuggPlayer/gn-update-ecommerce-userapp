import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
  FlatList
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {useSelector} from 'react-redux';
import PButton from '../components/UI/PButton';
import OffPercent from '../components/OffPercent';
import SimilarProductComp from '../components/SimilarProductComp';

const ProductDetails = props => {
  const product = useSelector(state => state.product.items);
  console.log('ptodfofoof', product);
  const [add, setadd] = React.useState(false);
  return (
    <ScrollView>
      <View>
        <View
          style={{
            alignContent: 'center',
            padding: 25,
            marginTop: 25,
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://funkylife.in/wp-content/uploads/2021/06/whatsapp-dp-pic-24-scaled.jpg',
            }}
            style={{
              height: hp('33%'),
              width: wp('55%'),
              borderRadius: 5,
              padding: 15,
            }}
          />
        </View>
        <View style={{backgroundColor: 'white', margin: 10, borderRadius: 4}}>
          <View style={{padding: hp('2%'), alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              {/* {props.items.title} */}
              title
            </Text>
            <Text> product Brand</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View style={{flexDirection: 'row', marginHorizontal: 10}}>
              <Text style={{fontSize: 20, color: 'green', fontWeight: 'bold'}}>
                {/* ₹{props.items.mrp} */}
                mrp
              </Text>
              <Text style={{textDecorationLine: 'line-through', fontSize: 16}}>
                {/* ₹{props.items.price} */}
                price
              </Text>
            </View>
            <OffPercent
              style={{
                paddingHorizontal: hp('1%'),
                backgroundColor: '#32CD32',
                width: wp('22%'),
                borderRadius: hp('.5%'),
                height: hp('5%'),
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
              off={'40%'}
            />
            {!add && (
              <View style={{marginTop: hp('3%')}}>
                <Button title="ADD" onPress={() => setadd(true)} />
              </View>
            )}

            {add && (
              <View style={{flex: 1, flexDirection: 'row'}}>
                <PButton onpress={() => console.log('--')}>-</PButton>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    //  justifyContent: "space-between",
                    // width: wp("10%"),

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
                  <Text style={{alignSelf: 'center', fontSize: 20}}>1</Text>
                </View>
                <PButton onpress={() => console.log('++')}>+</PButton>
              </View>
            )}
          </View>

          <Text style={{margin: 5, fontSize: 18}}>Units </Text>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              width: wp('20%'),
              padding: hp('1.5%'),
              margin: hp('3%'),
              alignItems: 'center',
            }}>
            <Text>
              {/* {props.items.kg} */}
               Kg</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 5}}>
          <Text style={{fontSize: 18, padding: 10}}>Similar Product</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={product}
            renderItem={({item}) => {
              return (
                <SimilarProductComp
                  items={item}
                  navigation={props.navigation}
                />
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;
