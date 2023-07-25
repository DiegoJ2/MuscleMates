import { Text, View, StyleSheet, Image } from "react-native";

const Triangle = () => {
  return (
    <View style={styles.triangle} />
  );
};

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.whiteRectangle}>
        <Text style={styles.textInRectangle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          tincidunt aliquet ante non vulputate. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Text>
      </View>
      <View style={styles.profile}>
        <Image
          source={require("../assets/dempsey.jpeg")}
          style={{
            height: 50,
            width: 50,
            left: ".7%",
            top: "250%",
            borderRadius: 50,
          }}
        />
      </View>
      <View style={styles.greenRectangle}>
        <Text style={styles.textInRectangle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          tincidunt aliquet ante non vulputate. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Text>
      </View>
      <View  style={styles.profile2}>
        <Image
          source={require("../assets/Me.png")}
          style={{
            height: 50,
            width: 50,
            left: "89%",
            top: "450%",
            borderRadius: 50,
          }}
        />
      </View>
      <View style={styles.keyboard}></View>
      <View>
        <Image
         style={styles.akeyboard}
        source={require("../assets/IMG_3369.jpeg")}/>
      </View>
      <View style={styles.textbar}></View>
      <Triangle />
      <View style={styles.white2Rectangle}>
      <Text style={styles.textInRectangle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          tincidunt aliquet ante non vulputate. 
        </Text>
        </View>
        <View style={styles.profile3}>
        <Image
          source={require("../assets/dempsey.jpeg")}
          style={{
            height: 50,
            width: 50,
            left: ".7%",
            top: "-40%",
            borderRadius: 50,
          }}
        />
      </View>

      <View style={styles.green2Rectangle}>
        <Text style={styles.textInRectangle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </Text>
      </View>

      <View  style={styles.profile2}>
        <Image
          source={require("../assets/Me.png")}
          style={{
            height: 50,
            width: 50,
            left: "89%",
            top: "-3%",
            borderRadius: 50,
          }}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#645F5F",
  },
  whiteRectangle: {
    width: "80%",
    backgroundColor: "white",
    position: "absolute",
    top: "9%",
    right: "10%",
    borderRadius: 10,
    padding: 10,
  },
  textInRectangle: {
    color: "black",
  },
  profile: {
    position: "relative",
  },
  greenRectangle: {
    width: "80%",
    backgroundColor: "#00ff00",
    position: "absolute",
    top: "25%",
    right: "5%",
    borderRadius: 10,
    padding: 10,
  },
  profile2: {
    position: "relative",
  },
  keyboard: {
    width: "100%",
    height: "30%",
    backgroundColor: "#5A5A5A",
    position: "absolute",
    top: "60%",
    borderRadius: 0,
  },
  akeyboard: {
    width: "100%",
    height: 300,
top: '155%',
  },
  textbar: {
    width: "80%",
    height:"4.5%",
    backgroundColor: "#00ff00",
    position: "absolute",
    top: "61%",
    right: "20%",
    borderRadius: 10,
    padding: 10,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 30,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#00ff00", 
    position: "absolute",
    top:"61%", 
    right: 15, 
    transform: [{ rotate: "60deg" }], 
  },
  white2Rectangle: {
    width: "80%",
    backgroundColor: "white",
    position: "absolute",
    top: "40%",
    right: "10%",
    borderRadius: 10,
    padding: 10,
  },
  profile3: {
    position: "relative",
  },
  green2Rectangle: {
    width: "80%",
    backgroundColor: "#00ff00",
    position: "absolute",
    top: "50%",
    right: "5%",
    borderRadius: 10,
    padding: 10,
  },
});
