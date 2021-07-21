import React from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import GoogleMap from '../screens/GoogleMap';
import MyOrder from '../screens/MyCart';
import MyProfile from '../screens/MyProfile';
import Icon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/FontAwesome';
import ProductDetails from '../screens/ProductDetails';
import DrawerNavigator from './DrawerNavigator';
import OnBoaredScreens from '../screens/OnBoaredScreens';
import StackNavigation from './StackNavigation';
import CheckOutScreen from '../screens/CheckOutScreen';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const getRouteNameHome = route => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';
    switch (routeName) {
      case 'Cart':
      case 'Schedulescreen':
      case 'Checkout':
      case 'Thanku':
        return false;

      default:
        return true;
    }
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Home"
        component={StackNavigation}
        options={({route}) => {
          return {
            tabBarVisible: getRouteNameHome(route),
            tabBarIcon: ({color, size}) => (
              <Icon name="md-home" color={color} size={size} />
            ),
          };
        }}
        // options={{
        //   tabBarLabel: 'Home',
        //   tabBarIcon: ({color, size}) => (
        //     <Icon name="md-home" color={color} size={size} />
        //   ),
        // }}
      />
      <Tab.Screen
        name="Adress"
        component={ProductDetails}
        options={{
          tabBarLabel: 'Adress',
          tabBarIcon: ({color, size}) => (
            <FIcon name="map-marker" color={color} size={size} />
          ),
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Order"
        component={MyOrder}
        options={{
          tabBarLabel: 'Order',

          tabBarIcon: ({color, size}) => (
            <FIcon name="shopping-cart" color={color} size={size} />
          ),
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={CheckOutScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="md-person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <MyTabs />
      {/* <OnBoaredStack /> */}
    </NavigationContainer>
  );
};

export default TabNavigator;
