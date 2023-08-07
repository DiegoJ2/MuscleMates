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
  Button
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; 


import { Data } from "../assets/data/DATA";

const Item = ({ data }) => (
  // Container for the whole Page
  <View style={styles.home}>
    <Image src="../assets/logo.png" />
    {/* Container for the Feed */}
    <View style={styles.homePageFeed1}>
      {/* Container for Images */}
      <View style={styles.homePageImages}>
        <Image
          source={data.pfp}
          style={styles.homePageImages}
        />
      </View>
      {/* Container for the Text */}
      <View style={styles.homePageText}>
        <Text
          style={styles.homePageName}
        >
          {data.name}, {data.age}
        </Text>
        <Text
          style={styles.homePageCity}
        >
          {data.city}, {data.state}
        </Text>
        <Text
          style={styles.homePageGoal}
        >
          <Text style={styles.GoalArea}>
            Goal:  
          </Text>
          {data.goal}
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

  },
  home: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "#645F5F",
    alignItems:"center",
  },
  homePageText: {
    backgroundColor: "#383838",
    height: 400,
    width: "100%",
    flex: 1,
    borderBottomLeftRadius: "50%",
    borderBottomRightRadius: "50%",

  },
  homePageFeed1: {
    width: "80%",
    maxWidth: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:"15%",
    marginTop:"15%",
  },
  homePageImages: {
    display: "inline-block",
    width: "100%",
    height: 500,
    alignItems: "center",
    borderTopLeftRadius: "50%",
    borderTopRightRadius: "50%",
  },
  homePageName: {
    fontWeight : "bold",
    color: "#FFFFFF",
    fontSize: "35",
    marginLeft:"5%",
    marginTop: "10%",
    marginBotom: "30%",
    
  },
  homePageCity:{
    color:"#0760FF",
    marginLeft:"6%",
    marginBottom: "5%",
    fontSize: "35",
    fontWeight : "bold",

  },
  homePageGoal: {
    fontSize: "35",
    fontWeight : "bold",
    overflow: "hidden"
  },
  GoalArea: {
    color:"#3A81FF",
    fontSize: "35",
    fontWeight : "bold",
  },
  touchable: {

  }
});
