import React from 'react';
import {Text, View, TextInput} from 'react-native';
import {} from 'react-native-gesture-handler';
const OtpPhoneNo = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.6, justifyContent: 'space-evenly'}}>
        <TextInput
          placeholder={'Enter your phone number'}
          style={{
            backgroundColor: 'yellow',
            fontWeight: 'bold',
            alignSelf: 'center',
          }}
        />
      </View>
    </View>
  );
};

export default OtpPhoneNo;
