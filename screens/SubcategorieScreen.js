import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  FlatList,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import CategoryComponent from '../components/CategoryComponent';
import TopSlider from '../components/TopSlider';

import {FlatGrid} from 'react-native-super-grid';
import Header from '../navigation/Header/Header';
import ProductList from './ProductList';

import {useSelector} from 'react-redux';

/////////////////////////
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

///////////////////////////////

const SubcategorieScreen = props => {
  console.log('subcat', props.route.params.id);
  // const subdata = props.route.params.subcategory;
  // console.log('data log', subdata);

  // const banner = useSelector(state => state.product.banner);
  const state = useSelector(state => state.products.items);
  console.log('starte', state);

  const [categoryproducts, setcategoryproducts] = useState([]);

  useEffect(() => {
    const filtercatg = state.filter((item, index) => {
      return item.category._id === props.route.params.id.id;
    });
    setcategoryproducts({...filtercatg});
    // console.log('filtertctg', filtercatg);
  }, []);

  const filtercategory = Object.values(categoryproducts);
  // console.log('categoryproducts', array);
  return (
    <View style={{backgroundColor: 'gray', flex: 1}}>
      <ScrollView>
        <ImageBackground
          source={{
            uri: props.route.params.id.image,
          }}
          style={{
            resizeMode: 'center',

            height: hp('35'),
            width: wp('100'),
            // backgroundColor:"green"
          }}>
          <View
            style={{
              // backgroundColor: 'green',
              justifyContent: 'space-between',
              height: hp('40'),
            }}>
            <View
              style={{
                //  backgroundColor: 'green',
                marginHorizontal: wp('4'),
                marginVertical: hp('2'),
              }}>
              <TouchableOpacity
                onPress={() => props?.navigation?.goBack()}
                style={{
                  backgroundColor: 'gray',
                  width: hp('5%'),
                  height: hp('5%'),
                  borderRadius: wp('50%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="arrow-back" size={25} color="white" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                //  backgroundColor: 'green',
                marginHorizontal: wp('4'),
                marginVertical: hp('2'),
              }}>
              <Text
                style={{fontSize: hp('3'), color: 'white', fontWeight: 'bold'}}>
                {props.route.params.id.name}
              </Text>
              <Text
                style={{
                  fontSize: hp('2'),
                  color: 'white',
                  marginVertical: hp('1'),
                  textAlign: 'left',
                  fontWeight: 'bold',
                }}>
                {/* Advanced Diploma in Beauty Therapy and {'\n'}Hair care */}
              </Text>
            </View>
          </View>
        </ImageBackground>

        <View
          style={{
            //   backgroundColor: 'green',
            marginHorizontal: wp('4'),
            marginVertical: hp('2'),
          }}>
          <Text style={{fontSize: hp('3'), color: 'white', fontWeight: 'bold'}}>
            Select A {props.route.params.id.name}
          </Text>
        </View>
        <View style={{marginVertical: hp('2'), marginHorizontal: wp('4')}}>
          <FlatList
            data={filtercategory}
            renderItem={({item}) => {
              // console.log('item111', item);
              return <ProductList item={item} navigation={props.navigation} />;
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SubcategorieScreen;
