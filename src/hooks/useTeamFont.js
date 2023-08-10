import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";

const useTeamFonts = async () => {

  const fontLoaded =
    Font.loadAsync({
      Angkor: require('../assets/fonts/Angkor/ .ttf'),
    });

  return {
    fontLoaded
  }
}

export default useTeamFonts;