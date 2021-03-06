import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { AppRoutes } from '../constants/routes';
import Login from '../containers/login/Login';

const Stack = createStackNavigator<AppRoutes>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={Login} name="Login" />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
