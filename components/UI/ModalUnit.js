import React from "react";
import { Text, View, Modal } from "react-native";

const ModalUnit = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>hello</Text>
      <Modal>
        <View style={{flex:1}}>
          <Text> hello modal</Text>
        </View>
      </Modal>
    </View>
  );
};

export default ModalUnit;
