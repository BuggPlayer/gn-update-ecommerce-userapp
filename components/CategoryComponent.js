import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CategoryComponent = props => {
  console.log("cc", props.item);

  
  return (
    <TouchableOpacity
      style={{paddingHorizontal: wp(2), paddingVertical: hp(1)}}
      // onPress={() =>
      //   props.navigation.navigate("Subcat", {
      //     subcategory: props.items.subcategory,
      //   })
      // }

      // onPress={() =>
      //   props.navigation.navigate(
      //     props.screenname,
      //     props.screenname === 'Subcat'
      //       ? {
      //           subcategory: props.items.subcategory,
      //         }
      //       : {subcategory: props.items.title},
      //   )
      // }
      onPress={props.onpress}>
      <View
        style={{
          padding: hp('1%'),
          //borderRadius: 5,
          width: wp('46%'),
          alignItems: 'center',
          elevation: hp('.1%'),
          borderRadius: hp('1%'),
          ...props.style,
        }}>
        <Image
          source={{
            uri: props.items.image,
          }}
          style={{
            height: hp('20%'),
            width: wp('38%'),
            // borderRadius: hp('2%'),
            backgroundColor: 'white',
            resizeMode:"contain",
            borderRadius:5,
            ...props.style,
     
            // position:"relative"
          }}
        />

        <View>
          <Text
            style={{
              fontSize: hp(2),
              fontWeight: 'bold',
              marginVertical: hp(1),
            }}>
            {props.items.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryComponent;
