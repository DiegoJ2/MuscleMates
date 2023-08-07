import React from 'react';
import { View, Text, Modal, Button, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ArenaData } from '../assets/data/ARENADATA';
import { useNavigation } from '@react-navigation/native';

const PitModal = ({ data, isModalVisible, handleModal }) => {
  const navigation = useNavigation();

  if (!data) {
    return null;
  }
  const handleChallenge = (exerciseId) => {
    handleModal(); 
    navigation.navigate('Chat', { id: exerciseId }); 
  };

  return (
    <Modal isVisible={isModalVisible} onPress={handleModal} animationIn="fadeInRightBig">
      <View style={styles.modalContent}>
        <View style={styles.ModalContentContainer}>
          <Button title="Exit Arena" onPress={handleModal} />
          <FlatList
            data={ArenaData}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <View style={styles.blueBackground}>
                  <Image source={item.rank} style={styles.rankImage} />
                  <View>
                    <Text style={styles.exerciseText}>Exercise: {item.exercise}</Text>
                    <Text>Weight: {item.weight}</Text>
                    <Text>Reps: {item.reps}</Text>
                    <TouchableOpacity
                      style={styles.challengeButton}
                      onPress={() => {
                        handleChallenge(item.id); // Close the modal and navigate to the Chat tab
                      }}
                    >
                      <Text>Challenge</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    backgroundColor: '#645F5F',
    alignItems: "center",
    justifyContent: "center",
  },
  ModalContentContainer: {
    marginTop: "10%",
    maxWidth: "100%",
    width: "100%",
  },
  itemContainer: {
    width: '90%',
    marginBottom: 20,

  },
  blueBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 20,
  },
  exerciseText: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  rankImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  challengeButton: {
    marginTop: 10,
    padding: 5,
    backgroundColor: 'grey',
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default PitModal;
