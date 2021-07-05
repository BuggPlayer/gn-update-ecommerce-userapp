import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import PButton from '../components/UI/PButton';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Test = (props) => {
  const [isViable, setisViable] = React.useState(false);
  const [quantity, setQuantity] = React.useState(0);

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
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flexDirection: 'row'}}>
        <Button
          title="ADD"
          onPress={
            () => addtocart(props.items.id)
            //setQuantity(props.items.quantity)
          }
        />

        {isViable === true && (
          <>
            <PButton>+</PButton>
            <View
              style={{
                backgroundColor: 'green',
                marginHorizontal: hp(1),

                alignItems: 'center',
                justifyContent: 'center',
                width: hp(5),
                height: hp(5),
                borderRadius: hp('50%'),
              }}>
              <Text style={{fontSize: hp('3%')}}>{quantity}</Text>
            </View>
            <PButton>-</PButton>
          </>
        )}
      </View>
    </View>
  );
};

export default Test;
