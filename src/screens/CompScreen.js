import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import LevelMenuSelector from "../components/levelSelector";
import ArenaList from "../components/ArenaList";
import CompMenuSelector from "../components/compMenuSelector";

const CompScreen = () => {
  const [parentValue ] = useState();

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.arenaHeader}>
          Filter Arena
        </Text>
        <View style={styles.levelMenu}>
          <Text>
            Select Level:
          </Text>
          <LevelMenuSelector />
          <View style={styles.bronzeLevel}></View>
        </View>
        <View style={styles.typeMenu} value={parentValue}>
          <Text>
            Select Type:
          </Text>
          <CompMenuSelector />
        </View>
        <ArenaList />
      </View>
    </ScrollView>
  );
};

export default CompScreen;

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  itemContainer: {
    width: '90%',      
    height: '30%',     
    marginBottom: 20,
    justifyContent: 'center', 
    alignItems: 'center',    
  },
  blueBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '100%',   
    justifyContent: 'center', 
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