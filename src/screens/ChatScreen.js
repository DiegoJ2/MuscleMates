import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import { ArenaData } from '../assets/data/ARENADATA';
import * as ImagePicker from 'expo-image-picker';

export default function ChatScreen({ route }) {
  const [count, setCount] = useState(40); 
  const [selectedImage, setSelectedImage] = useState(null);

  const exerciseId = route.params?.id; // Safely access the id
  
  // Find the exercise data or default to an empty object
  const exerciseData = ArenaData.find(item => item.id === exerciseId) || {};

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => setCount(count - 1), 1000);
    }
  }, [count]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  // If there's no exercise data, don't render the component
  if (!exerciseData.exercise) {
    return <Text>Head over to the pit menu to select a challenger and come back here to view progress!</Text>;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.profile} source={exerciseData.profileImage || exerciseData.rank} /> 
      <Text style={styles.textInRectangle}>Exercise: {exerciseData.exercise}</Text>
      
      <TouchableOpacity style={styles.uploadVideoButton}>
      {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />}
      <Button title="Upload Video" onPress={pickImage} />
      </TouchableOpacity>
      
      {/* <Button title="Vote" onPress={() => alert("Vote Clicked")} /> */}
      
      <Text>Time left: {count} weeks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#645F5F",
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  textInRectangle: {
    color: "black",
    marginBottom: 10,
    
  },
  uploadVideoButton: {
    padding: 10,
    backgroundColor: "#645F5F",
    borderRadius: 10,
    marginBottom: 10,
    
  },

});

