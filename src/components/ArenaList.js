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
      <Button title="Open Modal" onPress={handleModal} />
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
  },
});

export default ArenaList;
