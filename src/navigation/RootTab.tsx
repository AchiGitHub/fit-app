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
  const logined = true;
  return (
    <RootTab.Navigator
      initialRouteName={logined ? 'HomeTab' : 'AuthStack'}
      screenOptions={{
        headerShown: false,
      }}>
      {!logined && <RootTab.Screen name="AuthStack" component={AuthStack} />}
      {logined && <RootTab.Screen name="HomeTab" component={HomeTab} />}
    </RootTab.Navigator>
  );
};
export default index;
