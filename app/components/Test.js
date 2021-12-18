import React from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';

const Test = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Test</Text>
      <Button
        onPress={() => navigation.navigate('Profile')}
        title='back to profile!'
      />
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
});

export default Test;
