import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../components/Profile';
import Test from '../components/Test';
import Home from '../components/Home';


const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    // Test navigator nested within Profile, switch their lines to switch heirarchy
    <Stack.Navigator screenOptions={{ headerTransparent: true, title: '' }}>
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='Test' component={Test} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ProfileNavigator;
