import { Text, View, StyleSheet, Image } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 25,
        }}
      >
        Diego Jimenez
      </Text>
      <View style={styles.profile}>
        <Image
          source={require("../../assets/Me.png")}
          style={{
            alignItems: "center",
            height: 100,
            width: 100,
            left: ".7%",
            top: "50%",
            borderRadius: "100%",
          }}
        />
      </View>
      <View styles={styles.basic}>
        <Text
          style={{
            textAlign: "center",
            top: "75%",
          }}
        >
          Age:16
        </Text>
        <Text
          style={{
            textAlign: "center",
            top: "75%",
          }}
        >
          Pronous: He/Him
        </Text>
        <Text
          style={{
            textAlign: "center",
            top: "75%",
          }}
        >
          Experience: 8 years
        </Text>
        <Text
          style={{
            textAlign: "center",
            top: "75%",
          }}
        >
          Max Bench: 225 10x Deadlift: 415 7x
        </Text>
      </View>
      <Text
        style={{
          textAlign: "center",
          top: "15%",
        }}
      >
        Bio place holder
      </Text>

      <View>
        <Image
          source={require("../../assets/download.jpeg")}
          style={{
            alignItems: "center",
            height: 100,
            width: 100,
            right: "38%",
            top: "250%",
            borderRadius: "100%",
          }}
        />
      </View>

      <View style={styles.profile}>
        <Image
          source={require("../../assets/images.jpeg")}
          style={{
            alignItems: "center",
            height: 100,
            width: 100,
            left: ".7%",
            top: "140.9%",
            borderRadius: "100%",
          }}
        />
      </View>

      <View style={styles.profile}>
        <Image
          source={require("../../assets/goldstar.jpeg")}
          style={{
            alignItems: "center",
            height: 100,
            width: 100,
            left: "38.99%",
            top: "22%",
            borderRadius: "100%",
          }}
        />
      </View>

      <Text
        style={{
          right: "38.99%",
          top: "2.7%",
        }}
      >
        Bench 225 x10
      </Text>

      <Text
        style={{
          textAlign: "center",
          top: ".3%",
        }}
      >
        You tried X999
      </Text>

      <Text
        style={{
          left:'38%',
          bottom: "2%",
        }}
      >
        Squat 315 X1
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5A5A5A", 
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    alignItems: "center", 
    marginVertical: 10, 
  },
  basic: {
    top: "15%",
    textAlign: "center",
  },
});
