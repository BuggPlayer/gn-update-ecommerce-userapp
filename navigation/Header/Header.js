import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AntDesign} from '../../Constant/Icons';

import Bellicon from 'react-native-vector-icons/Ionicons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import {Color} from '../../assets/Color';

const Header = ({navigation, title}) => {
  const Cart = useSelector(state => state.products.addedItems);
  const [show, setShow] = React.useState(false);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Color.headerColor,
        paddingVertical: hp(1.6),
        paddingHorizontal: wp(3),
        alignItems: 'center',
      }}>
      <TouchableOpacity style={{}} onPress={() => navigation.toggleDrawer()}>
        <Icon name="md-menu" size={25} color="black" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{marginRight: 10, position: 'relative'}}>
            {/* <MaterialIcons name="alarm-note" color={'black'} size={30} /> */}
            <Bellicon name="notifications" size={26} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 11,
              position: 'absolute',
              left: 14,
              width: 15,
              height: 15,
              marginTop: -5,
              backgroundColor: 'orange',
              borderRadius: 100,
              textAlign: 'center',
            }}>
            2
          </Text>

          {/* <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <FIcon name="shopping-cart" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "red",
            borderRadius: 15,
            padding: 2,
            width: 18,
            alignItems: "center",
            justifyContent: "center",
            height: 15,
          }}
        >
          <Text
            style={{ fontSize: 12, fontWeight: "bold", textAlign: "center" }}
          >
            {Cart.length || 0}
          </Text> */}

          <TouchableOpacity
            onPress={() => navigation.navigate('Cart')}
            style={{position: 'relative'}}>
            <AntDesign
              style={{paddingHorizontal: wp(1.5)}}
              name="shoppingcart"
              color={'black'}
              size={26}
            />
            <Text
              style={{
                fontSize: 11,
                position: 'absolute',
                right: -5,
                width: 17,
                height: 17,
                marginTop: -4,
                backgroundColor: 'orange',
                borderRadius: 100,
                textAlign: 'center',
              }}>
              {Cart.length || 0}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 25,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-end',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    letterSpacing: 1,
  },
  icons: {
    position: 'absolute',
    left: 16,
    top: 15,
  },
});

export default Header;
