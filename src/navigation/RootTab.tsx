import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStacak';

export type rootStackParamList = {
  AuthStack: undefined;
  HomeTab: undefined;
  StoryTaker: undefined;
  Direct: undefined;
};

const RootTab = createStackNavigator<rootStackParamList>();

const index = (): JSX.Element => {
  return (
    <RootTab.Navigator initialRouteName="AuthStack">
      <RootTab.Screen name="AuthStack" component={AuthStack} />
    </RootTab.Navigator>
  );
};
export default index;
