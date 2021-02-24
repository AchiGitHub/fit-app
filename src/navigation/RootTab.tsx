import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStacak';
import HomeTab from './HomeTab';

export type rootStackParamList = {
  AuthStack: undefined;
  HomeTab: undefined;
  StoryTaker: undefined;
  Direct: undefined;
};

const RootTab = createStackNavigator<rootStackParamList>();

const index = (): JSX.Element => {
  const loggedIn = true;
  return (
    <RootTab.Navigator
      initialRouteName={loggedIn ? 'HomeTab' : 'AuthStack'}
      screenOptions={{
        headerShown: false,
      }}>
      {!loggedIn && <RootTab.Screen name="AuthStack" component={AuthStack} />}
      {loggedIn && <RootTab.Screen name="HomeTab" component={HomeTab} />}
    </RootTab.Navigator>
  );
};
export default index;
