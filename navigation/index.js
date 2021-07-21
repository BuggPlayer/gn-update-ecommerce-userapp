import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {AppStack, AuthStack, ServiceStack} from './StackNavigation';
// import {MyTabs} from './TabNavigation';
// import {MyDrawer} from './DrawerNavigation';
// import AsyncStorage from '@react-native-community/async-storage';
// import {View, Text, PermissionsAndroid} from 'react-native';
import {AuthStack, Mystack} from '../navigation/StackNavigation';
const Navigator = () => {
  const [user, setUser] = useState(false);

  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const token = await AsyncStorage.getItem('token');
  //         // console.log('token', token);
  //         if (token) setUser(true);
  //       } catch (error) {
  //         console.log('err', error);
  //         setUser(false);
  //       }
  //     })();
  //   }, [user]);

  return (
    <NavigationContainer>{user ? Mystack() : AuthStack()}</NavigationContainer>
  );
};

export default Navigator;
