import { Text, View, StyleSheet, Image } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={require("../../assets/Me.png")}
          style={{
            height: 100,
            width: 100,
            left: "37%",
            top: "50%",
            borderRadius: "100%",
          }}
        />

      </View>
      <Text
          style={{
            height: 215,
            width: 215,
            left: "20%",
            top: "50%",

          }}
        >
          Diego Is a cutie pie
        </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignContent: "center",
  },
});
