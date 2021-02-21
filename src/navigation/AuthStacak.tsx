import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import Login from '../containers/Login';

export type AuthStackParamList = {
  Login: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
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

export default AuthStack;
