import React from 'react';
import {ScrollView, View} from 'react-native';
import CartItem from '../components/CartItem';

import Totalcal from '../components/Totalcal';
import BottomButton from '../components/UI/BottomButton';

const MyCart = props => {
  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <Totalcal />
      <CartItem />

      <BottomButton navigation={props.navigation} />
    </View>
  );
};

export default MyCart;
