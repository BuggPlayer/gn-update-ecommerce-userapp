import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
  Modal,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const Loader = props => {
  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={props.visible}>
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size="large" color="rgb(242,158,1)" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Loader;
