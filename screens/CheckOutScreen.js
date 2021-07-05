import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import DeliveryAdd from '../components/DeliveryAdd';
import DeliveryType from '../components/DeliveryType';
import TotalAmount from '../components/TotalAmount';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import BackButton from '../components/UI/BackButton';

const CheckOutScreen = props => {
  return (
    <View style={{backgroundColor: 'red', flex: '1'}}>
      <View>
        <Text>CheckOutScreen</Text>
      </View>
    </View>
  );
};

export default CheckOutScreen;
