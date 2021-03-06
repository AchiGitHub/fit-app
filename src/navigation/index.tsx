import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AppRoutes } from '../constants/routes';

import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';
import { navigationRef } from './rootNavigation';

const RootStack = createStackNavigator<AppRoutes>();

const RootStackNavigation = () => {
  const loggedIn = false;

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator headerMode="none">
        {loggedIn ? (
          <RootStack.Screen name="Feed" component={HomeNavigation} />
        ) : (
          <RootStack.Screen name="Login" component={AuthNavigation} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigation;
