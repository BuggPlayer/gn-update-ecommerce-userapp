import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import GoogleMap from '../screens/GoogleMap';
import MyOrder from '../screens/MyOrder';
import CategoryComponent from '../components/CategoryComponent';
import SubcategorieScreen from '../screens/SubcategorieScreen';
import OnBoaredScreens from '../screens/OnBoaredScreens';
import ProductDetails from '../screens/ProductDetails';
import Allproducts from '../screens/Allproducts';
import MyCart from '../screens/MyCart';
import CheckOutScreen from '../screens/CheckOutScreen';
import OrderDetails from '../components/OrderDetails';
import ProductList from '../screens/ProductList';

const Stack = createStackNavigator();

export const OnBoaredStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="onboared" component={OnBoaredScreens} />
    </Stack.Navigator>
  );
};

const Mystack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={MyCart} />
      <Stack.Screen name="Order" component={MyOrder} />
      <Stack.Screen name="Subcat" component={SubcategorieScreen} />
      {/* <Stack.Screen name="Adress" component={GoogleMap} /> */}
      <Stack.Screen name="Details" component={ProductDetails} />
      <Stack.Screen name="All" component={Allproducts} />
      <Stack.Screen name="Checkout" component={CheckOutScreen} />
      <Stack.Screen name="OrderDetail" component={OrderDetails} />
      <Stack.Screen name="ProductList" component={ProductList} />
    </Stack.Navigator>
  );
};

const StackNavigation = () => {
  return <Mystack />;
};

export default StackNavigation;
