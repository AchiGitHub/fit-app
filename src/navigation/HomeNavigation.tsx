import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { PRIMARY_COLOR } from '../_styles/Colors';
import { AppRoutes } from '../constants/routes';
import Feed from '../containers/Feed/Feed';
import Profile from '../containers/Profile/Profile';
import Challenges from '../containers/Challenges/Challenges';

const Tabs = createBottomTabNavigator<AppRoutes>();

const HomeTabs = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: PRIMARY_COLOR
        },
        activeTintColor: '#fff',
        style: {
          height: 50
        }
      }}>
      <Tabs.Screen
        component={Feed}
        name="Feed"
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name={'home'} size={25} color={color} />
          )
        }}
      />
      <Tabs.Screen
        component={Feed}
        name="Search"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name={'search1'} size={25} color={color} />
          )
        }}
      />
      <Tabs.Screen
        component={Challenges}
        name="Challenges"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name={'leaderboard'} size={25} color={color} />
          )
        }}
      />
      <Tabs.Screen
        component={Profile}
        name="MyProfile"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name={'person-outline'} size={25} color={color} />
          )
        }}
      />
    </Tabs.Navigator>
  );
};

export default HomeTabs;
