import React, {useState} from 'react';
import {Text} from 'react-native';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '../../assets/constant/Constant';

import {ScrollView} from 'react-native';
// import Schedule from '../../components/service/Schedule';
// import Slot from '../../components/service/Slot';

import {FlatList} from 'react-native';
import CheckIcon from 'react-native-vector-icons/AntDesign';

import Modal from 'react-native-modal';

import moment from 'moment';
import Slot from '../components/Slot';
import Schedule from '../components/Schedule';

const data = [
  {
    id: 1,
    title: '08:00  AM',
    image:
      'https://images.vexels.com/media/users/3/148920/isolated/preview/a8016baffbce8083fcc0313f2c904e6e-red-office-chair-clipart-by-vexels.png',
  },
  {
    id: 2,
    title: '09:00  AM',
    image:
      'https://images.vexels.com/media/users/3/148920/isolated/preview/a8016baffbce8083fcc0313f2c904e6e-red-office-chair-clipart-by-vexels.png',
  },
  {
    id: 3,
    title: '10:00  AM',
    image:
      'https://images.vexels.com/media/users/3/148920/isolated/preview/a8016baffbce8083fcc0313f2c904e6e-red-office-chair-clipart-by-vexels.png',
  },
  {
    id: 4,
    title: '11:00  AM',
    image:
      'https://images.vexels.com/media/users/3/148920/isolated/preview/a8016baffbce8083fcc0313f2c904e6e-red-office-chair-clipart-by-vexels.png',
  },
  {
    id: 5,
    title: '12:00  AM',
    image:
      'https://images.vexels.com/media/users/3/148920/isolated/preview/a8016baffbce8083fcc0313f2c904e6e-red-office-chair-clipart-by-vexels.png',
  },
  {
    id: 6,
    title: '01:00  PM',
    image:
      'https://images.vexels.com/media/users/3/148920/isolated/preview/a8016baffbce8083fcc0313f2c904e6e-red-office-chair-clipart-by-vexels.png',
  },
];

const data2 = [
  {
    id: 1,
    title: 'Pay Using Crypto Currency',
  },
  {
    id: 2,
    title: 'Pay Using Fiate',
  },
  {
    id: 3,
    title: 'Cash On Arrive',
  },
];
const dataCalender = [
  {id: 1, date: 1, day: 'M'},
  {id: 2, date: 2, day: 'T'},
  {id: 3, date: 3, day: 'W'},
  {id: 4, date: 4, day: 'Th'},
  {id: 5, date: 5, day: 'Fr'},
  {id: 6, date: 6, day: 'Sa'},
  {id: 7, date: 7, day: 'S'},
];

const getDateList = () => {
  const dateArray = [];
  var now = moment().startOf('month');
  for (let index = moment().date() - 1; index <= now.daysInMonth(); index++) {
    // const element = array[index];
    const dateformate = now.clone().add(index, 'days').format('DD-ddd');
    // console.log('days', now.clone().add(index, 'days').format('DD-ddd'));
    dateArray.push({
      id: index,
      date: dateformate.substring(0, 2),

      day: dateformate.substring(3, 5),
    });
  }
  return dateArray;
};

