import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './rootNavigation';
import RootTab from './RootTab';

export type RootStackParamList = {
  RootTab: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const index = (): JSX.Element => {
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
        <RootStack.Screen name="RootTab" component={RootTab} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default index;
