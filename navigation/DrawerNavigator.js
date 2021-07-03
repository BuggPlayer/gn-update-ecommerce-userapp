import React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Share,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Home from "../screens/Home";
import FIcon from "react-native-vector-icons/FontAwesome";
import ProductDetails from "../screens/ProductDetails";
import ManualAddress from "../screens/ManualAddress";
import StackNavigation from "./StackNavigation";
import MyOrder from "../screens/MyOrder";
import AboutUs from "../screens/AboutUs";
import ShareApp from "../screens/ShareApp";
import HelpandPrivacy from "../screens/HelpandPrivacy";
import Logout from "../screens/Logout";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MyCart from "../screens/MyCart";

function CustomDrawerContent(props) {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#9acd32",
          padding: 5,
        }}
      >
        <Image
          source={{
            uri:
              "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
          }}
          style={{
            height: 80,
            width: 80,
            borderRadius: 20,
            marginTop: 50,
            marginLeft: 10,
          }}
        />
        <View style={{ padding: 5, margin: 10, marginVertical: 60 }}>
          <Text style={{ fontSize: 18 }}>Fiazan khan </Text>
          <Text style={{ color: "gray" }}>fazian@gamil.com</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#9acd32",
          padding: 10,
          borderWidth: 0.5,
          margin: 5,
          borderRadius: 5,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <MaterialIcon name="google-maps" size={25} color="black" />
        <TouchableOpacity style={{}}>
          <Text>User address</Text>
        </TouchableOpacity>
        <Text style={{ color: "green", fontWeight: "bold" }}>CHANGE</Text>
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close Drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
      </DrawerContentScrollView>
    </ScrollView>
  );
}

const Drawernavigation = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawernavigation.Navigator
      backBehavior="history"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawernavigation.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="md-home" color={color} size={size} />
          ),
        }}
        name="Home"
        component={StackNavigation}
      />
      <Drawernavigation.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <FIcon name="shopping-cart" color={color} size={size} />
          ),
        }}
        name="MyOrder"
        component={MyOrder}
      />

      <Drawernavigation.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <FIcon name="shopping-cart" color={color} size={size} />
          ),
        }}
        name="MyCart"
        component={MyCart}
      />

      <Drawernavigation.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcon name="account-details" color={color} size={size} />
          ),
        }}
        name="About Us"
        component={AboutUs}
      />
      <Drawernavigation.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <FIcon name="shopping-cart" color={color} size={size} />
          ),
        }}
        name="Share"
        component={ShareApp}
      />

      <Drawernavigation.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="md-help" color={color} size={size} />
          ),
        }}
        name="Help & privacy"
        component={HelpandPrivacy}
      />

      <Drawernavigation.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcon name="logout" color={color} size={size} />
          ),
        }}
        name="Logout"
        component={Logout}
      />
    </Drawernavigation.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: "#03cafc",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

const DrawerNavigator = () => {
  return <MyDrawer />;
};
export default DrawerNavigator;
