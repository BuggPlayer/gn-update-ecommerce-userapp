import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const BottomButton = props => {
  console.log('props', props);
  const totalPrice = useSelector(state => state.products.total);

  return (
    <View
      style={{
        backgroundColor: 'white',
     
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 5,
        paddingVertical: hp(2),
        alignItems: 'center',
        // height: 60,
        // margin: 10,
        // marginTop: 110,
      }}>
      <View style={{}}>
        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
          {totalPrice}
        </Text>
        <Text style={{textAlign: 'center', fontSize: 12}}>Cart total </Text>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Schedulescreen')}
        style={{
          backgroundColor: 'green',
          height: hp(6),
          width: wp(35),
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginVertical: hp(1),
          }}>
          Place order
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomButton;
