import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = ({ color, tab, onPress, icon }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon && <Ionicons name={icon} size={24} color={color} />}
      <Text style={{ color }}>{tab.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});

export default Tab;
