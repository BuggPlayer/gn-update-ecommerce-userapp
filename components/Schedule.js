import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '../../assets/constant/Constant';
import moment from 'moment';
import BellIcon from 'react-native-vector-icons/Fontisto';

const Schedule = (props) => {
  console.log('proos', props);
  // const [isVisible, setisVisible] = useState(false);

  const selectDatahandler = () => {
    console.log('item');
    props.onpress(props.item.id);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={selectDatahandler}
        style={{
          backgroundColor:
            props.item.id === props.selected ? 'yellow' : "#b1f090",
          padding: 10,
          margin: 10,
          width: wp('13'),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          position: 'relative',
        }}>
        {props.item.id === props.selected && (
          <View
            style={{
              position: 'absolute',
              backgroundColor: 'green',
              height: hp(2),
              width: hp(2),
              borderRadius: 50,
              // left:10,
              // Top:10,
              right: 1,
              top: -7,
            }}
          />
        )}
        <Text
          style={{
            fontSize: hp('2.2'),
            color: props.item.id === props.selected ? 'black' : 'white',
          }}>
          {props.item.date}
        </Text>
        <Text style={{color: 'gray'}}>{props.item.day}</Text>
        {props.item.id === props.selected && (
          <BellIcon
            name="bell-alt"
            size={15}
            style={{marginVertical: hp('1')}}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Schedule;
