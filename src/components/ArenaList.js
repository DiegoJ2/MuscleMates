// ArenaList.js
import React, { useState } from 'react';
import { SafeAreaView, FlatList, Button, StyleSheet } from 'react-native';
import PitModal from './pitModal';
import { ArenaData } from '../assets/data/ARENADATA'; 

const ArenaList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Done" onPress={handleModal} color="white" />
      {isModalVisible && (
        <PitModal
          data={ArenaData} // Pass all the data to the modal
          isModalVisible={isModalVisible}
          handleModal={handleModal}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top:400,
    marginLeft: "auto",
    marginRight: "auto",
    color:'white',
    backgroundColor:'#0760FF',
    width:'25%',
borderRadius:'50%',
  },
});

export default ArenaList;
