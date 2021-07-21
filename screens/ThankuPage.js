import React from 'react';
import {View, Text, Button} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Color } from '../assets/Color';
const ThankuPage = props => {
  return (
    <View
      style={{
        backgroundColor: Color.backgroundColor,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{}}>
        <Text style={{fontSize: hp(4)}}>Thank you , visit agian</Text>
      </View>
      <View style={{marginVertical: hp(4)}}>
        <Button
        color={Color.buttonColor}
          title="Go To Home"
          onPress={() => props.navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

export default ThankuPage;
