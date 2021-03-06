import React from 'react';
import Feed from '../containers/Feed/Feed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PRIMARY_COLOR} from '../_styles/Colors';
import Profile from '../containers/Profile/Profile';
import Challenges from '../containers/Challenges/Challenges';

export type HomeBottomTabParameters = {
  Feed: undefined;
};

const Tabs = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: PRIMARY_COLOR,
        },
        activeTintColor: '#fff',
        style: {
          height: 50,
        },
      }}>
      <Tabs.Screen
        component={Feed}
        name="Home"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name={'home'} size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        component={Feed}
        name="Search"
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name={'search1'} size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        component={Challenges}
        name="Challenges"
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name={'leaderboard'} size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        component={Profile}
        name="Profile"
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name={'person-outline'} size={25} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default HomeTabs;
