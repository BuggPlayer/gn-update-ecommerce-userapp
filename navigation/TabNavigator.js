import React from "react";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import GoogleMap from "../screens/GoogleMap";
import MyOrder from "../screens/MyCart";
import MyProfile from "../screens/MyProfile";
import Icon from "react-native-vector-icons/Ionicons";
import FIcon from "react-native-vector-icons/FontAwesome";
import ProductDetails from "../screens/ProductDetails";
import DrawerNavigator from "./DrawerNavigator";
import OnBoaredScreens from "../screens/OnBoaredScreens";
import StackNavigation from "./StackNavigation";
import CheckOutScreen from "../screens/CheckOutScreen";


const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Home"
        component={DrawerNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="md-home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Adress"
        component={ProductDetails}
        options={{
          tabBarLabel: "Adress",
          tabBarIcon: ({ color, size }) => (
            <FIcon name="map-marker" color={color} size={size} />
          ),
          tabBarVisible:false
        }}
      />
      <Tab.Screen
        name="Order"
        component={MyOrder}
        options={{
          tabBarLabel: "Order",
        
          tabBarIcon: ({ color, size }) => (
            <FIcon name="shopping-cart" color={color} size={size} />
          ),
          tabBarVisible:false
        }}
      />
      <Tab.Screen
        name="Profile"
        component={CheckOutScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
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
