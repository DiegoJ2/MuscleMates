import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, StatusBar, Image, Text } from 'react-native';
import { Data } from '../assets/data/DATA';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    imageSource: require('../assets/Pp1.png'), 
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    imageSource: require('../assets/Pp2.png'), 
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    imageSource: require('../assets/Pp3.png'), 
  },
  {
    id: 'a68afc-c605-48d3-a4f8-fbd91aa97f34',
    imageSource: require('../assets/Pp4.png'), 
  },
  {
    id: '7a0f-3da1-471f-bd96-145571e29d71',
    imageSource: require('../assets/Pp5.png'), 
  },
];

const Item = ({data}) => (
  <View style={styles.home}>
    <Text>{data.name}</Text>
    <Image source={data.pfp} 
    style={{
      height: 340,
      width: 275,
      borderRadius: '50%',
      padding:100,
      left:'21%',
      border:''
    }}
    />
    <Text>{data.age}</Text>
    <Text>{data.pronouns}</Text>
    <Text>{data.experience}</Text>
    <Text>{data.maxBench}</Text>
    <Text>{data.deadLift}</Text>
  </View>
);

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Data}
        renderItem={({ item }) => <Item data={item}/>}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:'#535050'
  },
  home: {
  flex: 1,
    color: 'white',
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
