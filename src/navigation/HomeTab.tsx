import React from 'react';
import Home from '../containers/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PRIMARY_COLOR} from '../_styles/Colors';

export type HomeBottomTabParameters = {
  Home: undefined;
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
        component={Home}
        name="Home"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name={'home'} size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        component={Home}
        name="Search"
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name={'search1'} size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        component={Home}
        name="Explore"
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={'message-minus-outline'}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        component={Home}
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