const ScheduleScreen = props => {
  console.log('props map', props?.route?.params);
  const [isActive, setIsActive] = useState(0);

  const [isModalVisible, setModalVisible] = useState(false);
  const [Show, setShow] = useState('');
  const [selectedId, setselectedId] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const selectHandler = id => {
    console.log('id', id);
    setIsActive(id);
  };

  const secondToggleModal = id => {
    console.log('id', id);
    props.navigation.navigate('paymentPay');
    setShow(id);
    // setsecondModal(!secondModal);

    setModalVisible(!isModalVisible);
  };

  const visibleHandler = () => {
    setisVisible(!false);
  };
  // const truncate = str => {
  //   return str?.length > 10 ? str.substring(0, 41) + ' ...' : str;
  // };

  return (
    <View
      style={{
        backgroundColor: 'gray',
        flex: 1,
        justifyContent: 'space-between',
      }}>
      <ScrollView>
        <View
          style={{
            // backgroundColor: 'pink',
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

          {/* <View style={{marginVertical: hp('2')}}>
            <Text
              style={{
                fontSize: 30,
                fontFamily: 'Caladea-Bold',
                color: 'white',
              }}>
              cart details
            </Text>
          </View> */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Roboto-Medium',
                color: 'white',
                fontWeight: 'bold',
                paddingVertical: hp('2'),
              }}>
              Address for service
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('GoogleMap')}
              style={{
                backgroundColor: '#b1f090',
                width: wp('25'),
                height: hp('6'),
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: wp('3'),
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'Roboto-Regular',
                }}>
                Change
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              //   justifyContent: 'space-between',
              alignItems: 'center',
              //   backgroundColor: 'red',
            }}>
            <View
              style={{
                backgroundColor: '#b1f090',
                width: wp('25'),
                height: hp('6'),
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                // marginHorizontal: wp('3'),
              }}>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: 'Roboto-Regular',
                  color: 'white',
                }}>
                Home
              </Text>
            </View>

            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Roboto-Regular',
                color: 'white',
                paddingVertical: hp('2'),
                marginHorizontal: wp('4'),
              }}>
              {props?.route?.params?.address}
            </Text>
          </View>
          <View
            style={{
              //   backgroundColor: 'red',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: hp('3'),
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Roboto-Medium',
                color: 'white',
              }}>
              Schedule
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Roboto-Regular',
                color: 'gray',
              }}>
              Sept, 2020
            </Text>
          </View>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={getDateList()}
            renderItem={({item}) => {
              return (
                <Schedule
                  item={item}
                  selected={selectedId}
                  onpress={id => setselectedId(id)}
                />
              );
            }}
          />

          <View style={{}}>
            <FlatList
              style={{marginVertical: hp('1')}}
              numColumns={2}
              data={data}
              renderItem={item => (
                <TouchableOpacity
                  onPress={() => selectHandler(item.item.id)}
                  style={{
                    backgroundColor:
                      item.item.id === isActive ? 'orange' : '#b1f090',

                    width: wp('43'),
                    height: hp('8'),
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginVertical: hp('.6'),
                    marginHorizontal: wp('1.5'),
                  }}>
                  <Slot item={item} />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          alignItems: 'center',
          marginVertical: hp('2'),
          //   backgroundColor: 'green',
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Checkout')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'yellow',
            width: wp('90%'),
            borderRadius: 5,
            height: hp('6.5%'),
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Roboto-Medium',
              fontWeight: 'bold',
            }}>
            Proceed To Pay
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        isVisible={isModalVisible}
        onBackButtonPress={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
        backdropOpacity={0.5}
        style={{justifyContent: 'flex-end', margin: 0}}>
        <View
          style={{
            backgroundColor: '#272635',
            height: hp('32'),
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}>
          {data2.map(item => {
            return (
              <View
                style={{
                  // backgroundColor: 'pink',
                  //   justifyContent: 'center',
                  //   alignItems: 'center',
                  borderBottomWidth: 2,
                  paddingVertical: wp('2'),
                  //   justifyContent:"space-between"
                }}>
                <TouchableOpacity
                  onPress={() => secondToggleModal(item.id)}
                  style={{
                    //  backgroundColor: 'red',
                    paddingVertical: hp('2%'),
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginHorizontal: wp('20'),
                    marginVertical: hp('1'),
                  }}>
                  <Text style={{fontSize: hp('2'), color: 'white'}}>
                    {item.title}
                  </Text>
                  {Show === item.id && (
                    <CheckIcon name="check" color="orange" size={20} />
                  )}
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </Modal>
    </View>
  );
};

export default ScheduleScreen;
