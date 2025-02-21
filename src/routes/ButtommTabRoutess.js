import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Travel1,
  TuruncuBisiklet,
  TuruncuBisiklet2,
  TuruncuBisiklet3,
} from '../Screens';
import {RoutesName} from '../config';
import {Icons} from '../assets';

const Tab = createBottomTabNavigator();
const ButtommTabRoutess = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={TuruncuBisiklet}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              style={{tintColor: color, height: size, width: size}}
              source={Icons.home}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={TuruncuBisiklet}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              style={{tintColor: color, height: size, width: size}}
              source={Icons.menu}
            />
          ),
        }}
      />
      <Tab.Screen
        name="plus"
        component={TuruncuBisiklet3}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              style={{tintColor: color, height: size, width: size}}
              source={Icons.home}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bildirim"
        component={TuruncuBisiklet2}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              style={{tintColor: color, height: size, width: size}}
              source={Icons.bell}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Kullanıcı"
        component={TuruncuBisiklet2}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              style={{tintColor: color, height: size, width: size}}
              source={Icons.user2}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ButtommTabRoutess;
