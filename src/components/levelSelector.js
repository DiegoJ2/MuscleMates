import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { RadioButton } from 'react-native-paper';
import BronzeBadge from "../assets/bronzeBadge.png"
import SilverBadge from "../assets/silverBadge.png"
import GoldBadge from "../assets/goldBadge.png"
import DiamondBadge from "../assets/diamondBadge.png"

const LevelMenuSelector = () => {
    const [checked, setChecked] = useState('first');

    return (
      <View style={styles.CheckMenu}>
        {/* Bronze Menu */}
        <View style={styles.bronzeBadgeMenu}>
            <Image source={BronzeBadge} />
            <RadioButton
                value="bronze"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
                style={styles.checkMenuBox}
                backgroundColor="white"
            />
        </View>

        {/* silver Menu */}
        <View style={styles.bronzeBadgeMenu}>
            <Image source={SilverBadge} />
            <RadioButton
                value="silver"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
                style={styles.checkMenuBox}
                backgroundColor="white"
            />
        </View>
        <View style={styles.bronzeBadgeMenu}>

            {/* gold Menu */}
            <Image source={GoldBadge} />
            <RadioButton
                value="gold"
                status={checked === 'third' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('third')}
                style={styles.checkMenuBox}
                backgroundColor="white"
            />
        </View>

        {/* Diamond Menu */}
        <View style={styles.bronzeBadgeMenu}>
            <Image source={DiamondBadge} />
            <RadioButton
                value="diamond"
                status={checked === 'fourth' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('fourth')}
                style={styles.checkMenuBox}
                backgroundColor="white"
            />
        </View>
      </View>
    );
}

export default LevelMenuSelector;

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
      width: "100%"
    },
    CheckMenu: {
      maxHeight: "100%",
      margin: "auto",
      width: "90%",
      maxWidth: "5%",
      flex:1,
      flexDirection:'row'
    },
    checkMenuBox: {
  
    },
    typeMenu: {
      marginTop: "5%",
      margin: "auto",
      width: "100%"
    },
    bronzeLevel: {
  
    },
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
