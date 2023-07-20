import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, StatusBar, Image } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    imageSource: require('../../assets/ProfilePage.png'), 
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    imageSource: require('../../assets/Me.png'), 
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    imageSource: require('../../assets/goldstar.jpeg'), 
  },
];

const Item = ({ imageSource }) => (
  <View style={styles.item}>
    <Image source={imageSource} style={styles.image} />
  </View>
);

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item imageSource={item.imageSource} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 0,
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  image: {
    flex: 1,
    height: 800, 
    width: '100%',
  },
});
