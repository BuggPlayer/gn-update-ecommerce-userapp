import React from 'react';

import {View, ScrollView, Button, Text} from 'react-native';

import CartItem from './CartItem';
import TotalAmount from './TotalAmount';

const OrderDetails = (props) => {
  return (
    <ScrollView
      style={{flex: 1, margin: 10, padding: 20, backgroundColor: 'gray'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'yellow'}}>
          Order id :{' '}
        </Text>
        <Text>3333</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'yellow'}}>
          Order Date :{' '}
        </Text>
        <Text>19th Dec , 2020</Text>
      </View>

      <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 15}}>
        Delivery Details
      </Text>

      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 10,
          margin: 10,
        }}>
        <Text>19th Dec , 2020</Text>
        <Text>xpress Delivery</Text>
        <Text style={{fontWeight: 'bold'}}>Order status : best choosing</Text>
      </View>

      <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 15}}>
        Delivery Address
      </Text>

      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 20,
          margin: 10,
        }}>
        <Text>Khan faizan</Text>
        <Text>complete addrtes </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>Contact Number: </Text>
          <Text style={{fontWeight: 'bold', color: 'orange'}}>666555005</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 5,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 15}}>
          Summary
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            marginTop: 15,
            color: 'red',
          }}>
          COD-unpaid
        </Text>
      </View>
      <View>
        <TotalAmount />
      </View>
      <Button title="NExt" />
    </ScrollView>
  );
};

export default OrderDetails;
