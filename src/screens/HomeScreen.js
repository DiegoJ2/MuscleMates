import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; 

import { Data } from "../assets/data/DATA";

const Item = ({ data }) => (
  <View style={styles.home}>
    <View style={styles.grayrectangle}></View>
    <Image
      source={data.pfp}
      style={{
        height: 378,
        width: 326,
        borderRadius: "25%",
        padding: 100,
        border: 20,
        overflow: "hidden",
        borderWidth: 7,
        top: 115,
        left: "14%",
      }}
    />
    <Text
      style={{
        textAlign: "center",
        fontSize: 24,
        color: "white",
        top: 30,
        padding: 100,
        right: "15%",
      }}
    >
      {data.name}
    </Text>

    <Text
      style={{
        textAlign: "center",
        top: "-13.8%",
        color: "#FFFDFD",
        fontSize: 24,
        left: "6%",
      }}
    >
      , {data.age}
    </Text>

    <Text
      style={{
        color: "#3A81FF",
        fontSize: 15,
        top: "-14%",
        left: "19%",
      }}
    >
      {data.location}
    </Text>
    
    <View style={styles.touchableContainer}>
      <TouchableOpacity style={styles.touchable}>
        <Icon name="ban" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable}>
        <Icon name="user-plus" size={24} color="white" /> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable}>
        <Icon name="comment" size={24} color="white" /> 
      </TouchableOpacity>
    </View>

  </View>
);

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Data}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#535050",
  },
  home: {
    flex: 1,
    color: "white",
    textAlign: "center",
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    flex: 1,
    height: 800,
    width: "100%",
  },
  grayrectangle: {
    width: 326,
    height: 504,
    backgroundColor: "#2D2B2B",
    position: "absolute",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    top: "20%",
    bottom: 170,
    left: "14%",
    right: 20,
  },
  touchableContainer: {
    flexDirection: "row",
    justifyContent: "center", // Align the buttons horizontally
    marginTop: 0, // Remove the top margin
    top:"-12%",
    color:'#000000'
  },
  touchable: {
    padding: 0,
    borderRadius: 0,
    flex: 0,
    alignItems: "center",
    marginHorizontal: 25,
  },
});
