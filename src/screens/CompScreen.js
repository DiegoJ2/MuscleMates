import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import Modal from "react-native-modal";
import { color } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const navigation = useNavigation();

const navigateToOtherPage = () => {
  navigation.navigate("OtherScreen");
};


const DropdownRenderer = ({ item }) => (
  <View style={styles.itemContainer}>
    <Image source={item.image} style={styles.itemImage} />
    <Text style={styles.itemText}>{item.value}</Text>
  </View>
);

const CompScreen = () => {
  const [selectedBadge, setSelectedBadge] = useState("");
  const [selectedBodyPart, setSelectedBodyPart] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const data = [
    { key: "1", value: "Iron", image: require("../assets/Iron.jpg") },
    { key: "2", value: "Bronze", image: require("../assets/bronze.jpeg") },
    { key: "3", value: "Silver", image: require("../assets/silver.jpeg") },
    { key: "4", value: "Gold", image: require("../assets/gold.jpeg") },
    { key: "5", value: "Platinum", image: require("../assets/platinum.jpeg") },
    { key: "6", value: "Diamond", image: require("../assets/diamond.jpeg") },
    { key: "7", value: "Master", image: require("../assets/uranium.webp") },
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
      <Text style={styles.text}>THE ARENA</Text>

      <View style={styles.lists}>
        <View
          style={{
            JustifyContent: "center",
            top: "70%",
            position: "absolute",
            width: "40%",
          }}
        >
      <SelectList
            placeholder="BADGES"
            style={{ color: "white", top: "10%" }}
            setSelected={(val) => setSelectedBadge(val)}
            data={data}
            dropdownTextStyles={{ color: "black" }}
            inputStyles={{ color: "black" }}
            save="value"
            renderer={DropdownRenderer} // Use the custom DropdownRenderer component
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            top: "60%",
            left: "60%",
            width: "40%",
            position: "absolute",
          }}
        >
          <SelectList
            placeholder="BODY PARTS"
            setSelected={(val) => setSelectedBodyPart(val)}
            data={Data}
            save="value"
            dropdownTextStyles={{ color: "black" }}
            inputStyles={{ color: "black" }}
          />
        </View>
      </View>

      <View style={{ justifyContent: "center", top: "70%" }}>
        <View style={styles.separator} />
        <View style={styles.button}>
          <Button title="Enter The Arena" onPress={handleModal} color="#FFF" />
        </View>
        <Modal isVisible={isModalVisible}>
          <View style={styles.jinx}>
            <Text>The Arena</Text>
            <View >
            <Text>{selectedBadge}</Text>
            <Text>{selectedBodyPart}</Text>
            </View>
            <Button title="Hide modal" onPress={handleModal} />
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default CompScreen;

const styles = StyleSheet.create({
  lists: {
    top: "10%",
  },

  container: {
    flex: 1,
    backgroundColor: "#645F5F",
    color: "white",
  },
  text: {
    textAlign: "center",
    top: "5%",
    fontSize: 45,
    fontWeight: "bold",
    padding: 10,
  },
  jinx: {
    backgroundColor: "#645F5F",
    color: "white",
    height: "90%",
    alignItems:'center',
  },
  button: {
    alignContent: "center",
  },
});
