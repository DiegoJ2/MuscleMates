import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { RadioButton } from 'react-native-paper';
import BronzeBadge from "../assets/bronzeBadge.png";
import SilverBadge from "../assets/silverBadge.png";
import GoldBadge from "../assets/goldBadge.png";
import DiamondBadge from "../assets/diamondBadge.png";

const CompMenuSelector = () => {
  const [checked, setChecked] = useState('first');

  return (
    <View style={styles.CheckMenu}>
    {/* Chest Menu Option */}
    <View style={styles.silverBadgeMenu}>
      <Text>
        Chest
      </Text>
      <RadioButton
        value="bronze"
        status={checked === 'fifth' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('fifth')}
        style={styles.checkMenuBox}
        backgroundColor="white"
      />
    </View>

    {/* arms Menu Option */}
    <View style={styles.goldBadgeMenu}>
      <Text>
        Arms
      </Text>
      <RadioButton
        value="second"
        status={checked === 'six' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('six')}
        style={styles.checkMenuBox}
        backgroundColor="white"
      />
    </View>

    {/* Back Menu Option */}
    <View style={styles.diamondBadgeMenu}>
      <Text>
        Back
      </Text>
      <RadioButton
        value="second"
        status={checked === 'seven' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('seven')}
        style={styles.checkMenuBox}
        backgroundColor="white"
      />
    </View>

    {/* Leg Menu Option */}
    <View style={styles.bronzeBadgeMenu}>
      <Text>
        Legs
      </Text>
      <RadioButton
        value="second"
        status={checked === 'eight' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('eight')}
        style={styles.checkMenuBox}
        backgroundColor="white"
      />
    </View>
  </View>
  );
}

export default CompMenuSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#645F5F",
    alignItems: "center",
    color: "white",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "100%",
    margin: "auto",
  },
  arenaHeader: {
    marginTop: "5%",
  },
  levelMenu: {
    marginTop: "5%",
    margin: "auto",
    width: "100%",
  },
  CheckMenu: {
    maxHeight: "100%",
    margin: "auto",
    width: "90%",
    maxWidth: "5%",
  },
  checkMenuBox: {},
  typeMenu: {
    marginTop: "5%",
    margin: "auto",
    width: "100%",
  },
  bronzeBadgeMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  silverBadgeMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goldBadgeMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  diamondBadgeMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bronzeLevel: {},
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height: "100%",
    width: "100%",
  },
});
