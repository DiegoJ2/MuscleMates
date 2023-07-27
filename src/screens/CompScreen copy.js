import { Text, View, StyleSheet, Image } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import React from 'react';


export default function CompScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.redRectangle}>
        <Text style={styles.textInRectangle}>COMPETITVE</Text>
      </View>
      <View style={styles.profile}>
        <Image
          source={require("../assets/Me.png")}
          style={{
            alignItems: "center",
            height: 100,
            width: 100,
            left: ".7%",
            top: "-10%",
            borderRadius: "100%",
          }}
        />
      </View>
      <View style={styles.profile}>
        <Image
          source={require("../assets/download.jpeg")}
          style={{
            alignItems: "center",
            height: 100,
            width: 100,
            right: "38%",
            top: "20%",
            borderRadius: "100%",
          }}
        />
      </View>
      <View style={styles.profile}>
        <Image
          source={require("../assets/images.jpeg")}
          style={{
            alignItems: "center",
            height: 100,
            width: 100,
            left: ".7%",
            top: "-99%",
            borderRadius: "100%",
          }}
        />
      </View>
      <View style={styles.profile}>
        <Image
          source={require("../assets/goldstar.jpeg")}
          style={styles.jfkd}
        />
      </View>
      <Text
        style={{
          right: "38.99%",
          top: "-25%",
        }}
      >
        Bench 225
      </Text>

      <Text
        style={{
          textAlign: "center",
          top: "-27%",
        }}
      >
        You tried
      </Text>

      <Text
        style={{
          left: "39%",
          bottom: "29%",
        }}
      >
        Squat 315
      </Text>
      <View style={styles.white2Rectangle}>

      <Text style={styles.textInwRectangle}>
          V.S.
        </Text>

        <View>

        <Image    source={require("../assets/Me.png")}
          style={{
            alignItems: "center",
            height: 50,
            width: 50,
            left: ".7%",
            top: "-39%",
            borderRadius: "100%",
          }}
        />

        </View>

        <View>
        <Image
          source={require("../assets/dempsey.jpeg")}
          style={{
            height: 50,
            width: 50,
            left: "85%",
            top: "-140%",
            borderRadius: 50,
          }}
        />
      </View>

        </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#645F5F",
    alignItems: "center",
    justifyContent: "center",
  },
  jfkd: {
    alignItems: "center",
    height: 100,
    width: 100,
    left: "38.99%",
    top: "-220%",
    borderRadius: "100%",
  },
  redRectangle: {
    width: "50%",
    backgroundColor: "#00ff00",
    position: "absolute",
    top: "9%",
    right: "25%",
    borderRadius: 10,
    padding: 10,
  },
  textInRectangle: {
    color: "black",
    textAlign: "center",
    fontSize: "25",
  },
  profile: {
    alignItems: "center",
    marginVertical: 10,
    position: "relative",
    alignContent: "center",
  },
  white2Rectangle: {
    width: "80%",
    height:"10%",
    backgroundColor: "black",
    position: "absolute",
    top: "60%",
    right: "10%",
    borderRadius: 10,
    padding: 10,
  },
  textInwRectangle: {
    color: "white",
    textAlign:'center',
    justifyContent:'center',
    top:'35%',
    fontSize:25,
  },
});
