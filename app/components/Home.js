import React from 'react';
import {TouchableWithoutFeedback, SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import AnimatedScrollView from './AnimatedScrollView';
import GameViewExpanded from './GameViewExpanded';



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'David Lipman (1230) beat Jacob Schireson (1140)',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Elon Musk (1130) eviscerated Jeff Bezos (1150)',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Jeff Bezos (1020) destroyed Mickey Mouse (780)',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'LeBron James (1020) destroyed Kevin Durant (780)',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Lionel Messi (1020) destroyed Erling Haaland (780)',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'David Lipman (1230) beat Jacob Schireson (1140)',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Elon Musk (1130) eviscerated Jeff Bezos (1150)',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Jeff Bezos (1020) destroyed Mickey Mouse (780)',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'David Lipman (1230) beat Jacob Schireson (1140)',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Elon Musk (1130) eviscerated Jeff Bezos (1150)',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Jeff Bezos (1020) destroyed Mickey Mouse (780)',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'David Lipman (1230) beat Jacob Schireson (1140)',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Elon Musk (1130) eviscerated Jeff Bezos (1150)',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Jeff Bezos (1020) destroyed Mickey Mouse (780)',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    {/* title is DATA json title */}
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Home = ({navigation}) => {

  const gameTitle = styles.title

  const renderItem = ({ item }) => (
    <View>
      <Item title={item.title} />
    </View>

  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={{flex:1, justifyContent: 'flex-start', alignItems:'flex-start'}}>
      <Text>
        Recent Games
      </Text>
      </View>
       */}
      <View style={{flex:20, flexDirection:'column'}}>
        {/* Mapping FlatList items by item id */}
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <TouchableWithoutFeedback onPress={() => navigation.navigate('GameViewExpanded', {itemId: 86, otherParam: 'anything you want here', stuff2: item.title})}>
            <Text style={styles.item}>{item.title}</Text>
          </TouchableWithoutFeedback>
        )}

        // keyExtractor={item => item.id}
      />
      </View>
      {/* </TouchableWithoutFeedback> */}
      
    </SafeAreaView>

    // <AnimatedScrollView style={styles.container}>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'flex-start',
    backgroundColor: '#76a6ef',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    borderBottomColor: 'grey',
    borderTopColor: 'grey',
    borderTopWidth:'1px',
    borderBottomWidth:'1px',
    marginVertical: 0,
    marginHorizontal: 0,
  },
  title: {
    fontSize: 16,
  },
});

export default Home;
