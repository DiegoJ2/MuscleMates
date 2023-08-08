import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import LevelMenuSelector from "../components/levelSelector";
import ArenaList from "../components/ArenaList";
import CompMenuSelector from "../components/compMenuSelector";
import { useFonts } from 'expo-font';


const CompScreen = () => {
  const [fontLoaded] = useFonts({
    'Angkor': require('../assets/Fonts/Angkor/Angkor-Regular.ttf'),
  });
  const [parentValue ] = useState();

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={[styles.arenaHeader, fontLoaded && { fontFamily: 'Angkor' }]}>
          Filter Pit
        </Text>
        <View style={styles.levelMenu}>
          <Text style={styles.texts}>
            Select Level:
          </Text>
          <LevelMenuSelector />
          <View style={styles.bronzeLevel}></View>
        </View>
        <View style={styles.typeMenu} value={parentValue}>
          <Text style={styles.texts}>
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
  arenaHeader: {
    textAlign: 'center',
    color:'white',
    fontSize:40,
    top:45,
    fontWeight: 900,
    fontFamily: 'Angkor'
  },
  typeMenu:{
textAlign:'center',
top:150
  },
  levelMenu:{
    flexDirection:'row',
    alignItems: 'center',
    top:100,
  },
  scrollContainer:{
    backgroundColor:'#535050',
    display:'flex'
  },
texts:{
  color:'white',
  fontSize:20,
  fontFamily:'Angkor'
},
});
