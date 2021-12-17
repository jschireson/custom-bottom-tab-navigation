import React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './app/navigation/TabNavigator';
import TabBarProvider from './app/contexts/TabBarProvider';
import Heading from './app/components/Heading'

export default function App() {
  return (
    <TabBarProvider>
       <Heading />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </TabBarProvider>
  );
}
