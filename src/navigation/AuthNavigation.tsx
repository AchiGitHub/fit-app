import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import Login from '../containers/login/Login';

export type AuthNavigationParamList = {
  Login: undefined;
};

const Stack = createStackNavigator<AuthNavigationParamList>();

const AuthNavigation = () => {
  const navigationOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  };
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen component={Login} name="Login" />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
