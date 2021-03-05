import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';
import {navigationRef} from './rootNavigation';

const RootStack = createStackNavigator();

const RootStackNavigation = () => {
  const loggedIn = true;

  const navigationOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
    cardStyle: {},
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        initialRouteName="RootTab"
        headerMode="none"
        screenOptions={navigationOptions}>
        {loggedIn ? (
          <RootStack.Screen name="HomeTab" component={HomeNavigation} />
        ) : (
          <RootStack.Screen name="AuthStack" component={AuthNavigation} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigation;
