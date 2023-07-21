import { Text, View, StyleSheet, Image } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 25,
          bottom:'25%'
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
            top: "-190%",
            borderRadius: "100%",
          }}
        />
      </View>
      <View styles={styles.basic}>
        <Text
          style={{
            textAlign: "center",
            top: "-255%",
          }}
        >
          Age:16
        </Text>
        <Text
          style={{
            textAlign: "center",
            top: "-255%",
          }}
        >
          Pronous: He/Him
        </Text>
        <Text
          style={{
            textAlign: "center",
            top: "-255%",
          }}
        >
          Experience: 8 years
        </Text>
        <Text
          style={{
            textAlign: "center",
            top: "-255%",
          }}
        >
          Max Bench: 225 10x Deadlift: 415 7x
        </Text>
      </View>
      <Text
        style={{
          textAlign: "center",
          top: "-15%",
          marginLeft:10,
          marginRitght:10,
        }}
      >
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet mollis magna. Praesent et velit commodo, ullamcorper erat non, gravida nunc. Cras vulputate orci enim, vel mollis nisi aliquam quis. Maecenas euismod congue magna, non lacinia arcu volutpat a. Nullam nec dignissim augue. Pellentesque fermentum, erat eu tempor dignissim, risus velit tempus velit, a porttitor nulla felis sed magna.      </Text>

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
