import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Home2 from '../components/Home';
import Home3 from '../components/Home';
import Groups from '../components/Groups';
import Create from '../components/Create';
import Profile from '../components/Profile';
import TabBar from '../components/TabBar';
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name='Home'
        component={Home}
        initialParams={{ icon: 'ios-home' }}
      />
      <Tab.Screen
        name='Groups'
        component={Groups}
        initialParams={{ icon: 'ios-people' }}
      />
      <Tab.Screen
        name='Create'
        component={Create}
        initialParams={{ icon: 'ios-add' }}
      />
      <Tab.Screen
        name='Notifications'
        component={Home3}
        initialParams={{ icon: 'ios-notifications' }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileNavigator}
        initialParams={{ icon: 'ios-person' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
