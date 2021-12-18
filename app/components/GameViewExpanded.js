import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Home from '../components/Home'


  export function GameViewExpanded({navigation, route}){
    const { itemId, otherParam, stuffTitle, stuff2 } = route.params;
    return (
    
    <View style={styles.container}>
      <Text style={styles.text}>GameViewExpanded</Text>
      {/* <Text style={styles.text}>{itemID}</Text> */}
      <Text style={styles.text}>Game Title: {stuff2}</Text>


      {/* On button press navigate to Test component, ordering of nested navigators is in ProfileNavigator*/}
      <Button
        onPress={() => navigation.navigate('Home')}
        title='go home!!'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default GameViewExpanded;
