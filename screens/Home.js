import React, {useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

import CategoryComponent from '../components/CategoryComponent';
import HorizontalCompo from '../components/HorizontalCompo';
import TopSlider from '../components/TopSlider';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Search from '../components/Search';
import Header from '../navigation/Header/Header';
import {useSelector, useDispatch} from 'react-redux';
import {Getproducts, GetCategory} from '../store/actions/ProductAction';
import {Color} from '../assets/Color';

const Home = props => {
  const banner = useSelector(state => state.products.banner);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Getproducts());
    dispatch(GetCategory());
  }, []);

  const state = useSelector(state => state.products.items);
  const category = useSelector(state => state.products.category);
  console.log('product', state);
  // console.log('category', category);

  const categoryHandler = item => {
    console.log('idd', item);

    props.navigation.navigate('Subcat', {id: item});
  };

  return (
    <ScrollView style={{backgroundColor: Color.backgroundColor}}>
      <View style={{}}>
        <Header title="Home" navigation={props.navigation} />
        <View style={{}}>
          <Search />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={banner}
            renderItem={({item}) => {
              return <TopSlider items={item} />;
            }}
          />

          <Text
            style={{
              fontSize: hp('3%'),
              fontWeight: 'bold',
              marginVertical: hp(1),
              marginHorizontal: hp(2),
            }}>
            Explor by category
          </Text>

          <FlatList
            numColumns={2}
            data={category}
            renderItem={({item}) => {
              return (
                <CategoryComponent
                  screenname={'Subcat'}
                  navigation={props.navigation}
                  items={item}
                  onpress={() => categoryHandler(item)}
                />
              );
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <Text
                style={{
                  fontSize: hp('3%'),
                  fontWeight: 'bold',
                  marginVertical: hp(1),
                  marginHorizontal: hp(1),
                }}>
              Best selling Products
            </Text>
            <TouchableOpacity style={{marginHorizontal: hp('9%')}}>
              <Text
                style={{
                  fontSize: 15,
                  paddingVertical: hp('.7%'),
                  fontWeight: 'bold',
                  margin: hp('1.5%'),
                  borderWidth: hp('.2%'),
                  paddingHorizontal: hp('1.5%'),
                  borderRadius: hp('1%'),
                  color: 'green',
                  borderColor: 'green',
                }}>
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={state}
            renderItem={({item}) => {
              return (
                <HorizontalCompo navigation={props.navigation} items={item} />
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
