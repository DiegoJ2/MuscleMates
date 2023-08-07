import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Logo from "../assets/logo.png"
const HeaderImage = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={Logo}
        style={styles.headerImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#645F5F',
  },
  headerImage: {
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
});

export default HeaderImage;
