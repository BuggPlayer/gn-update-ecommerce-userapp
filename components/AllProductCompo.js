import React from 'react';
import {Button, Image, Text, View, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { FlatGrid } from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import SimilarProductComp from './SimilarProductComp';

const AllProductCompo = (props) => {
  const product = useSelector((state) => state.product.items);

  return (
    <View>
      <FlatGrid
      style={{padding:-6}}
        itemDimension={130}
        spacing={10}
        data={product}
        renderItem={({item}) => {
          return <SimilarProductComp items={item}  navigation={props.navigation} />;
        }}
      />
    </View>
  );
};

export default AllProductCompo;
