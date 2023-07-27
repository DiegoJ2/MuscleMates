import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Button } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import Modal from "react-native-modal";


const CompScreen = () => {
  const [selectedFirst, setSelectedFirst] = useState(""); 
  const [selectedSecond, setSelectedSecond] = useState(""); 
  const [isModalVisible, setIsModalVisible] = React.useState(false);
const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const data = [
    { key: "1", value: "Iron" },
    { key: "2", value: "Bronze" },
    { key: "3", value: "Silver" },
    { key: "4", value: "Gold" },
    { key: "5", value: "Platinum" },
    { key: "6", value: "Diamond" },
    { key: "7", value: "Master" },
  ];

  const Data = [
    { key: "1", value: "Arms" },
    { key: "2", value: "Legs" },
    { key: "3", value: "Back" },
    { key: "4", value: "Squat" },
    { key: "5", value: "Chest" },
    { key: "6", value: "Shoulders" },
    { key: "7", value: "Full Body" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.lists}>
        <View style={styles.list1}>
          <SelectList
            setSelected={(val) => setSelectedFirst(val)}
            data={data}
            save="value"
            style={{ color: "white", top: "10%" }}
          />
        </View>
        <View style={styles.list2}>
          <SelectList
            setSelected={(val) => setSelectedSecond(val)}
            data={Data}
            save="value"
          />
        </View>
      </View>

      <View style={styles.water}>
        <Text style={styles.title}>Tab One</Text>
        <View style={styles.separator} />
        <Button title="button" onPress={handleModal} />
        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={handleModal} />
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default CompScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#645F5F",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  lists: {
    top: '5%',
  },
  list2: {
    left: '35%',
    top: '50%',
    position: 'absolute',
    color: 'white'
  },
  list1: {
    top: '50%',
    position: 'absolute',
  },
  water: {
    position: 'relative '
  }
});