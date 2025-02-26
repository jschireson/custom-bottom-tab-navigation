import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';


const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      {/* On button press navigate to Test component, ordering of nested navigators is in ProfileNavigator*/}
      <Button
        onPress={() => navigation.navigate('Test')}
        title='Move to another screen!'
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

export default Profile;
