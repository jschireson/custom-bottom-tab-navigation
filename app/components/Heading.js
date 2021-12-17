import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import { color } from 'react-native-reanimated';
import AnimatedScrollView from './AnimatedScrollView';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-ionicons';


const IconBar = () => (
    <Icon name="ios-person" />
)

const Heading = () => {

  return (
    <View>
      {/* <View styles={{flexDirection:'row', flexWrap:'wrap', flex:1, justifyContent: 'space-between'}}>
      <Text style={{flex:1}}>[Hotshot icon]</Text>
      <View>
      <Text style={{alignItems:'flex-end', flex:1}}>[Hotshot icon]</Text>
      </View>
      </View> */}

      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text style={{ fontSize: 20, color: 'red', fontWeight: '200' }}>HotShot</Text>
        </View>
        <View style={{ flex: 1, paddingRight: 10 }}>
          <Text style={{ textAlign:'right' }}>1270</Text>
        </View>
      </View>
    
<View style={[styles.headerItems, 
{flexDirection:'row', flexWrap:'wrap', alignItems:'center', justifyContent: 'space-between' }]}>
            <View style={{ flex: 1, paddingLeft: 10 }}>
    <IconBar/>
    </View>
    <View style={{ flex: 6}}>
   <Text>John Smith - Stanford</Text>
   </View>
   <View style={{ flex: 6, textAlign:'right' }}>
   <Text>Lifetime: 21-13</Text>
   </View>
   </View>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#76a6ef',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Heading;
