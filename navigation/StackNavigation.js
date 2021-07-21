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
import ScheduleScreen from '../screens/ScheduleScreen';
import ThankuPage from '../screens/ThankuPage';
import SplashScreen from '../screens/SplashScreen';
import OtpScreen from '../OtpAuth/OtpScreen';
import OtpPhoneNo from '../OtpAuth/OtpPhoneNo';
import GetOtp from '../OtpAuth/GetOtp';

const Stack = createStackNavigator();

// export const OnBoaredStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>

//       <Stack.Screen name="onboared" component={OnBoaredScreens} />
//     </Stack.Navigator>
//   );
// };

export const Mystack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={MyCart} />
      <Stack.Screen name="Order" component={MyOrder} />
      <Stack.Screen name="Subcat" component={SubcategorieScreen} />
      <Stack.Screen name="GoogleMap" component={GoogleMap} />
      <Stack.Screen name="Details" component={ProductDetails} />
      <Stack.Screen name="All" component={Allproducts} />
      <Stack.Screen name="Checkout" component={CheckOutScreen} />
      <Stack.Screen name="OrderDetail" component={OrderDetails} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="Schedulescreen" component={ScheduleScreen} />
      <Stack.Screen name="Thanku" component={ThankuPage} />
    </Stack.Navigator>
  );
};

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="splashscreen" component={SplashScreen} />
      <Stack.Screen name="onboared" component={OnBoaredScreens} />
      {/* <Stack.Screen name="Customername" component={C} /> */}
      <Stack.Screen name="Otpscreen" component={OtpScreen} />
      <Stack.Screen name="getOtp" component={GetOtp} />
    </Stack.Navigator>
  );
};

// const StackNavigation = () => {
//   return <Mystack />;
// };

// export default StackNavigation;
