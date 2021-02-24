import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './rootNavigation';

import HomeNavigation from './HomeNavigation';
import AuthNavigation from './AuthNavigation';

const RootStack = createStackNavigator();

const RootStackNavigation = (): JSX.Element => {
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
