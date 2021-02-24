import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import Home from '../containers/Home';

export type HomeNavigationParamList = {
  Login: undefined;
};

const Stack = createStackNavigator<HomeNavigationParamList>();

const HomeNavigation = () => {
  const navigationOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  };
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen component={Home} name="Login" />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
