import React from 'react';
import { Modal, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const PitButton = ({ isModalVisible, handleModal }) => {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={handleModal}>
          <Button
            title='Done'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pitModal: {
    height: "100%",
    width: "100%",
  },
  testText: {
    marginTop: "50%",
  },
});

export default PitButton;
